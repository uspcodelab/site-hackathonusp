<template>
  <b-row class="countdown-container">
    <b-col class="circle days">
      <!-- <p class="digits">{{ days }}</p> -->
      <p>Testing</p>
      <p class="text">Days</p>
    </b-col>
    <b-col class="circle hours">
      <!-- <p class="digits">{{ hours }}</p> -->
      <p>testing</p>
      <p class="text">Hours</p>
    </b-col>
    <b-col class="circle minutes">
      <!-- <p class="digits">{{ minutes }}</p> -->
      <p>testing</p>
      <p class="text">Minutes</p>
    </b-col>
    <b-col class="circle seconds">
      <!-- <p class="digits">{{ seconds }}</p> -->
      <p>testing</p>
      <p class="text">Seconds</p>
    </b-col>
  </b-row>
</template>

<style>
@import url(https://fonts.googleapis.com/css?family=Roboto+Condensed:400|Roboto:100);

.circle {
  margin: 20px;
}

.countdown-container {
  align-self: flex-end;
  padding-top: 30vh;
}

.text {
  color: #1abc9c;
  font-size: 40px;
  font-family: "Roboto Condensed", serif;
  font-weight: 40;
  margin-top: 10px;
  margin-bottom: 10px;
  text-align: center;
}

.digits {
  color: #30cff7;
  font-size: 150px;
  font-weight: 100;
  font-family: "Roboto", serif;
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
