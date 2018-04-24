<template>
  <b-row id="judging-criteria" tag="section" class="judging-criteria px-3 px-sm-5 py-5">
    <b-col sm="12" class="text-center px-lg-5 py-5">
      <h1 class="pb-3"><strong>Critérios de Avaliação</strong></h1>
    </b-col>
    <b-col sm="6" md="6" lg="3" class="py-3 p-md-4 text-center">
      <h4 class="criteria">Criatividade</h4>
      <p>É uma solução original? Repensa, de forma diferente, algo que já existe?</p>
    </b-col>

    <b-col sm="6" md="6" lg="3" class="py-3 p-md-4 text-center">
      <h4 class="criteria">Design</h4>
      <p>A solução possui uma boa interface? Tem uma boa experiência de usuário (UX)?</p>
    </b-col>

    <b-col sm="6" md="6" lg="3" class="py-3 p-md-4 text-center">      
      <h4 class="criteria">Impacto</h4>
      <p>A ideia é escalável? Pode ser aplicada no mundo real?</p>
    </b-col>

    <b-col sm="6" md="6" lg="3" class="py-3 p-md-4 text-center">
      <h4 class="criteria">Funcionamento</h4>
      <p>A aplicação pode ser usada em pelo menos um exemplo bem definido? Foi apresentado algum caso de uso?</p>
    </b-col>
  </b-row>
</template>

<style lang="scss">
.judging-criteria {
  background-color: theme-color("secondary");
  color: theme-color("light");

  .icon {
    max-height: 25%;
  }
}
</style>
