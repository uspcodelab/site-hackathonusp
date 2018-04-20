<template>
  <b-row class="countdown-container">
    <b-col sm="12" class="text-center pb-5 text">
      <h1>Incrições em breve!</h1>
    </b-col>
    <b-col sm="12" md="6" lg="3" class="circle days text-center">
      <svg width="160" height="160" xmlns="http://www.w3.org/2000/svg">
        <circle id="circle" class="circle_animation" r="69.85699" cy="81" cx="81" stroke-width="8" stroke="#00b2ff" fill="none"/>
        <text x="50%" y="50%" text-anchor="middle" dy="0.3em">{{ Math.trunc(days) }}</text>
      </svg>
      <p class="text">Dias</p>
    </b-col>
    <b-col sm="12" md="6" lg="3" class="circle hours text-center">
      <svg width="160" height="160" xmlns="http://www.w3.org/2000/svg">
        <circle id="circle" class="circle_animation" r="69.85699" cy="81" cx="81" stroke-width="8" stroke="#00b2ff" fill="none"/>
        <text x="50%" y="50%" text-anchor="middle" dy="0.3em">{{ Math.trunc(hours) }}</text>
      </svg>
      <p class="text">Horas</p>
    </b-col>
    <b-col sm="12" md="6" lg="3" class="circle minutes text-center">
      <svg width="160" height="160" xmlns="http://www.w3.org/2000/svg">
        <circle id="circle" class="circle_animation" r="69.85699" cy="81" cx="81" stroke-width="8" stroke="#00b2ff" fill="none"/>
        <text x="50%" y="50%" text-anchor="middle" dy="0.3em">{{ Math.trunc(minutes) }}</text>
      </svg>
      <p class="text">Minutos</p>
    </b-col>
    <b-col sm="12" md="6" lg="3" class="circle seconds text-center">
      <svg width="160" height="160" xmlns="http://www.w3.org/2000/svg">
        <circle id="circle" class="circle_animation" r="69.85699" cy="81" cx="81" stroke-width="8" stroke="#00b2ff" fill="none"/>
        <text x="50%" y="50%" text-anchor="middle" dy="0.3em">{{ Math.trunc(seconds) }}</text>
      </svg>
      <p class="text">Segundos</p>
    </b-col>
    <b-col sm="12" class="text-center pt-5 arrow">
      <img src="~/assets/down-arrow.svg" alt="" style="max-height: 5vh">
    </b-col>
  </b-row>
</template>

<style lang="scss">
.countdown-container {
  padding-top: 4em;
  min-height: 95vh;
  align-content: center;
  align-items: center;
  background-color: #2a2827;
  &__circle {
    display: flex;
    flex-direction: column;
  }
  &__logo {
    align-self: center;
  }
  &__arrow {
    align-items: flex-end;
  }
}

.text {
  color: #e13566;
  font-size: 2rem;
}

text {
  fill: #e13566;
  font-size: 2.5rem;
}
</style>

<script>
export default {
  props: {
    date: {
      default: "June 09, 2018",
      type: String
    }
  },
  data() {
    return {
      now: 0,
      count: 0
    };
  },
  computed: {
    seconds() {
      return (this.modifiedDate - this.now) % 60;
    },

    minutes() {
      return ((this.modifiedDate - this.now) / 60) % 60;
    },
    hours() {
      return ((this.modifiedDate - this.now) / 60 / 60) % 24;
    },
    days() {
      return (this.modifiedDate - this.now) / 60 / 60 / 24;
    },
    modifiedDate: function() {
      return Math.trunc(Date.parse(this.date) / 1000);
    }
  },
  mounted() {
    this.timer_loop();
  },

  methods: {
    timer_loop() {
      this.count++;
      this.now = Math.trunc(new Date().getTime() / 1000);
      this.count < 200 && setTimeout(this.timer_loop, 1000);
    }
  }
};
</script>
