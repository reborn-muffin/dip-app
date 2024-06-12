<script>
  import TabTours from '$lib/components/sections/travelBox/tabs/TabTours.svelte';
  import TabHotels from '$lib/components/sections/travelBox/tabs/TabHotels.svelte';
  import TabFlights from '$lib/components/sections/travelBox/tabs/TabFlights.svelte';
  import {onMount} from 'svelte';

  const items = {hotels: 'hotels', tours: 'tours', flights: 'flights'}

  let selectedTab = items.tours

  const handleSelect = (value) => {
    selectedTab = value
  }

  let cities = []
  let countries = []

  onMount(async () => {
    try {
      const jsonCities = await fetch('/api/v1/cities')
      cities = await jsonCities.json()

      const jsonCountries = await fetch('/api/v1/countries')
      countries = await jsonCountries.json()
    } catch (err) {
      console.log(err.message);
    }
  })
</script>

<section class="travel-box">
  <div class="container">
    <div class="row">
      <div class="col-md-12">
        <div class="single-travel-boxes">
          <div id="desc-tabs" class="desc-tabs">

            <ul class="nav nav-tabs" role="tablist">

              <li role="presentation" class="active">
                <button on:click={() => handleSelect(items.tours)} aria-controls="tours" role="tab">
                  <i class="fa fa-tree"></i>
                  tours
                </button>
              </li>

              <li role="presentation">
                <button on:click={() => handleSelect(items.hotels)} aria-controls="hotels" role="tab">
                  <i class="fa fa-building"></i>
                  hotels
                </button>
              </li>

              <li role="presentation">
                <button on:click={() => handleSelect(items.flights)} aria-controls="flights" role="tab">
                  <i class="fa fa-plane"></i>
                  flights
                </button>
              </li>
            </ul>

            <!-- Tab panes -->
            <div class="tab-content">
              {#if selectedTab === items.tours}
                <TabTours cities={cities} countries={countries} />
              {/if}
              {#if selectedTab === items.hotels}
                <TabHotels cities={cities} countries={countries} />
              {/if}
              {#if selectedTab === items.flights}
                <TabFlights cities={cities} />
              {/if}
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>
