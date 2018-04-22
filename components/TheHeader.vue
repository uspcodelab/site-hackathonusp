<template>
  <b-row id="header" tag="section" class="header px-3 px-sm-5 py-5">
    <b-col sm="4" lg="6" class="header__logo py-3 py-md-5">
      <img src="~/assets/hackathon-usp.svg">
    </b-col>
    <b-col sm="8" lg="6" class="header__text py-3 py-md-5">
      <h1 class="text-center text-md-left pb-3">
        HackathonUSP 2018
      </h1>
      <p class="lead text-center text-md-left">
        Aplicando <strong>ciência de dados</strong> para melhorar
        <span class="text-md-nowrap">o dia a dia universitário</span>
      </p>
      <p class="text-center text-md-left">
        8 e 9 de junho de 2018
      </p>
      <p class="text-center text-md-left">
        Instituto de Matemática e Estatística da USP
      </p>
    </b-col>
  </b-row>
</template>

<style lang="scss">
.header {
  min-height: calc(100vh - #{$navbar-height});

  color: theme-color("light");
  background-image: linear-gradient(#ff2a49, theme-color("primary"));

  h1 {
    font-family: Montserrat, sans;
    font-weight: 600;
  }

  &__logo {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;

    img {
      max-height: 40vh;
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
</style>
