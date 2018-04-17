<template>
  <b-row id="dev-journey" tag="section" class="dev-journey px-3 py-5 px-sm-5">
    <b-col sm="12" class="py-2">
      <h1 class="text-primary text-center pb-3" style="color: #55a6c9">
        Prêmios
      </h1>
    </b-col>

    <b-col sm="12" class="dev-journey__info py-3 p-md-2">
      <!-- <b-card body-bg-variant="light" class="text-center">
        <span class="fa fa-plane mx-2"/>
        <h3 class="dev-journey-phase">1˚ Lugar</h3>
        Ciclo de oficinas para apresentar programação web
        para o público geral da universidade, com tópicos
        como HTML, CSS e JavaScript
      </b-card> -->
      <b-card border-variant="light"
              img-src="~/assets/stanford-logo.png"
              img-alt="Stanford University"
              img-bottom>
        <h3 class="text-center">1˚ Lugar</h3>
        <p class="text-center">
          Viagem para Palo Alto com tudo pago + Curso ministrado na Universidade
          de Stanford
        </p>
      </b-card>
    </b-col>

    <b-col sm="12" md="12" lg="6" class="dev-journey__info py-3 p-md-2">
      <b-card body-bg-variant="light" class="text-center">
        <h3 class="dev-journey-phase">2˚ Lugar</h3>
        Grupos de estudo com reuniões semanais, ao longo
        de um semestre, para aplicar os conhecimentos
        em projetos propostos pela organização
      </b-card>
    </b-col>

    <b-col sm="12" md="12" lg="6" class="dev-journey__info py-3 p-md-2">
      <b-card body-bg-variant="light" class="text-center">
        <h3 class="dev-journey-phase">3˚ Lugar</h3>
        Grupo de estudos avançado, com projetos em times
        para aprendizado de técnicas de modelagem,
        implementação e manutenção de sistemas
      </b-card>
    </b-col>
  </b-row>
</template>

<style lang="scss">
h1 {
  font-size: 4em;
}
</style>
