<template>
  <section class="header">
    <h1>HackathonUSP 2018</h1>
    <countdown/>
  </section>
</template>

<style>
.header {
  display: flex;
  justify-content: center;
  align-content: center;
  padding-top: 4em;
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
