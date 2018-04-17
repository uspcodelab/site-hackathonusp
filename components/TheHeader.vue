<template>
  <b-row id="header" tag="section" class="header p-3 p-sm-5">
    <b-col sm="12" class="header__text">
      <h1 class="text-center pb-3">
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
  min-height: 100vh;
  align-items: center;
  text-align: center;
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
