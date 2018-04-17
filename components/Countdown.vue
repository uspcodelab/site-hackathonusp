<template>
  <b-row class="countdown-container py-10">
    <b-col sm="12" md="6" lg="3" class="circle days">
      <svg width="160" height="160" xmlns="http://www.w3.org/2000/svg">
        <circle id="circle" class="circle_animation" r="69.85699" cy="81" cx="81" stroke-width="8" stroke="#6fdb6f" fill="none"/>
      </svg>
      <p class="text">Days</p>
    </b-col>
    <b-col sm="12" md="6" lg="3" class="circle hours">
      <svg width="160" height="160" xmlns="http://www.w3.org/2000/svg">
        <circle id="circle" class="circle_animation" r="69.85699" cy="81" cx="81" stroke-width="8" stroke="#6fdb6f" fill="none"/>
      </svg>
      <p class="text">Hours</p>
    </b-col>
    <b-col sm="12" md="6" lg="3" class="circle minutes">
      <svg width="160" height="160" xmlns="http://www.w3.org/2000/svg">
        <circle id="circle" class="circle_animation" r="69.85699" cy="81" cx="81" stroke-width="8" stroke="#6fdb6f" fill="none"/>
      </svg>
      <p class="text">Minutes</p>
    </b-col>
    <b-col sm="12" md="6" lg="3" class="circle seconds">
      <svg width="160" height="160" xmlns="http://www.w3.org/2000/svg">
        <circle id="circle" class="circle_animation" r="69.85699" cy="81" cx="81" stroke-width="8" stroke="#6fdb6f" fill="none"/>
      </svg>
      <p class="text">Seconds</p>
    </b-col>
  </b-row>
</template>

<style>
.countdown-container {
  align-self: flex-end;
  padding-top: 20vh;
}

.text {
  color: rgb(225, 53, 102);
  font-size: 40px;
  font-weight: 40;
  margin-top: 10px;
  margin-bottom: 10px;
  text-align: center;
}

.digits {
  color: #30cff7;
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
