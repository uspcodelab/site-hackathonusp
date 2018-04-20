<template>
  <b-row tag="nav" class="text-center">
    <b-col sm="6">
      <img src="~/assets/hackathon-usp.svg" alt="HackathonUSP Logo" class="navbar__logo">
    </b-col>
    <b-col sm="6" class="nav-text" style="display: flex; align-items: center;">
      <h3>HackathonUSP 2018</h3>
    </b-col>
  </b-row>
</template>

<style lang="scss">
.navbar {
  box-shadow: 0 3px 5px rgba(57, 63, 72, 0.3);
  min-height: 4rem;
  font-size: 1em;

  &__logo {
    max-height: 4rem;
  }
  &__nav-text {
    display: flex;
    align-items: center;
  }
}
</style>
