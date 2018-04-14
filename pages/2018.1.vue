<template>
  <div class="page">
    <b-container fluid>
      <the-header/>
      <main>
        <about/>
        <prizes/>
        <!-- <sponsors/> -->
      </main>
      <footer/>
    </b-container>
  </div>
</template>

<script>
import Countdown from "~/components/Countdown.vue";
import TheHeader from "~/components/TheHeader.vue";
import Footer from "~/components/Footer.vue";
import About from "~/components/About.vue";
import Prizes from "~/components/Prizes.vue";
// import Sponsors from "~/components/Sponsors.vue";
// import PastEvents from "~/components/PastEvents.vue";

export default {
  components: {
    Countdown,
    TheHeader,
    Footer,
    About,
    Prizes
    // Sponsors,
    // PastEvents
  }
};
</script>

<style lang="scss">
.page {
  min-height: 100vh;
  min-width: 100vw;
  justify-content: center;
  align-items: center;
  margin: 0;
}

html {
  font-size: 14px;
}

// @include media-breakpoint-up(lg) {
//   html {
//     font-size: 16px;
//   }
// }

// @include media-breakpoint-up(xl) {
//   html {
//     font-size: 1.5vmax;
//   }
// }
.container-fluid {
  padding: 0;
}
</style>
