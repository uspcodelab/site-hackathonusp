<template>
  <b-row id="prizes" tag="section" class="prizes px-3 px-sm-5 py-5">

    <b-col sm="12" class="text-center py-5">
      <h1 class="pb-3">Prêmios</h1>
      <p class="text-center">
        Os membros dos times mais bem colocados ganharão
        cada um os seguintes prêmios:
      </p>
    </b-col>

    <b-col cols="12" class="py-3 p-md-2">
      <b-card border-variant="light"
              text-variant="dark"
              class="text-center"
              title="1˚ Lugar">
        Viagem para o <strong>Vale do Silício</strong> financiada pela USP
        <br><i class="text-secondary fa fa-plus"/><br>
        <strong>Troféu impresso em 3D</strong> do HackathonUSP
        <br><i class="text-secondary fa fa-plus"/><br>
        <strong>Medalha</strong> do HackathonUSP
      </b-card>
    </b-col>

    <b-col sm="12" md="12" lg="6" class="py-3 p-md-2">
      <b-card border-variant="light"
              text-variant="dark"
              class="text-center"
              title="2˚ Lugar">
        Kindle
        <br><i class="text-secondary fa fa-plus"/><br>
        <strong>Medalha</strong> do HackathonUSP
      </b-card>
    </b-col>

    <b-col sm="12" md="12" lg="6" class="py-3 p-md-2">
      <b-card border-variant="light"
              class="text-center"
              text-variant="dark"
              title="3˚ Lugar">
        Fone de ouvido
        <br><i class="text-secondary fa fa-plus"/><br>
        <strong>Medalha</strong> do HackathonUSP
      </b-card>
    </b-col>

  </b-row>
</template>

<style lang="scss">
.prizes {
  min-height: calc(100vh - #{$navbar-height});

  color: theme-color("light");
  background-color: theme-color("secondary");
}
</style>
