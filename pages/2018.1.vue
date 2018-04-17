<template>
  <div class="page">
    <b-container fluid>
      <the-header />
      <main>
        <about />
        <prizes />
        <sponsors />
      </main>
      <the-footer />
    </b-container>
  </div>
</template>

<script>
import Countdown from "~/components/Countdown.vue";
import TheHeader from "~/components/TheHeader.vue";
import TheFooter from "~/components/TheFooter.vue";
import About from "~/components/About.vue";
import Prizes from "~/components/Prizes.vue";
import Sponsors from "~/components/Sponsors.vue";
// import PastEvents from "~/components/PastEvents.vue";

export default {
  components: {
    Countdown,
    TheHeader,
    TheFooter,
    About,
    Prizes,
    Sponsors
    // PastEvents
  }
};
</script>

<style lang="scss">
.page {
  margin: 0;
}

html {
  font-size: 14px;
}

.container-fluid {
  padding: 0;
}
</style>
