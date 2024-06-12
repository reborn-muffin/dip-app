<script>
  import { onMount, onDestroy } from 'svelte';
  import {modal} from '../../../stores/modalStore.js';
  import PopupLong from '$lib/components/ui/PopupLong.svelte';

  let days = 0;
  let hours = "00";
  let minutes = "00";
  let seconds = "00";
  let intervalId;

  function makeTimer() {
    const endTime = new Date("June 26, 2024 12:00:00 PDT").getTime();
    const now = new Date().getTime();
    const timeLeft = (endTime - now) / 1000;

    const d = Math.floor(timeLeft / 86400);
    const h = Math.floor((timeLeft % 86400) / 3600).toString().padStart(2, '0');
    const m = Math.floor((timeLeft % 3600) / 60).toString().padStart(2, '0');
    const s = Math.floor(timeLeft % 60).toString().padStart(2, '0');

    days = d;
    hours = h;
    minutes = m;
    seconds = s;
  }

  onMount(() => {
    intervalId = setInterval(makeTimer, 1000);
    makeTimer(); // Call immediately to avoid initial delay
  });

  onDestroy(() => {
    clearInterval(intervalId);
  });

  const showPopup = () => {
    modal.set(PopupLong);
  };
</script>

<section class="discount-offer">
  <div class="container">
    <div class="row">
      <div class="col-sm-12">
        <div class="dicount-offer-content text-center">
          <h2>Join with us within 26 June, 2024 and get upto 40% Discount</h2>
          <div class="campaign-timer">
            <div id="timer">
              <div class="time time-after">
                {days}
              </div><!--/.time-->
              <div class="time time-after">
                {hours}
              </div><!--/.time-->
              <div class="time time-after">
                {minutes}
              </div><!--/.time-->
              <div class="time">
                {seconds}
              </div><!--/.time-->
            </div><!--/.timer-->
          </div><!--/.campaign-timer-->
          <button on:click={showPopup} class="about-view discount-offer-btn">
            join now
          </button>

        </div><!-- /.dicount-offer-content-->
      </div><!-- /.col-->
    </div><!-- /.row-->
  </div><!-- /.container-->

</section><!-- /.discount-offer-->
