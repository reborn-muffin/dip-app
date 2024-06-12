<script>
  import { DateInput } from 'date-picker-svelte';
  import DoubleRangeSlider from '$lib/components/ui/DoubleRangeSlider.svelte';
  import {onMount} from 'svelte';
  import {formatDate} from '$lib/utils/date.js';

  let start = 2000
  let end = 6000

  export let cities
  export let countries
  let selectedCountryId = -1
  let selectedCityId = -1
  let startDate = new Date()
  let endDate = new Date()
  let members = 1
  let duration = 5

  let hotels = []
  $: changedFields = []

  const fetchHotels = async (filterString, isAll) => {
    const response = await fetch('/api/v1/hotels', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        filterString: filterString,
        isAll: isAll
      })
    })
    return await response.json()
  }

  const handleSearch = async () => {
    hotels = await fetchHotels(changedFields.map((f) => f.rule).join(' && '), false)
  }

  const handleFieldsChanged = (field) => {
    const index = changedFields.findIndex((f) => f.name === field.name)
    if (index !== -1) {
      changedFields[index] = field
    } else {
      changedFields.push(field)
    }
  }

  const clearFilters = async() => {
    changedFields = []
    hotels = await fetchHotels('', true)
    start = 2000
    end = 6000
    duration = 5
    members = 1
    startDate = new Date()
    endDate = new Date()
  }

  onMount(async () => {
    hotels = await fetchHotels('', true)
  })
</script>
<div role="tabpanel" class="tab-pane active fade in">
  <div class="tab-para">
    <div class="row">
      <div class="col-lg-4 col-md-4 col-sm-12">
        <div class="single-tab-select-box">
          <h2>destination</h2>
          <div class="travel-select-icon">
            <select class="form-control" bind:value={selectedCountryId}>
              <option value={-1}>enter your destination country</option>
              {#each countries as country}
                <option value={country.id}>{country.name}</option>
              {/each}
            </select>
          </div>
          <div class="travel-select-icon">
            <select class="form-control" bind:value={selectedCityId} on:change={() => handleFieldsChanged({name: 'city', value: cities.filter((c) => c.id === selectedCityId)[0].name, rule: 'city=' + `"${selectedCityId}"`})}>
              <option value={-1}>enter your destination location</option>
              {#each cities.filter((city) => city.country_id === selectedCountryId) as city}
                <option value={city.id}>{city.name}</option>
              {/each}
            </select>
          </div>
        </div>
      </div>
      <div class="col-lg-2 col-md-3 col-sm-4">
        <div class="single-tab-select-box">
          <h2>check in</h2>
          <div class="travel-check-icon">
            <DateInput bind:value={startDate} on:select={() => handleFieldsChanged({name: 'checkInDate', value: formatDate(startDate), rule: "checkInDate>=" + `"${startDate.toISOString()}"`})} />
          </div>
        </div>
      </div>
      <div class="col-lg-2 col-md-3 col-sm-4">
        <div class="single-tab-select-box">
          <h2>check out</h2>
          <div class="travel-check-icon">
            <DateInput bind:value={endDate} on:select={() => handleFieldsChanged({name: 'checkOutDate', value: formatDate(endDate), rule: "check  OutDate<=" + `"${endDate.toISOString()}"`})} />
          </div>
        </div>
      </div>
      <div class="col-lg-2 col-md-1 col-sm-4">
        <div class="single-tab-select-box">
          <h2>duration</h2>
          <div class="travel-select-icon">
            <select class="form-control" bind:value={duration} on:change={() => handleFieldsChanged({name: 'duration', value: duration, rule: `duration="${duration}"`})}>
              <option value={5}>5</option>
              <option value={10}>10</option>
              <option value={15}>15</option>
              <option value={20}>20</option>
            </select>
          </div>
        </div>
      </div>
      <div class="col-lg-2 col-md-1 col-sm-4">
        <div class="single-tab-select-box">
          <h2>members</h2>
          <div class="travel-select-icon">
            <select class="form-control" bind:value={members} on:change={() => handleFieldsChanged({name: 'members', value: members, rule: `members="${members}"`})}>
              <option value={1}>1</option>
              <option value={2}>2</option>
              <option value={4}>4</option>
              <option value={8}>8</option>
            </select>
          </div>
        </div>
      </div>
    </div>
    <div class="co-md-9 col-sm-4">
      <h3>budget:</h3>
      <div>
        <DoubleRangeSlider bind:start bind:end handleChange={() => handleFieldsChanged({name: 'price', value: `from: ${start} to: ${end}`, rule: `price >= "${start}" && price <= "${end}"`})} />
        <div style="display: flex; justify-content: space-between">
          <span>Start price: {start}</span>
          <span>End price: {end}</span>
        </div>
      </div>
    </div>
    <div class="row">
      <div class="col-sm-5"></div>
      <div class="clo-sm-7">
        <div class="about-btn travel-mrt-0 pull-right">
          <button on:click={handleSearch} class="about-view travel-btn">search</button>
        </div>
      </div>
    </div>

    {#if changedFields.length > 0}
      <div style="margin-top: 24px">
        <h3>Filters:</h3>
        <ul>
          {#each changedFields as field}
            <li>{field.name}: {field.value}</li>
          {/each}
        </ul>
        <button class="about-view packages-btn" style="margin-top: 10px" on:click={clearFilters}>
          Reset Filters
        </button>
      </div>
    {/if}
    {#if hotels.length > 0}
      <div style="margin-top: 20px; overflow: scroll; max-height: 230px">
        <h2>Found {hotels.length} hotels</h2>
        <ul style="margin-top: 10px; display: flex; flex-direction: column; gap: 4px">
          {#each hotels as hotel}
            <li style="border: rgba(20,176,243,0.37) solid 2px; border-radius: 4px; padding: 2px 8px; display: flex; justify-content: space-between">
              <div>
                Price: {hotel.price}
                Check In date: {formatDate(new Date(hotel.checkInDate))}
                Check Out date: {formatDate(new Date(hotel.checkOutDate))}
              </div>
              <button class="about-view packages-btn">
                book now
              </button>
            </li>
          {/each}
        </ul>
      </div>
    {:else}
      <div style="margin-top: 20px; overflow: scroll; max-height: 230px">
        <h2>Hotels not found</h2>
      </div>
    {/if}
  </div>
</div>
