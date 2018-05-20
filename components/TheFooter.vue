<template>
  <b-row id="footer" tag="footer" class="footer px-3 py-5 px-sm-5 text-white">
    <b-col class="footer__social">
      <p class="footer__social__description text-center">
        Designed with
        <span style="color:red;">
          &#x2764; <!-- 'HEAVY BLACK HEART' (U+2764) -->
        </span>
        by <a href="https://codelab.ime.usp.br/">USPCodeLab</a>
      </p>

      <!-- Credits to FlatIcon author -->
      <div class="flaticon-credits">
        Icons made by
        <a href="https://www.flaticon.com/authors/freepik" title="Freepik">Freepik</a>
        from
        <a href="https://www.flaticon.com" title="Flaticon">Flaticon</a>
      </div>
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

.flaticon-credits {
  font-size: 0.6rem;
  text-align: center;
}
</style>
