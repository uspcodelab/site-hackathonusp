<template>
  <b-row id="judges" tag="section" class="judges text-center px-3 px-sm-5 py-5">

    <b-col sm="12" class="px-lg-5 py-5">
      <h1 class="text-primary pb-3">Jurados</h1>
    </b-col>

    <b-col sm="4" class="judges__profile py-3 py-md-0">
      <img src="@/assets/round-placeholder.svg" alt="placeholder"
           class="w-50 py-3">
      <strong>Denis Mauá</strong>
      <p>
        Em breve...
      </p>
    </b-col>

    <b-col sm="4" class="judges__profile py-3 py-md-0">
      <img src="@/assets/round-placeholder.svg" alt="placeholder"
           class="w-50 py-3">
      <strong>Vitor Paulo</strong>
      <p>
        Em breve...
      </p>
    </b-col>

    <b-col sm="4" class="judges__profile py-3 py-md-0">
      <img src="@/assets/round-placeholder.svg" alt="placeholder"
           class="w-50 py-3">
      <strong>Nina Hirata</strong>
      <p>
        Em breve...
      </p>
    </b-col>

    <b-col sm="4" offset-sm="2" class="judges__profile py-3 py-md-0">
      <img src="@/assets/round-placeholder.svg" alt="placeholder"
           class="w-50 py-3">
      <strong>Isa Kobuto</strong>
      <p>
        Em breve...
      </p>
    </b-col>

    <b-col sm="4" class="judges__profile py-5 py-md-0">
      <img src="@/assets/round-placeholder.svg" alt="placeholder"
           class="w-50 py-3">
      <strong>Renato Cordeiro</strong>
      <p>
        Em breve...
      </p>
    </b-col>
  </b-row>
</template>

<style lang="scss">
// Dênis Mauá:
// Professor Asistente de Ciência da Computação do IME-USP.
// Pesquisa nos campos de raciocínio probabilistico e suas aplicações
// em inteligênica artificial e aprendizagem de máquina

.judges {
  min-height: calc(100vh - #{$navbar-height});
  background-color: theme-color("light");

  &__profile {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
}
</style>
