<template>
  <b-row id="header" tag="section" class="header px-3 py-5 px-sm-5">
    <b-col sm="6" class="header__text py-5">
      <h1 class="text-center text-md-left pb-3">
        HackathonUSP 2018
      </h1>
      <p class="lead text-center text-md-left">
        Aplicando <strong>Ciência de Dados</strong> para melhorar o dia-a-dia universitário
      </p>
      <p class="lead text-center text-md-left">
        <strong>8</strong> e <strong>9</strong> de <strong>junho</strong>
      </p>
      <p class="lead text-center text-md-left">
        <strong>Instituto de Matemática e Estatística</strong>
      </p>
    </b-col>
    <b-col sm="6" class="header__logo pt-5 pb-sm-0">
      <img src="~/assets/hackathon-usp.svg" class="header__logo__img">
    </b-col>
  </b-row>
</template>

<style lang="scss">
.header {
  min-height: calc(100vh);
  align-items: center;
  text-align: center;

  background-image: linear-gradient(#ff3c58, #ff2a49);
  color: white;

  h1 {
    font-family: Montserrat, sans;
    font-weight: 600;
  }

  &__logo {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-end;

    &__img {
      max-height: 70vh;
    }
  }

  &__text {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;

    h1 {
      font-family: Montserrat, sans;
      font-weight: 600;
    }

    p.lead strong {
      font-weight: bold;
    }
  }
}

@include media-breakpoint-up(md) {
  .header__logo {
    order: 2;
    justify-content: center;

    &__img {
      min-width: 0;
      width: 90%;
    }
  }

  .header__text {
    order: 1;
    align-items: left;
    justify-content: center;
  }
}

@include media-breakpoint-up(lg) {
  .header__logo__img {
    width: 70%;
  }
}
</style>

<script>
import Countdown from "~/components/Countdown.vue";
export default {
  components: {
    Countdown
  }
};
</script>
