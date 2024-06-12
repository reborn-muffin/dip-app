<script>
  import { DateInput } from 'date-picker-svelte';
  import DoubleRangeSlider from '$lib/components/ui/DoubleRangeSlider.svelte';
  import {onMount} from 'svelte';
  import {formatDate} from '$lib/utils/date.js';

  export let cities
  let classTypes = []

  const values = [
    { label: 'Round Trip', value: 'round-trip'},
    { label: 'One Way', value: 'one-way'},
  ]

  let selected = values[0]
  let start = 2000
  let end = 6000
  let cityFrom = -1
  let cityTo = -1
  let departureDate = new Date()
  let returnDate = new Date()
  let classType = -1
  let children
  let adults

  let flights = []
  $: changedFields = []

  const fetchFlights = async (filterString, isAll) => {
    const response = await fetch('/api/v1/flights', {
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
    flights = await fetchFlights(changedFields.map((f) => f.rule).join(' && '), false)
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
    flights = await fetchFlights('', true)
    start = 2000
    end = 6000
    cityFrom = -1
    cityTo = -1
    departureDate = new Date()
    returnDate = new Date()
    classType = -1
  }

  onMount(async () => {
    flights = await fetchFlights('', true)
    const classTypesJson = await fetch('/api/v1/class-types')
    classTypes = await classTypesJson.json()
  })
</script>

<div role="tabpanel" class="tab-pane active fade in">
  <div class="tab-para">
    <div class="trip-circle" style='gap: 28px'>
      {#each values as value}
        <label>
          <input
              style="accent-color: #00d8ff"
              type="radio"
              bind:group={selected}
              name="amount"
              value={value}
          >{value.label}
        </label>
      {/each}
    </div>
    <div class="row">
      <div class="col-lg-4 col-md-4 col-sm-12">
        <div class="single-tab-select-box">
          <h2>from</h2>
          <div class="travel-select-icon">
            <select class="form-control" bind:value={cityFrom} on:change={() => handleFieldsChanged({name: 'cityFrom', value: cities.filter((c) => c.id === cityFrom)[0].name, rule: 'cityFrom=' + `"${cityFrom}"`})}>
              <option value={-1}>enter your destination location</option>
              {#each cities as city}
                <option value={city.id}>{city.name}</option>
              {/each}
            </select>
          </div>
        </div>
      </div>
      <div class="col-lg-2 col-md-3 col-sm-4">
        <div class="single-tab-select-box">
          <h2>departure</h2>
          <div class="travel-check-icon">
            <DateInput bind:value={departureDate} on:select={() => handleFieldsChanged({name: 'departure', value: formatDate(departureDate), rule: "departure>=" + `"${departureDate.toISOString()}"`})} />
          </div>
        </div>
      </div>
      {#if selected.value !== 'one-way'}
        <div class="col-lg-2 col-md-3 col-sm-4">
          <div class="single-tab-select-box">
            <h2>return</h2>
            <div class="travel-check-icon">
              <DateInput bind:value={returnDate} on:select={() => handleFieldsChanged({name: 'return', value: formatDate(returnDate), rule: "return>=" + `"${returnDate.toISOString()}"`})} />
            </div>
          </div>
        </div>
      {/if}
      <div class="col-lg-2 col-md-1 col-sm-4">
        <div class="single-tab-select-box">
          <h2>adults</h2>
          <div class="travel-select-icon">
            <select class="form-control" bind:value={adults}  on:change={() => handleFieldsChanged({name: 'adults', value: adults, rule: 'adults=' + `"${adults}"`})}>
              <option value="5">5</option>
              <option value="10">10</option>
              <option value="15">15</option>
              <option value="20">20</option>
            </select>
          </div>
        </div>
      </div>
      <div class="col-lg-2 col-md-1 col-sm-4">
        <div class="single-tab-select-box">
          <h2>children</h2>
          <div class="travel-select-icon">
            <select class="form-control" bind:value={children} on:change={() => handleFieldsChanged({name: 'children', value: children, rule: 'children=' + `"${children}"`})}>
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="4">4</option>
              <option value="8">8</option>
            </select>
          </div>
        </div>
      </div>
    </div>
    <div class="row">
      <div class="col-lg-4 col-md-4 col-sm-12">
        <div class="single-tab-select-box">
          <h2>to</h2>
          <div class="travel-select-icon">
            <select class="form-control" bind:value={cityTo} on:change={() => handleFieldsChanged({name: 'cityTo', value: cities.filter((c) => c.id === cityTo)[0].name, rule: 'cityTo=' + `"${cityTo}"`})}>
              <option value={-1}>enter your destination location</option>
              {#each cities as city}
                <option value={city.id}>{city.name}</option>
              {/each}
            </select>
          </div>
        </div>
      </div>
      <div class="col-lg-3 col-md-3 col-sm-4">
        <div class="single-tab-select-box">
          <h2>class</h2>
          <div class="travel-select-icon">
            <select class="form-control" bind:value={classType} on:change={() => handleFieldsChanged({name: 'class', value: classTypes.find((c) => c.id === classType).type, rule: 'class=' + `"${classType}"`})}>
              <option value={-1}>enter class</option>
              {#each classTypes as c}
                <option value={c.id}>{c.type}</option>
              {/each}
            </select>
          </div>
        </div>
      </div>
      <div class="col-sm-5">
        <div class="about-btn pull-right">
          <button on:click={handleSearch} class="about-view travel-btn">
            search
          </button>
        </div>
      </div>
      <div class="co-md-9 col-sm-6" style="margin-left: 0">
        <h3>budget:</h3>
        <div>
          <DoubleRangeSlider bind:start bind:end handleChange={() => handleFieldsChanged({name: 'price', value: `from: ${start} to: ${end}`, rule: `price >= "${start}" && price <= "${end}"`})} />
          <div style="display: flex; justify-content: space-between">
            <span>Start price: {start}</span>
            <span>End price: {end}</span>
          </div>
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
    {#if flights.length > 0}
      <div style="margin-top: 20px; overflow: scroll; max-height: 230px">
        <h2>Found {flights.length} flights</h2>
        <ul style="margin-top: 10px; display: flex; flex-direction: column; gap: 4px">
          {#each flights as flight}
            <li style="border: rgba(20,176,243,0.37) solid 2px; border-radius: 4px; padding: 2px 8px; display: flex; justify-content: space-between">
              <div>
                Price: {flight.price}
                Departure date: {formatDate(new Date(flight.departure))}
                Return date: {formatDate(new Date(flight.return))}
                adults: {flight.adults}
                children: {flight.children}
                From: {cities.find((c) => c.id === flight.cityFrom).name}
                To: {cities.find((c) => c.id === flight.cityTo).name}
                class: {classTypes.find((ct) => ct.id === flight.class)?.type}
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
        <h2>Flights not found</h2>
      </div>
    {/if}
  </div>
</div>
