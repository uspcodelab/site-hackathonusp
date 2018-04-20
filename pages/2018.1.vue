<template>
  <div class="page">
    <the-navbar/>
    <b-container fluid>
      <countdown date="June, 09, 2018"/>
      <the-header />
      <main>
        <about />
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
.container-fluid {
  padding: 0;
  margin: 0;
}

html {
  font-size: 14px;
}

.page {
  margin: 0;
  padding-top: 1rem;
}

@include media-breakpoint-up(lg) {
  html {
    font-size: 16px;
  }
}

@include media-breakpoint-up(xl) {
  html {
    font-size: 1.5vmax;
  }
}
</style>
