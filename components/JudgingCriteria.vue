<template>
  <b-row id="judging-criteria" tag="section"
         class="judging-criteria text-center px-3 px-sm-5 py-5">

    <b-col sm="12" class="px-lg-5 py-5">
      <h1 class="pb-3">Critérios de Avaliação</h1>
    </b-col>

    <b-col sm="6" md="6" lg="3" class="py-3 p-md-4">
      <h4><strong>Criatividade</strong></h4>
      <p>
        É uma solução original?
        Repensa, de forma diferente, algo que já existe?
      </p>
    </b-col>

    <b-col sm="6" md="6" lg="3" class="py-3 p-md-4">
      <h4><strong>Design</strong></h4>
      <p>
        A solução possui uma boa interface?
        Tem uma boa experiência de usuário (UX)?
      </p>
    </b-col>

    <b-col sm="6" md="6" lg="3" class="py-3 p-md-4">
      <h4><strong>Impacto</strong></h4>
      <p>
        A ideia é escalável?
        Pode ser aplicada mundo real?
      </p>
    </b-col>

    <b-col sm="6" md="6" lg="3" class="py-3 p-md-4">
      <h4><strong>Funcionamento</strong></h4>
      <p>
        A aplicação pode ser usada num exemplo bem definido?
        Foi apresentado algum caso de uso?
      </p>
    </b-col>

  </b-row>
</template>

<style lang="scss">
.judging-criteria {
  background-color: theme-color("secondary");
  color: theme-color("light");
}
</style>
