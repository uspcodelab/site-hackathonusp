<template>
  <div class="page">
    <the-navbar/>
    <b-container fluid>
      <countdown date="June, 09, 2018"/>
      <the-header />
      <main>
        <!-- <about /> -->
        <prizes />
        <sponsors />
        <past-events />
      </main>
      <the-footer />
    </b-container>
  </div>
</template>

<script>
import TheNavbar from "~/components/Navbar.vue";
import Countdown from "~/components/Countdown.vue";
import TheHeader from "~/components/TheHeader.vue";
import TheFooter from "~/components/TheFooter.vue";
import About from "~/components/About.vue";
import Prizes from "~/components/Prizes.vue";
import Sponsors from "~/components/Sponsors.vue";

export default {
  components: {
    TheNavbar,
    Countdown,
    TheHeader,
    TheFooter,
    About,
    Prizes,
    Sponsors
  }
};
</script>

<style lang="scss">
@font-face {
  font-family: Montserrat;
  font-weight: normal;
  src: url("/Montserrat-Regular.otf");
}

@font-face {
  font-family: Montserrat;
  font-weight: 600;
  src: url("/Montserrat-Medium.otf");
}

@font-face {
  font-family: Montserrat;
  font-weight: bold;
  src: url("/Montserrat-Bold.otf");
}
.container-fluid {
  padding: 0;
  margin: 0;
  font-family: "IBM Plex Sans Condensed", sans-serif;
  // font-family: 'Open Sans', sans-serif;
  // font-family: 'Nunito', sans-serif;
  // font-family: 'Cabin', sans-serif;
  font-size: 1rem;
}

// .section-title {
//   // font-weight: bold;
//   font-size: 4em;
//   color: #ffffff;
//   padding-bottom: 0.3em;
//   text-align: center;
//   font-family: Montserrat, "IBM Plex Sans Condensed";
//   // font-family: "Open Sans", sans-serif;
//   // font-family: "IBM Plex Serif", serif;
// }

.page {
  margin: 0;
  padding-top: 4rem;
}
</style>
