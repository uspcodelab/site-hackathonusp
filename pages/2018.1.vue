<template>
  <div class="page">
    <b-container fluid>
      <the-header/>
      <footer/>
    </b-container>
  </div>
</template>

<script>
import Countdown from "~/components/Countdown.vue";
import TheHeader from "~/components/TheHeader.vue";
import Footer from "~/components/Footer.vue";

export default {
  components: {
    Countdown,
    TheHeader,
    Footer
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
