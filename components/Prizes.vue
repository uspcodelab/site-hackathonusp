<template>
  <b-row id="dev-journey" tag="section" class="dev-journey px-3 py-5 px-sm-5">
    <b-col sm="12" class="py-5">
      <h1 class="text-primary text-center pb-3">
        Prêmios
      </h1>
    </b-col>

    <b-col sm="6" md="6" lg="3" class="dev-journey__info py-3 p-md-2">
      <b-card body-bg-variant="light" class="text-center">
        <h3 class="dev-journey-phase">dev.start()</h3>
        Ciclo de oficinas para apresentar programação web
        para o público geral da universidade, com tópicos
        como HTML, CSS e JavaScript
      </b-card>
    </b-col>

    <b-col sm="6" md="6" lg="3" class="dev-journey__info py-3 p-md-2">
      <b-card body-bg-variant="light" class="text-center">
        <h3 class="dev-journey-phase">dev.learn()</h3>
        Grupos de estudo com reuniões semanais, ao longo
        de um semestre, para aplicar os conhecimentos
        em projetos propostos pela organização
      </b-card>
    </b-col>

    <b-col sm="6" md="6" lg="3" class="dev-journey__info py-3 p-md-2">
      <b-card body-bg-variant="light" class="text-center">
        <h3 class="dev-journey-phase">dev.boost()</h3>
        Grupo de estudos avançado, com projetos em times
        para aprendizado de técnicas de modelagem,
        implementação e manutenção de sistemas
      </b-card>
    </b-col>

    <b-col sm="6" md="6" lg="3" class="dev-journey__info py-3 p-md-2">
      <b-card body-bg-variant="light" class="text-center">
        <h3 class="dev-journey-phase">dev.hire()</h3>
        Iniciativa de captação de currículos de alunos,
        em particular os participantes do programa,
        para facilitar o contato profissional
        com empresas parceiras
      </b-card>
    </b-col>
  </b-row>
</template>

<style lang="scss">
// .prizes {
//   display: flex;
//   height: 100vh;
//   padding: 5vh 2vh;
//   justify-content: center;
//   flex-wrap: wrap;
// }
.fa {
  font-size: 1.7rem;

  /* Make the icon inside a circle*/
  height: 3rem;
  width: 3rem;
  border-radius: 50%;

  /* Display icon */
  color: #182c39;
  background-color: white;

  /* Centralize icon in the circle */
  display: flex;
  justify-content: center;
  align-items: center;

  /* Configure transition */
  transition: color 0.2s;
}
</style>
