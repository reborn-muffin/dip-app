<script>
  import G1 from "/static/gallary/china.jpg"
  import G2 from "/static/gallary/venuzuela.jpg"
  import G3 from "/static/gallary/brazil.jpg"
  import G4 from "/static/gallary/australia.jpg"
  import G5 from "/static/gallary/netharlands.jpg"
  import G6 from "/static/gallary/turkey.jpg"
  import {onMount} from 'svelte';

  let tours = []

  const fetchTours = async (filterString, isAll) => {
    const response = await fetch('/api/v1/tours', {
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

  onMount(async () => {
    const jsonCountries = await fetch('/api/v1/countries')
    const countries = await jsonCountries.json()
    const rareTours = await fetchTours('', true)
    const jsonCities = await fetch('/api/v1/cities')
    const allCities = await jsonCities.json()
    tours = countries.filter((c) => c.isTopPlace).map((country) => {
      const cities = allCities.filter((city) => city.country_id === country.id).map((c) => c.id)
      const relatedTours = rareTours.filter((tour) => cities.includes(tour.city))
      return {
        country: {
          name: country.name,
          imageSrc: country.imageSrc
        },
        tours: relatedTours,
        placeCount: cities.length
      }
    })
  })
</script>

<section id="gallery" class="gallery">
  <div class="container">
    <div class="gallery-details">
      <div class="gallary-header text-center">
        <h2>
          top destination
        </h2>
        <p>
          Where do you wanna go? How much you wanna explore?
        </p>
      </div>
      <div class="gallery-box">
        <div class="gallery-content">
          <div class="filtr-container">
            <div class="row">

              {#each tours as tour}
                <div class="col-md-6">
                  <div class="filtr-item">
                    <img src={tour.country.imageSrc} alt="portfolio image"/>
                    <div class="item-title">
                      <a href="#">{tour.country.name}</a>
                      <p><span>Tours {tour.tours.length}<br/></span><span>{tour.placeCount} places</span></p>
                    </div><!-- /.item-title -->
                  </div><!-- /.filtr-item -->
                </div><!-- /.col -->
              {/each}

<!--              <div class="col-md-6">-->
<!--                <div class="filtr-item">-->
<!--                  <img src={G1} alt="portfolio image"/>-->
<!--                  <div class="item-title">-->
<!--                    <a href="#">-->
<!--                      china-->
<!--                    </a>-->
<!--                    <p><span>20 tours</span><span>15 places</span></p>-->
<!--                  </div>&lt;!&ndash; /.item-title &ndash;&gt;-->
<!--                </div>&lt;!&ndash; /.filtr-item &ndash;&gt;-->
<!--              </div>&lt;!&ndash; /.col &ndash;&gt;-->

<!--              <div class="col-md-6">-->
<!--                <div class="filtr-item">-->
<!--                  <img src={G2} alt="portfolio image"/>-->
<!--                  <div class="item-title">-->
<!--                    <a href="#">-->
<!--                      venuzuala-->
<!--                    </a>-->
<!--                    <p><span>12 tours</span><span>9 places</span></p>-->
<!--                  </div> &lt;!&ndash; /.item-title&ndash;&gt;-->
<!--                </div>&lt;!&ndash; /.filtr-item &ndash;&gt;-->
<!--              </div>&lt;!&ndash; /.col &ndash;&gt;-->

<!--              <div class="col-md-4">-->
<!--                <div class="filtr-item">-->
<!--                  <img src={G3} alt="portfolio image"/>-->
<!--                  <div class="item-title">-->
<!--                    <a href="#">-->
<!--                      brazil-->
<!--                    </a>-->
<!--                    <p><span>25 tours</span><span>10 places</span></p>-->
<!--                  </div>&lt;!&ndash; /.item-title &ndash;&gt;-->
<!--                </div>&lt;!&ndash; /.filtr-item &ndash;&gt;-->
<!--              </div>&lt;!&ndash; /.col &ndash;&gt;-->

<!--              <div class="col-md-4">-->
<!--                <div class="filtr-item">-->
<!--                  <img src={G4} alt="portfolio image"/>-->
<!--                  <div class="item-title">-->
<!--                    <a href="#">-->
<!--                      australia-->
<!--                    </a>-->
<!--                    <p><span>18 tours</span><span>9 places</span></p>-->
<!--                  </div> &lt;!&ndash; /.item-title&ndash;&gt;-->
<!--                </div>&lt;!&ndash; /.filtr-item &ndash;&gt;-->
<!--              </div>&lt;!&ndash; /.col &ndash;&gt;-->

<!--              <div class="col-md-4">-->
<!--                <div class="filtr-item">-->
<!--                  <img src={G5} alt="portfolio image"/>-->
<!--                  <div class="item-title">-->
<!--                    <a href="#">-->
<!--                      netharlands-->
<!--                    </a>-->
<!--                    <p><span>14 tours</span><span>12 places</span></p>-->
<!--                  </div> &lt;!&ndash; /.item-title&ndash;&gt;-->
<!--                </div>&lt;!&ndash; /.filtr-item &ndash;&gt;-->
<!--              </div>&lt;!&ndash; /.col &ndash;&gt;-->

<!--              <div class="col-md-8">-->
<!--                <div class="filtr-item">-->
<!--                  <img src={G6} alt="portfolio image"/>-->
<!--                  <div class="item-title">-->
<!--                    <a href="#">-->
<!--                      turkey-->
<!--                    </a>-->
<!--                    <p><span>14 tours</span><span>6 places</span></p>-->
<!--                  </div> &lt;!&ndash; /.item-title&ndash;&gt;-->
<!--                </div>&lt;!&ndash; /.filtr-item &ndash;&gt;-->
<!--              </div>&lt;!&ndash; /.col &ndash;&gt;-->

<!--            </div>&lt;!&ndash; /.row &ndash;&gt;-->

<!--          </div>&lt;!&ndash; /.filtr-container&ndash;&gt;-->
        </div><!-- /.gallery-content -->
      </div><!--/.galley-box-->
    </div><!--/.gallery-details-->
  </div><!--/.container-->

</section><!--/.gallery-->
