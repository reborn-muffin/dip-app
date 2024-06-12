<script>
  import Header from '$lib/components/Header.svelte';
  import AboutUs from '$lib/components/sections/AboutUs.svelte';
  import TravelBox from '$lib/components/sections/travelBox/TravelBox.svelte';
  import Service from '$lib/components/sections/Service.svelte';
  import Gallery from '$lib/components/sections/Gallery.svelte';
  import Footer from '$lib/components/Footer.svelte';
  import Packages from '$lib/components/sections/Packages.svelte';
  import Testemonial from '$lib/components/sections/Testemonial.svelte';
  import SpecialOffer from '$lib/components/sections/SpecialOffer.svelte';
  import Blog from '$lib/components/sections/Blog.svelte';
  import Subscribe from '$lib/components/sections/Subscribe.svelte';
  import DiscountOffer from '$lib/components/sections/DiscountOffer.svelte';
  import Modal from '$lib/components/ui/Modal.svelte';
  import {modal} from '../stores/modalStore.js'
</script>


<!--<svelte:head>-->
<!--  <link href="https://fonts.googleapis.com/css?family=Rufina:400,700" rel="stylesheet" />-->
<!--  <link href="https://fonts.googleapis.com/css?family=Poppins:100,200,300,400,500,600,700,800,900" rel="stylesheet" />-->

<!--  <script src="https://oss.maxcdn.com/html5shiv/3.7.3/html5shiv.min.js"></script>-->
<!--  <script src="https://oss.maxcdn.com/respond/1.4.2/respond.min.js"></script>-->

<!--</svelte:head>-->

<Header />
<AboutUs />
<TravelBox />
<Service />
<Gallery />
<DiscountOffer />
<Packages />
<Testemonial />
<SpecialOffer />
<Blog />
<Subscribe />
<Footer />

<Modal show={$modal}>
</Modal>

<style>
    @import '../styles/animate.css';
    @import '../styles/bootsnav.css';
    @import '../styles/bootstrap.min.css';
    @import '../styles/font-awesome.min.css';
    @import '../styles/hover-min.css';
    @import '../styles/jquery-ui.min.css';
    @import '../styles/owl.carousel.min.css';
    @import '../styles/owl.theme.default.min.css';
    @import '../styles/responsive.css';
    @import '../styles/style.css';
</style>
