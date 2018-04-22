<template>
  <b-row class="countdown">
    <b-col cols="12" class="countdown__text pt-5 px-3 px-md-5">
      <h1 class="px-3">Incrições em breve!</h1>
    </b-col>

    <b-col cols="12" class="countdown__clocks py-5 px-3 px-md-5">
      <b-row>
        <b-col cols="6" md="3" class="countdown__clock">
          <svg width="100%" max-width="10rem" height="10rem">
            <circle r="4rem" cy="50%" cx="50%"
                    stroke-width="0.4rem" stroke="#00b2ff" fill="none"/>
            <text class="countdown__clock__number" x="50%" y="50%"
                  text-anchor="middle" alignment-baseline="central">
              {{ days }}
            </text>
          </svg>
          <p class="countdown__clock__text">Dias</p>
        </b-col>

        <b-col cols="6" md="3" class="countdown__clock">
          <svg width="100%" max-width="10rem" height="10rem">
            <circle r="4rem" cy="50%" cx="50%"
                    stroke-width="0.4rem" stroke="#00b2ff" fill="none"/>
            <text class="countdown__clock__number" x="50%" y="50%"
                  text-anchor="middle" alignment-baseline="central">
              {{ hours }}
            </text>
          </svg>
          <p class="countdown__clock__text">Horas</p>
        </b-col>

        <b-col cols="6" md="3" class="countdown__clock">
          <svg width="100%" max-width="10rem" height="10rem">
            <circle r="4rem" cy="50%" cx="50%"
                    stroke-width="0.4rem" stroke="#00b2ff" fill="none"/>
            <text class="countdown__clock__number" x="50%" y="50%"
                  text-anchor="middle" alignment-baseline="central">
              {{ minutes }}
            </text>
          </svg>
          <p class="countdown__clock__text">Minutos</p>
        </b-col>

        <b-col cols="6" md="3" class="countdown__clock">
          <svg width="100%" max-width="10rem" height="10rem">
            <circle r="4rem" cy="50%" cx="50%"
                    stroke-width="0.4rem" stroke="#00b2ff" fill="none"/>
            <text class="countdown__clock__number" x="50%" y="50%"
                  text-anchor="middle" alignment-baseline="central">
              {{ seconds }}
            </text>
          </svg>
          <p class="countdown__clock__text">Segundos</p>
        </b-col>
      </b-row>
    </b-col>

    <b-col cols="12" class="countdown__arrow pb-5">
      <span class="h1">
        <span v-scroll-to="'#header'" class="fa fa-angle-down"/>
      </span>
    </b-col>

  </b-row>
</template>

<script>
export default {
  props: {
    date: {
      type: String,
      required: true
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
      return Math.trunc((this.modifiedDate - this.now) % 60);
    },
    minutes() {
      return Math.trunc(((this.modifiedDate - this.now) / 60) % 60);
    },
    hours() {
      return Math.trunc(((this.modifiedDate - this.now) / 60 / 60) % 24);
    },
    days() {
      return Math.trunc((this.modifiedDate - this.now) / 60 / 60 / 24);
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

<style lang="scss">
.countdown {
  min-height: calc(100vh - #{$navbar-height});

  align-content: space-between;
  align-items: center;

  color: theme-color("primary");
  background-color: theme-color("dark");

  text-align: center;

  &__clock {
    display: flex;
    flex-direction: column;

    &__number {
      fill: theme-color("primary");
      font-size: 2.5rem;
    }

    &__text {
      color: theme-color("primary");
      font-size: 1.6rem;
      text-align: center;
    }
  }
}
</style>
