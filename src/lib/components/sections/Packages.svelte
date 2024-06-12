<script>
  import P1 from "/static/packages/p1.jpg"
  import P2 from "/static/packages/p2.jpg"
  import P3 from "/static/packages/p3.jpg"
  import P4 from "/static/packages/p4.jpg"
  import P5 from "/static/packages/p5.jpg"
  import P6 from "/static/packages/p6.jpg"
  import {modal} from '../../../stores/modalStore.js';
  import PopupLong from '$lib/components/ui/PopupLong.svelte';

  const showPopup = () => {
    modal.set(PopupLong);
  };
</script>

<section id="pack" class="packages">
  <div class="container">
    <div class="gallary-header text-center">
      <h2>
        special packages
      </h2>
      <p>
        Duis aute irure dolor in  velit esse cillum dolore eu fugiat nulla.
      </p>
    </div><!--/.gallery-header-->
    <div class="packages-content">
      <div class="row">

        <div class="col-md-4 col-sm-6">
          <div class="single-package-item">
            <img src={P1} alt="package-place">
            <div class="single-package-item-txt">
              <h3>italy <span class="pull-right">$499</span></h3>
              <div class="packages-para">
                <p>
											<span>
												<i class="fa fa-angle-right"></i> 3 Days 2 nights
											</span>
                  <i class="fa fa-angle-right"></i>  5 star accomodation
                </p>
                <p>
											<span>
												<i class="fa fa-angle-right"></i>  transportation
											</span>
                  <i class="fa fa-angle-right"></i> food facilities
                </p>
              </div><!--/.packages-para-->
              <div class="packages-review">
                <p>
                  <i class="fa fa-star"></i>
                  <i class="fa fa-star"></i>
                  <i class="fa fa-star"></i>
                  <i class="fa fa-star"></i>
                  <i class="fa fa-star"></i>
                  <span>254 reviews</span>
                </p>
              </div><!--/.packages-review-->
              <div class="about-btn">
                <button on:click={showPopup} class="about-view packages-btn">
                  book now
                </button>
              </div><!--/.about-btn-->
            </div><!--/.single-package-item-txt-->
          </div><!--/.single-package-item-->

        </div><!--/.col-->

        <div class="col-md-4 col-sm-6">
          <div class="single-package-item">
            <img src={P2} alt="package-place">
            <div class="single-package-item-txt">
              <h3>england <span class="pull-right">$1499</span></h3>
              <div class="packages-para">
                <p>
											<span>
												<i class="fa fa-angle-right"></i> 6 Days 7 nights
											</span>
                  <i class="fa fa-angle-right"></i>  5 star accomodation
                </p>
                <p>
											<span>
												<i class="fa fa-angle-right"></i>  transportation
											</span>
                  <i class="fa fa-angle-right"></i>  Free food
                </p>
              </div><!--/.packages-para-->
              <div class="packages-review">
                <p>
                  <i class="fa fa-star"></i>
                  <i class="fa fa-star"></i>
                  <i class="fa fa-star"></i>
                  <i class="fa fa-star"></i>
                  <i class="fa fa-star"></i>
                  <span>344 reviews</span>
                </p>
              </div><!--/.packages-review-->
              <div class="about-btn">
                <button on:click={showPopup} class="about-view packages-btn">
                  book now
                </button>
              </div><!--/.about-btn-->
            </div><!--/.single-package-item-txt-->
          </div><!--/.single-package-item-->

        </div><!--/.col-->

        <div class="col-md-4 col-sm-6">
          <div class="single-package-item">
            <img src={P3} alt="package-place">
            <div class="single-package-item-txt">
              <h3>france <span class="pull-right">$1199</span></h3>
              <div class="packages-para">
                <p>
											<span>
												<i class="fa fa-angle-right"></i> 5 Days 6 nights
											</span>
                  <i class="fa fa-angle-right"></i>  5 star accomodation
                </p>
                <p>
											<span>
												<i class="fa fa-angle-right"></i>  transportation
											</span>
                  <i class="fa fa-angle-right"></i>  food facilities
                </p>
              </div><!--/.packages-para-->
              <div class="packages-review">
                <p>
                  <i class="fa fa-star"></i>
                  <i class="fa fa-star"></i>
                  <i class="fa fa-star"></i>
                  <i class="fa fa-star"></i>
                  <i class="fa fa-star"></i>
                  <span>544 reviews</span>
                </p>
              </div><!--/.packages-review-->
              <div class="about-btn">
                <button on:click={showPopup} class="about-view packages-btn">
                  book now
                </button>
              </div><!--/.about-btn-->
            </div><!--/.single-package-item-txt-->
          </div><!--/.single-package-item-->

        </div><!--/.col-->

        <div class="col-md-4 col-sm-6">
          <div class="single-package-item">
            <img src={P4} alt="package-place">
            <div class="single-package-item-txt">
              <h3>india <span class="pull-right">$799</span></h3>
              <div class="packages-para">
                <p>
											<span>
												<i class="fa fa-angle-right"></i> 4 Days 5 nights
											</span>
                  <i class="fa fa-angle-right"></i>  5 star accomodation
                </p>
                <p>
											<span>
												<i class="fa fa-angle-right"></i>  transportation
											</span>
                  <i class="fa fa-angle-right"></i>  food facilities
                </p>
              </div><!--/.packages-para-->
              <div class="packages-review">
                <p>
                  <i class="fa fa-star"></i>
                  <i class="fa fa-star"></i>
                  <i class="fa fa-star"></i>
                  <i class="fa fa-star"></i>
                  <i class="fa fa-star"></i>
                  <span>625 reviews</span>
                </p>
              </div><!--/.packages-review-->
              <div class="about-btn">
                <button on:click={showPopup} class="about-view packages-btn">
                  book now
                </button>
              </div><!--/.about-btn-->
            </div><!--/.single-package-item-txt-->
          </div><!--/.single-package-item-->

        </div><!--/.col-->

        <div class="col-md-4 col-sm-6">
          <div class="single-package-item">
            <img src={P5} alt="package-place">
            <div class="single-package-item-txt">
              <h3>spain <span class="pull-right">$999</span></h3>
              <div class="packages-para">
                <p>
											<span>
												<i class="fa fa-angle-right"></i> 4 Days 4 nights
											</span>
                  <i class="fa fa-angle-right"></i>  5 star accomodation
                </p>
                <p>
											<span>
												<i class="fa fa-angle-right"></i>  transportation
											</span>
                  <i class="fa fa-angle-right"></i>  food facilities
                </p>
              </div><!--/.packages-para-->
              <div class="packages-review">
                <p>
                  <i class="fa fa-star"></i>
                  <i class="fa fa-star"></i>
                  <i class="fa fa-star"></i>
                  <i class="fa fa-star"></i>
                  <i class="fa fa-star"></i>
                  <span>379 reviews</span>
                </p>
              </div><!--/.packages-review-->
              <div class="about-btn">
                <button on:click={showPopup} class="about-view packages-btn">
                  book now
                </button>
              </div><!--/.about-btn-->
            </div><!--/.single-package-item-txt-->
          </div><!--/.single-package-item-->

        </div><!--/.col-->

        <div class="col-md-4 col-sm-6">
          <div class="single-package-item">
            <img src={P6} alt="package-place">
            <div class="single-package-item-txt">
              <h3>thailand <span class="pull-right">$799</span></h3>
              <div class="packages-para">
                <p>
											<span>
												<i class="fa fa-angle-right"></i> 5 Days 6 nights
											</span>
                  <i class="fa fa-angle-right"></i>  5 star accomodation
                </p>
                <p>
											<span>
												<i class="fa fa-angle-right"></i>  transportation
											</span>
                  <i class="fa fa-angle-right"></i>  food facilities
                </p>
              </div><!--/.packages-para-->
              <div class="packages-review">
                <p>
                  <i class="fa fa-star"></i>
                  <i class="fa fa-star"></i>
                  <i class="fa fa-star"></i>
                  <i class="fa fa-star"></i>
                  <i class="fa fa-star"></i>
                  <span>447 reviews</span>
                </p>
              </div><!--/.packages-review-->
              <div class="about-btn">
                <button on:click={showPopup} class="about-view packages-btn">
                  book now
                </button>
              </div><!--/.about-btn-->
            </div><!--/.single-package-item-txt-->
          </div><!--/.single-package-item-->

        </div><!--/.col-->

      </div><!--/.row-->
    </div><!--/.packages-content-->
  </div><!--/.container-->

</section><!--/.packages-->
