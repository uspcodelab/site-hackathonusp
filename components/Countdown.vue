<template>
  <b-row :style="{ color: colors.secondaryColor,
                   backgroundColor: colors.darkColor }" class="countdown py-5">
    <b-col cols="12" class="countdown__text py-3 px-3 px-md-5">
      <h1 class="px-3">{{ title }}</h1>
      <small v-html="disclaimer" />
    </b-col>

    <b-col cols="12" class="countdown__clocks py-3 px-3 px-md-5">
      <b-row class="fix">
        <b-col :style="{ fill: colors.secondaryColor }" cols="6" md="3" class="countdown__clock py-2">
          <svg width="8rem" height="8rem" class="countdown__clock__svg">
            <svg :style="{ stroke: colors.primaryColor }" viewBox="0 0 100 100">
              <path :d="describeArc(50, 50, 42, (360/60)*(60-days), 360)" stroke-width="5" fill="none" />
            </svg>
            <text id="days" class="countdown__clock__number" x="50%" y="50%" text-anchor="middle" dominant-baseline="central">
              {{ days }}
            </text>
          </svg>
          <div class="countdown__clock__text">Dias</div>
        </b-col>

        <b-col :style="{ fill: colors.secondaryColor }" cols="6" md="3" class="countdown__clock py-2">
          <svg width="8rem" height="8rem" class="countdown__clock__svg">
            <svg :style="{ stroke: colors.primaryColor }" viewBox="0 0 100 100">
              <path :d="describeArc(50, 50, 42, (360/24)*(24-hours), 360)" stroke-width="5" fill="none" />
            </svg>
            <text id="hours" class="countdown__clock__number" x="50%" y="50%" text-anchor="middle" dominant-baseline="central">
              {{ hours }}
            </text>
          </svg>
          <div class="countdown__clock__text">Horas</div>
        </b-col>

        <b-col :style="{ fill: colors.secondaryColor }" cols="6" md="3" class="countdown__clock py-2">
          <svg width="8rem" height="8rem" class="countdown__clock__svg">
            <svg :style="{ stroke: colors.primaryColor }" viewBox="0 0 100 100">
              <path :d="describeArc(50, 50, 42, (360/60)*(60-minutes), 360)" stroke-width="5" fill="none" />
            </svg>
            <text id="minutes" class="countdown__clock__number" x="50%" y="50%" text-anchor="middle" dominant-baseline="central">
              {{ minutes }}
            </text>
          </svg>
          <div class="countdown__clock__text">Minutos</div>
        </b-col>

        <b-col :style="{ fill: colors.secondaryColor }" cols="6" md="3" class="countdown__clock py-2">
          <svg width="8rem" height="8rem" class="countdown__clock__svg">
            <svg :style="{ stroke: colors.primaryColor }" viewBox="0 0 100 100">
              <path :d="describeArc(50, 50, 42, (360/60)*(60-seconds), 360)" stroke-width="5" fill="none" />
            </svg>
            <text id="seconds" class="countdown__clock__number" x="50%" y="50%" text-anchor="middle" dominant-baseline="central">
              {{ seconds }}
            </text>
          </svg>
          <div class="countdown__clock__text">Segundos</div>
        </b-col>
      </b-row>
    </b-col>

    <b-col cols="12" class="countdown__arrow py-3 px-3 px-md-5">
      <span class="h1">
        <span v-scroll-to="target('#header')">
          &#x2c5;
          <!-- 'MODIFIER LETTER DOWN ARROWHEAD' (U+02C5) -->
        </span>
      </span>
    </b-col>

  </b-row>
</template>

<script>
function polarToCartesian(centerX, centerY, radius, angleInDegrees) {
  const angleInRadians = ((angleInDegrees - 90) * Math.PI) / 180.0;

  return {
    x: centerX + radius * Math.cos(angleInRadians),
    y: centerY + radius * Math.sin(angleInRadians)
  };
}

export default {
  props: {
    date: {
      type: Date,
      required: true
    },
    title: {
      type: String,
      required: false,
      default: "Something awesome is coming..."
    },
    disclaimer: {
      type: String,
      required: false,
      default: ""
    },
    colors: {
      type: Object,
      required: true
    }
  },

  data() {
    return {
      now: 0
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

    modifiedDate() {
      return Math.trunc(this.date / 1000);
    },

    offset() {
      const rem = parseFloat(
        window.getComputedStyle(document.documentElement)["font-size"]
      );
      return -1 * 5 * rem; // Current size of $navbar-height
    }
  },

  mounted() {
    this.timer_loop();
  },

  methods: {
    timer_loop() {
      this.now = Math.trunc(new Date().getTime() / 1000);
      setTimeout(this.timer_loop, 1000);
    },

    describeArc(centerX, centerY, radius, startAngle, endAngle) {
      const start = polarToCartesian(centerX, centerY, radius, endAngle);
      const end = polarToCartesian(centerX, centerY, radius, startAngle);

      const diff = endAngle - startAngle;
      const largeArcFlag = diff === 0 || diff > 180 ? "1" : "0";

      return `M ${start.x} ${start.y} A ${radius} ${radius}
          0 ${largeArcFlag} 0 ${end.x} ${end.y}`;
    },

    target(el) {
      return {
        el: el,
        offset: this.offset
      };
    }
  }
};
</script>

<style lang="scss">
.countdown {
  min-height: calc(100vh - #{$navbar-height});

  align-content: space-between;
  justify-content: center;
  align-items: center;

  text-align: center;

  &__clock {
    display: flex;
    flex-direction: column;
    align-items: center;

    &__number {
      cursor: default;
      font-size: 3rem;
      user-select: none;
    }

    &__svg:active {
      /* Easter-Egg animations */
      animation-name: circle;
      animation-duration: 1s;
      animation-iteration-count: infinite;

      transform-origin: 50% 50%;
    }

    &__text {
      cursor: default;
      font-size: 1.6rem;
      user-select: none;
    }
  }

  &__arrow {
    animation: bounce 2s 2; // Bounce twice
    cursor: pointer;
  }
}

// For some reason, a row inside a row is creating a overflow of 2 pixels
// that makes the screen slide. This class forces the inner row to have a
// width no wider than the viewport.
.fix {
  max-width: 100vw;
}

@keyframes bounce {
  0%,
  20%,
  50%,
  80%,
  100% {
    transform: translateY(0);
  }
  40% {
    transform: translateY(-2rem);
  }
  60% {
    transform: translateY(-1rem);
  }
}

@keyframes circle {
  0% {
    transform: rotateZ(0deg);
  }
  100% {
    transform: rotateZ(360deg);
  }
}
</style>
