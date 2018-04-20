<template>
  <b-row id="prizes" tag="section" class="px-3 py-5 px-sm-5">
    <b-col sm="12" class="py-5">
      <h1 class="text-center pb-3">
        Prêmios
      </h1>
    </b-col>
    <b-col sm="12" class=" py-3 p-md-2">
      <b-card border-variant="light"
              img-bottom>
        <h3 class="text-center">1˚ Lugar</h3>
        <p class="text-center">
          Viagem para Palo Alto com tudo pago + Curso ministrado na Universidade
          de Stanford
        </p>
      </b-card>
    </b-col>

    <b-col sm="12" md="12" lg="6" class=" py-3 p-md-2">
      <b-card body-bg-variant="light" class="text-center">
        <h3>2˚ Lugar</h3>
        Grupos de estudo com reuniões semanais, ao longo
        de um semestre, para aplicar os conhecimentos
        em projetos propostos pela organização
      </b-card>
    </b-col>

    <b-col sm="12" md="12" lg="6" class="py-3 p-md-2">
      <b-card body-bg-variant="light" class="text-center">
        <h3>3˚ Lugar</h3>
        Grupo de estudos avançado, com projetos em times
        para aprendizado de técnicas de modelagem,
        implementação e manutenção de sistemas
      </b-card>
    </b-col>
  </b-row>
</template>

<style lang="scss">
#prizes {
  background-color: #00b2ff;
}

h1 {
  color: #fff;
  font-size: 4em;
}
</style>
