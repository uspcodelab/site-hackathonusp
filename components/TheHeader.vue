<template>
  <!-- <section class="header">
    <h1>HackathonUSP 2018</h1>
    <countdown />
  </section> -->
  <b-row id="header" tag="section" class="header p-3 p-sm-5">
    <b-col sm="12" class="header__text">
      <h1 class="text-center text-md-left pb-3">
        HackathonUSP 2018
      </h1>
    </b-col>
    <b-col>
      <countdown />
    </b-col>
  </b-row>
</template>

<style lang="scss">
.header {
  justify-content: center;
  min-height: 100vh;
  align-items: center;
  align-self: center;
  text-align: center;
  padding-top: 4em;
  background-color: #bce4f5;
}
</style>

<script>
import Countdown from "~/components/Countdown.vue";
export default {
  components: {
    Countdown
  }
};
</script>
