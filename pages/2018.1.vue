<template>
  <div>
    <the-navbar/>
    <b-container fluid>
      <countdown v-if="beforeSubs" :date="subscriptionDay" :before-subs="beforeSubs" />
      <countdown v-if="!beforeSubs && !subsGap" :date="eventDay" :before-subs="beforeSubs" />
      <the-header :subs-gap="subsGap"/>
      <main>
        <about/>
        <prizes/>
        <judges/>
        <judging-criteria/>
        <promoters/>
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
import Promoters from "~/components/Promoters.vue";
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
    Promoters,
    Judges,
    JudgingCriteria
  },
  data() {
    return {
      subscriptionDay: "May, 16, 2018, 21:00:00",
      eventDay: "June, 09, 2018, 15:00:00",
      subs: new Date(this.subscriptionDay),
      subsDeadline: new Date("June, 20, 2018, 23:59:59"),
      event: new Date(this.eventDay),
      beforeSubs: true,
      subsGap: false,
      now: ""
    };
  },
  mounted() {
    this.timer_loop();
  },
  methods: {
    timer_loop() {
      this.now = new Date();
      if (this.now >= this.subs) {
        this.beforeSubs = false;
        if (this.now <= this.subsDeadline) {
          this.subsGap = true;
        } else {
          this.subsGap = false;
        }
      }
      setTimeout(this.timer_loop, 1000);
    }
  }
};
</script>
