<template>
  <b-row id="promoters" tag="section" class="text-center px-3 px-sm-5 py-5">

    <b-col sm="12" class="py-5">
      <b-row class="align-items-center">

        <b-col sm="12">
          <h1 class="text-secondary pb-5">Patrocínio</h1>
        </b-col>
        
        <b-col sm="4" offset-sm="2" class="logo logo-small px-5 py-3 p-sm-2">
          <a class="h-100 mw-100" href="https://revelo.com.br/">
            <img src="@/assets/sponsors/logo_revelo_transparente.svg"
                 class="d-block mw-100 h-100" alt="Revelo">
          </a>
        </b-col>
        <b-col sm="4" class="logo logo-big px-5 py-3 p-sm-2">
          <a class="h-100 mw-100" href="https://www.vtex.com/">
            <img src="@/assets/sponsors/vtex-logo-rgb-alpha.svg"
                 class="d-block mw-100 h-100" alt="VTEX">
          </a>
        </b-col>
        <b-col sm="4" class="logo logo-small px-5 py-3 p-sm-2">
          <a class="h-100 mw-100" href="https://idwall.co/">
            <img src="@/assets/sponsors/idwall.svg"
                 class="d-block mw-100 h-100" alt="idwall">
          </a>
        </b-col>
        <b-col sm="4" class="logo logo-small px-5 py-3 p-sm-2">
          <a class="h-100 mw-100" href="https://amaro.com/">
            <img src="@/assets/sponsors/amaro-logo-bw-alpha.svg"
                 class="d-block mw-100 h-100" alt="Amaro">
          </a>
        </b-col>
        <b-col sm="4" class="logo logo-small px-5 py-3 p-sm-2">
          <a class="h-100 mw-100" href="https://br.udacity.com/">
            <img src="@/assets/sponsors/udacity.svg"
                 class="d-block mw-100 mh-100" alt="Udacity">
          </a>
        </b-col>
        <b-col sm="4" offset-sm="2" class="logo logo-small px-5 py-3 p-sm-2">
          <a class="h-100 mw-100" href="https://flowsense.com.br/">
            <img src="@/assets/sponsors/flowsense-logo-rgb-alpha.svg"
                 class="d-block mw-100 h-100" alt="Flowsense">
          </a>
        </b-col>
        <b-col sm="4" class="logo logo-small px-5 py-3 p-sm-2">
          <a class="h-100 mw-100" href="https://movile.com/">
            <img src="@/assets/sponsors/movile.svg"
                 class="d-block mw-100 h-100" alt="Movile">
          </a>
        </b-col>

      </b-row>
    </b-col>

    <b-col sm="12" class="py-5">
      <b-row class="align-items-center">

        <b-col sm="12">
          <h1 class="text-secondary pb-5">Apoio</h1>
        </b-col>

        <b-col sm="5" offset-sm="1" class="logo logo-big px-5 py-3 p-sm-2">
          <a href="https://prp.usp.br/">
            <img src="@/assets/supporters/prp-logo-rgb-alpha.png"
                 class="d-block mw-100 mh-100" alt="PRP-USP">
          </a>
        </b-col>
        <b-col sm="3" class="logo logo-small px-5 py-3 p-sm-2">
          <a href="https://www.ime.usp.br/">
            <img src="@/assets/supporters/ime-logo-bw-alpha.png"
                 class="d-block mw-100 mh-100" alt="IME-USP">
          </a>
        </b-col>
        <b-col sm="3" class="logo logo-small px-5 py-3 p-sm-2">
          <a href="https://www.ime.usp.br/imejr/">
            <img src="@/assets/supporters/imejr-logo-rgb-alpha.svg"
                 class="d-block mw-100 mh-100" alt="IME Jr.">
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
          <h1 class="text-primary pb-5">Organização</h1>
        </b-col>

        <b-col sm="4" class="logo logo-big px-5 px-sm-2 py-3 py-sm-0">
          <a href="https://codelab.ime.usp.br/">
            <img src="@/assets/organizers/ucl-logo-rgb-alpha.svg"
                 class="d-block mw-100 mh-100" alt="USPCodeLab">
          </a>
        </b-col>
        <b-col sm="4" class="logo logo-big px-5 px-sm-2 py-3 py-sm-0">
          <a href="https://hardwarelivreusp.org/">
            <img src="@/assets/organizers/hl-logo-rgb-alpha.svg"
                 class="d-block mw-100 mh-100" alt="Hardware Livre USP">
          </a>
        </b-col>
        <b-col sm="4" class="logo logo-big px-5 px-sm-2 py-3 py-sm-0">
          <a href="http://uspempreende.org/">
            <img src="@/assets/organizers/neu-logo-rgb-alpha.png"
                 class="d-block mw-100 mh-100" alt="Nucleo de Empreendedorismo da USP">
          </a>
        </b-col>

      </b-row>
    </b-col>

  </b-row>
</template>

<style lang="scss">
#promoters {
  min-height: calc(100vh - #{$navbar-height});
  background-color: theme-color("light");
}

.logo {
  display: flex;
  justify-content: center;
  align-items: center;
}

@include media-breakpoint-up(md) {
  .logo-big {
    height: calc(2 * #{$navbar-height});
  }

  .logo-small {
    height: calc(2 * #{$navbar-height});
  }
}
</style>
