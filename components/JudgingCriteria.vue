<template>
  <b-row id="judging-criteria" tag="section" class="judging-criteria px-3 px-sm-5 py-5">
    <b-col sm="12" class="text-center px-lg-5 py-5">
      <h1 class="pb-3"><strong>Critérios de Avaliação</strong></h1>
    </b-col>
    <b-col sm="6" md="6" lg="3" class="py-3 p-md-2">
      <h4 class="dev-journey-phase">Criatividade</h4>
      É uma solução original? Repensa, de forma diferente, algo que já existe?
    </b-col>

    <b-col sm="6" md="6" lg="3" class="py-3 p-md-2">
      <h4 class="dev-journey-phase">Design</h4>
      A solução possui uma boa interface? Tem uma boa experiência de usuário (UX)?
    </b-col>

    <b-col sm="6" md="6" lg="3" class="py-3 p-md-2">      
      <h4 class="dev-journey-phase">Impacto</h4>
      A ideia é escalável? Pode ser aplicada no mundo real?
    </b-col>

    <b-col sm="6" md="6" lg="3" class="py-3 p-md-2">
      <h4 class="dev-journey-phase">Funcionamento</h4>
      A aplicação pode ser usada em pelo menos um exemplo bem definido? Foi apresentado algum caso de uso?
    </b-col>
  </b-row>
</template>

<style lang="scss">
.judging-criteria {
  background-color: theme-color("secondary");
  color: theme-color("light");
  min-height: calc(100vh - #{$navbar-height});

  .icon {
    max-height: 25%;
  }
}
</style>
