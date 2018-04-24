<template>
  <b-row id="footer" tag="footer" class="footer px-3 py-5 px-sm-5 text-white">
    <b-col class="footer__social">
      <p class="footer__social__description text-center">
        Designed with <span class="fa fa-heart" style="color:red;"/>
        by USPCodeLab
      </p>
      <!-- <a href="https://facebook.com/uspcodelab/" target="_blank">
        <span class="fa fa-facebook mx-2"/>
      </a> -->
    </b-col>
  </b-row>
</template>

<style lang="scss">
.footer {
  color: theme-color("light");
  background-color: theme-color("dark");

  &__social {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-content: center;

    &__description {
      flex-basis: 100%;
      white-space: nowrap;
    }
  }
}
</style>
