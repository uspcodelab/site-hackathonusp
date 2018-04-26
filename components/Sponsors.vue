<template>
  <b-row id="sponsors" tag="section" class="text-center px-3 px-sm-5 py-5">

    <b-col sm="12" class="py-5">
      <b-row class="align-items-center">

        <b-col sm="12">
          <h1 class="text-primary pb-5">Organização</h1>
        </b-col>

        <b-col sm="4" class="px-5 px-sm-2 py-3 py-sm-0">
          <a href="https://codelab.ime.usp.br/">
            <img src="@/assets/organizers/ucl-logo-rgb-alpha.svg"
                 class="w-100" alt="USPCodeLab">
          </a>
        </b-col>
        <b-col sm="4" class="px-5 px-sm-2 py-3 py-sm-0">
          <a href="https://hardwarelivreusp.org/">
            <img src="@/assets/organizers/hl-logo-rgb-alpha.svg"
                 class="w-100" alt="Hardware Livre USP">
          </a>
        </b-col>
        <b-col sm="4" class="px-5 px-sm-2 py-3 py-sm-0">
          <a href="http://uspempreende.org/">
            <img src="@/assets/organizers/neu-logo-rgb-alpha.png"
                 class="w-100" alt="Nucleo de Empreendedorismo da USP">
          </a>
        </b-col>

      </b-row>
    </b-col>

    <b-col class="align-items-center py-3">
      <hr>
    </b-col>

    <b-col sm="12" class="py-5">
      <b-row class="align-items-center">

        <b-col sm="12">
          <h1 class="text-secondary pb-5">Patrocínio</h1>
        </b-col>

        <b-col sm="6" class="px-5">
          <a href="https://prp.usp.br/">
            <img src="@/assets/sponsors/prp-logo-rgb-alpha.png"
                 class="w-100" alt="PRP-USP">
          </a>
        </b-col>
        <b-col sm="6" class="px-5">
          <a href="https://www.vtex.com/">
            <img src="@/assets/sponsors/vtex-logo-rgb-alpha.svg"
                 class="w-100" alt="VTEX">
          </a>
        </b-col>

      </b-row>
    </b-col>

  </b-row>
</template>

<style lang="scss">
#sponsors {
  min-height: calc(100vh - #{$navbar-height});
  background-color: theme-color("light");
}
</style>
