<template>
  <b-row id="about" tag="section" class="about px-3 px-sm-5 py-5">

    <b-col sm="12" class="text-center py-5">
      <h1 class="text-primary pb-3">Ciência de Dados</h1>
      <p>
        Considerada o
        <a href="https://www.coursera.org/learn/data-manipulation/lecture/tUjcE/a-fourth-paradigm-of-science">4º paradigma da ciência</a>,
        ela está mudando nossa forma de ver o mundo.
        <br class="d-none d-lg-inline">
        Nesta edição, o HackathonUSP desafia os participantes a pensarem:
        <strong>como a ciência de dados pode melhorar o dia a dia
        universitário?</strong>
      </p>
    </b-col>

    <b-col sm="6" md="6" lg="3" class="about__info py-3 p-md-2">
      <b-card body-bg-variant="light" class="text-center">
        <img src="@/assets/symbols/databases.svg"
             class="about__info__icon p-3">
        <h3 class="about-phase">Cruze dados</h3>
        Procure diferentes fontes de dados e investigue como elas
        podem se conectar
      </b-card>
    </b-col>

    <b-col sm="6" md="6" lg="3" class="about__info py-3 p-md-2">
      <b-card body-bg-variant="light" class="text-center">
        <img src="@/assets/symbols/binaries.svg"
             class="about__info__icon p-3">
        <h3 class="about-phase">Encontre padrões</h3>
        Use métodos manuais e automáticos para revelar padrões
        que estão ocultos
      </b-card>
    </b-col>

    <b-col sm="6" md="6" lg="3" class="about__info py-3 p-md-2">
      <b-card body-bg-variant="light" class="text-center">
        <img src="@/assets/symbols/containers.svg"
             class="about__info__icon p-3">
        <h3 class="about-phase">Dinamize aplicações</h3>
        Faça sistemas que possam reagir a mudanças e aprender
        com o seu próprio funcionamento
      </b-card>
    </b-col>

    <b-col sm="6" md="6" lg="3" class="about__info py-3 p-md-2">
      <b-card body-bg-variant="light" class="text-center">
        <img src="@/assets/symbols/graphs.svg"
             class="about__info__icon p-3">
        <h3 class="about-phase">Visualize relações</h3>
        Crie representações intuitivas e facilite o entendimento
        de fenômenos complexos
      </b-card>
    </b-col>

  </b-row>
</template>

<style lang="scss">
.about {
  min-height: calc(100vh - #{$navbar-height});

  color: theme-color("dark");
  background-color: theme-color("light");

  &__info {
    display: inline-flex;

    &__icon {
      max-width: 80%;
    }
  }
}
</style>
