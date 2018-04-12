<template>
  <section class="header">
    <h1>HackathonUSP 2018</h1>
    <countdown/>
  </section>
</template>

<style>
.header {
  justify-content: center;
  height: 100vh;
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
