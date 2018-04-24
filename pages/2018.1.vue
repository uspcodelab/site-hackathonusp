<template>
  <div>
    <the-navbar/>
    <b-container fluid>
      <countdown date="May, 18, 2018"/>
      <the-header/>
      <main>
        <about/>
        <prizes/>
        <judges/>
        <judging-criteria/>
        <sponsors/>
      </main>
      <the-footer/>
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
import Judges from "~/components/Judges.vue";
import JudgingCriteria from "~/components/JudgingCriteria.vue";

export default {
  components: {
    TheNavbar,
    Countdown,
    TheHeader,
    TheFooter,
    About,
    Prizes,
    Sponsors,
    Judges,
    JudgingCriteria
  }
};
</script>
