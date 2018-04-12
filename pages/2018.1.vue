<template>
  <div class="page">
    <b-container fluid>
      <the-header/>
      <!-- <main>
        <about/>
        <links/>
        <prizes/>
        <sponsors/>
      </main> -->
      <footer/>
    </b-container>
  </div>
</template>

<script>
import Countdown from "~/components/Countdown.vue";
import TheHeader from "~/components/TheHeader.vue";
import Footer from "~/components/Footer.vue";
// import About from "~/components/About.vue";
// import Links from "~/components/Links.vue ";
// import Prizes from "~/components/Prizes.vue ";
// import Sponsors from "~/components/Sponsors.vue ";
// import PastEvents from "~/components/PastEvents.vue ";

export default {
  components: {
    Countdown,
    TheHeader,
    Footer
    // About,
    // Links,
    // Prizes,
    // Sponsors,
    // PastEvents
  }
};
</script>

<style>
.page {
  min-height: 100vh;
  justify-content: center;
  align-items: center;
}
</style>
