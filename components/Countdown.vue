<template>
  <b-row class="countdown-container">
    <b-col sm="12" class="text-center pb-5 text">
      <h1>Incrições em breve!</h1>
    </b-col>
    <b-col sm="12" md="6" lg="3" class="circle days text-center">
      <svg width="160" height="160" xmlns="http://www.w3.org/2000/svg">
        <circle id="circle" class="circle_animation" r="69.85699" cy="81" cx="81" stroke-width="8" stroke="#00b2ff" fill="none"/>
      </svg>
      <p class="text">Dias</p>
    </b-col>
    <b-col sm="12" md="6" lg="3" class="circle hours text-center">
      <svg width="160" height="160" xmlns="http://www.w3.org/2000/svg">
        <circle id="circle" class="circle_animation" r="69.85699" cy="81" cx="81" stroke-width="8" stroke="#00b2ff" fill="none"/>
      </svg>
      <p class="text">Horas</p>
    </b-col>
    <b-col sm="12" md="6" lg="3" class="circle minutes text-center">
      <svg width="160" height="160" xmlns="http://www.w3.org/2000/svg">
        <circle id="circle" class="circle_animation" r="69.85699" cy="81" cx="81" stroke-width="8" stroke="#00b2ff" fill="none"/>
      </svg>
      <p class="text">Minutos</p>
    </b-col>
    <b-col sm="12" md="6" lg="3" class="circle seconds text-center">
      <svg width="160" height="160" xmlns="http://www.w3.org/2000/svg">
        <circle id="circle" class="circle_animation" r="69.85699" cy="81" cx="81" stroke-width="8" stroke="#00b2ff" fill="none"/>
      </svg>
      <p class="text">Segundos</p>
    </b-col>
    <b-col sm="12" class="text-center mt-2">
      <img src="~/assets/down-arrow.svg" alt="" style="max-height: 5vh">
    </b-col>
  </b-row>
</template>

<style lang="scss">
.countdown-container {
  padding-top: 4em;
  min-height: 90vh;
  align-content: center;
  align-items: center;
  background-color: #2a2827;
  &__circle {
    display: flex;
    align-items: center;
    justify-content: center;
  }
  &__logo {
    align-self: center;
  }
}

.text {
  color: #e13566;
  font-size: 2rem;
}

.digits {
  color: #000000;
  font-size: 150px;
  font-weight: 100;
  margin: 10px;
  text-align: center;
}
</style>

<script>
// export default {
//   ready() {
//     window.setInterval(() => {
//       this.now = Math.trunc(new Date().getTime() / 1000);
//     }, 1000);
//   },
//   data() {
//     return {
//       now: Math.trunc(new Date().getTime() / 1000),
//       date: new Date("June 06 2018")
//     };
//   },

//   computed: {
//     now: function() {
//       window.setInterval(() => {
//         Math.trunc(new Date().getTime() / 1000);
//       }, 1000);
//     },
//     seconds() {
//       return (this.date - this.now()) % 60;
//     },

//     minutes() {
//       return Math.trunc((this.date - this.now()) / 60) % 60;
//     },

//     hours() {
//       return Math.trunc((this.date - this.now()) / 60 / 60) % 24;
//     },

//     days() {
//       return Math.trunc((this.date - this.now()) / 60 / 60 / 24);
//     }
//   }
// };
</script>
