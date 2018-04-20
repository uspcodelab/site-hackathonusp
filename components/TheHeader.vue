<template>
  <b-row id="header" tag="section" class="header p-3 p-sm-5">
    <b-col sm="6" class="header__text">
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
    <b-col sm="6" class="header__logo pb-4 pb-sm-0">
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
</style>

<script>
import Countdown from "~/components/Countdown.vue";
export default {
  components: {
    Countdown
  }
};
</script>
