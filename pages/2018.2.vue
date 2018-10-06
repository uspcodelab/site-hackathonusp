<template>
  <div>
    <the-navbar :logo="headerInfo.logo" :info="navInfo" />
    <b-container fluid>
      <countdown v-if="beforeSubs" :date="subsStart" :colors="colors" :disclaimer="disclaimer" title="Inscrições em breve!" />
      <countdown v-if="afterSubs && beforeEvent" :date="eventDay" :colors="colors" title="HackathonUSP 2018" />
      <the-header :subs="subs" :info="headerInfo" :colors="colors" />
      <main>
        <about :info="aboutInfo" :colors="colors" />
        <!-- <prizes :info="prizesInfo" :colors="colors" /> -->
        <!-- <judges :info="judgesInfo" :colors="colors" /> -->
        <judging-criteria :info="judgingCriteriaInfo" :colors="colors" />
        <promoters :info="promotersInfo" :colors="colors" />
      </main>
      <the-footer :colors="colors" />
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
import Promoters from "~/components/Promoters.vue";
import Judges from "~/components/Judges.vue";
import JudgingCriteria from "~/components/JudgingCriteria.vue";

import {
  colors,
  navInfo,
  headerInfo,
  aboutInfo,
  prizesInfo,
  judgesInfo,
  judgingCriteriaInfo,
  promotersInfo
} from "~/editions/2018.2.js";

export default {
  components: {
    TheNavbar,
    Countdown,
    TheHeader,
    TheFooter,
    About,
    Prizes,
    Promoters,
    Judges,
    JudgingCriteria
  },
  data() {
    return {
      beforeSubs: false,
      afterSubs: false,
      beforeEvent: true,
      now: "",
      disclaimer:
        "As inscrições são concorridas! Instale o aplicativo e ative as notificações para não perder!",
      colors,
      navInfo,
      headerInfo,
      aboutInfo,
      prizesInfo,
      judgesInfo,
      judgingCriteriaInfo,
      promotersInfo
    };
  },
  computed: {
    subs() {
      return !this.beforeSubs && !this.afterSubs;
    },
    eventDay() {
      return new Date("November, 10, 2018, 15:00:00");
    },
    subsStart() {
      return new Date("October, 18, 2018, 20:00:00");
    },
    subsEnd() {
      return new Date("November, 21, 2018, 22:00:00");
    }
  },
  mounted() {
    this.timer_loop();
  },
  methods: {
    timer_loop() {
      this.now = new Date();
      this.beforeSubs = this.now < this.subsStart;
      this.afterSubs = this.now > this.subsEnd;
      this.beforeEvent = this.now < this.eventDay;
      setTimeout(this.timer_loop, 1000);
    }
  }
};
</script>
