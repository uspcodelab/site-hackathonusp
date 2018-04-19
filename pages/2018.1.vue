<template>
  <div class="page">
    <the-navbar/>
    <b-container fluid>
      <the-header />
      <main>
        <!-- <about />
        <prizes /> -->
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
.page {
  margin: 0;
  padding-top: 4rem;
}

html {
  font-size: 14px;
}

.container-fluid {
  padding: 0;
}
</style>
