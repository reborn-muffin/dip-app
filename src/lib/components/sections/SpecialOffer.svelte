<script>
  // import OfferShape from "/offer/offer-shape.png"
  import PopupLong from '$lib/components/ui/PopupLong.svelte';
  import {modal} from '../../../stores/modalStore.js'

  const showPopup = () => {
    modal.set(PopupLong);
  };
</script>

<section id="spo" class="special-offer">
  <div class="container">
    <div class="special-offer-content">
      <div class="row">
        <div class="col-sm-8">
          <div class="single-special-offer">
            <div class="single-special-offer-txt">
              <h2>thiland</h2>
              <div class="packages-review special-offer-review">
                <p>
                  <i class="fa fa-star"></i>
                  <i class="fa fa-star"></i>
                  <i class="fa fa-star"></i>
                  <i class="fa fa-star"></i>
                  <i class="fa fa-star"></i>
                  <span>2544 review</span>
                </p>
              </div><!--/.packages-review-->
              <div class="packages-para special-offer-para">
                <p>
											<span>
												<i class="fa fa-angle-right"></i> 5 Days 6 nights
											</span>
                  <span>
												<i class="fa fa-angle-right"></i> 2 person
											</span>
                  <span>
												<i class="fa fa-angle-right"></i>  5 star accomodation
											</span>
                </p>
                <p>
											<span>
												<i class="fa fa-angle-right"></i>  transportation
											</span>
                  <span>
												<i class="fa fa-angle-right"></i>  food facilities
											</span>
                </p>
                <p class="offer-para">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tem ut labore et dolore magna  aliqua. Ut enim ad minim veniam, quis nostrud exercitation una <br> ullamco laboris nisi ut aliquip ex ea commodo consequat.
                </p>
              </div><!--/.packages-para-->
              <div class="offer-btn-group">
                <div class="about-btn">
                  <button  class="about-view packages-btn offfer-btn">
                    make tour
                  </button>
                </div><!--/.about-btn-->
                <div class="about-btn">
                  <button on:click={showPopup} class="about-view packages-btn">
                    book now
                  </button>
                </div><!--/.about-btn-->
              </div><!--/.offer-btn-group-->
            </div><!--/.single-special-offer-txt-->
          </div><!--/.single-special-offer-->
        </div><!--/.col-->
        <div class="col-sm-4">
          <div class="single-special-offer">
            <div class="single-special-offer-bg">
              <img src={"/static/offer/offer-shape.png"} alt="offer-shape">
            </div><!--/.single-special-offer-bg-->
            <div class="single-special-shape-txt">
              <h3>special offer</h3>
              <h4><span>40%</span><br>off</h4>
              <p><span>$999</span><br>reguler $ 1450</p>
            </div><!--/.single-special-shape-txt-->
          </div><!--/.single-special-offer-->
        </div><!--/.col-->
      </div><!--/.row-->
    </div><!--/.special-offer-content-->
  </div><!--/.container-->

</section><!--/.special-offer end-->
