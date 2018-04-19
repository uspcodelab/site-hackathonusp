<template>
  <b-row id="header" tag="section" class="header p-3 p-sm-5">
    <b-col sm="6" class="header__text">
      <h1 class="text-center text-md-left pb-3">
        HackathonUSP 2018
      </h1>
      <p class="lead text-center text-md-left">
        Grupo de extensão universitária que tem como objetivo
        <strong>estimular a inovação tecnológica na USP</strong>
      </p>
    </b-col>
    <b-col sm="6" class="header__logo pb-4 pb-sm-0">
      <img src="~/assets/hackathon-usp.svg" class="header__logo__img">
    </b-col>
  </b-row>
</template>

<style lang="scss">
.header {
  min-height: calc(100vh);
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
