<template>
  <b-row id="prizes" tag="section" class="prizes px-3 px-sm-5 py-5">

    <b-col sm="12" class="text-center py-5">
      <h1 class="pb-3">Prêmios</h1>
      <p class="text-center">
        Os membros dos times mais bem colocados ganharão
        cada um os seguintes prêmios:
      </p>
    </b-col>

    <!-- First Place Card -->
    <b-col cols="12" class="py-3 p-md-2">
      <b-card no-body border-variant="light" text-variant="dark" class="text-center">
        <b-col sm="12" class="py-3 p-md-4">
          <img src="@/assets/flaticon/gold-medal.svg" alt="Gold Medal" class="card-img card-img-top w-25">
        </b-col>
        <b-card-body>
          <h4 class="card-title text-gold">1˚ Lugar</h4>
          Viagem para o <strong>Vale do Silício</strong> financiada pela USP
          <br><i class="text-gold fa fa-plus"/><br>
          Curso de curta duração na <strong>Universidade de Stanford</strong>
          <br><i class="text-gold fa fa-plus"/><br>
          <strong>Troféu impresso em 3D</strong> do HackathonUSP
          <br><i class="text-gold fa fa-plus"/><br>
          <strong>Medalha</strong> do HackathonUSP
        </b-card-body>
      </b-card>
    </b-col>

    <!-- Second Place Card -->
    <b-col sm="12" md="12" lg="6" class="py-3 p-md-2">
      <b-card no-body border-variant="light" text-variant="dark" class="text-center">
        <b-col sm="12" class="py-3 p-md-4">
          <img src="@/assets/flaticon/silver-medal.svg" alt="Silver Medal" class="card-img card-img-top w-25">
        </b-col>
        <b-card-body>
          <h4 class="card-title text-silver">2˚ Lugar</h4>
          Amazon <strong>Kindle 8ª Geração</strong>
          <br><i class="text-silver fa fa-plus"/><br>
          <strong>Medalha</strong> do HackathonUSP
        </b-card-body>
      </b-card>
    </b-col>

    <!-- Third Place Card -->
    <b-col sm="12" md="12" lg="6" class="py-3 p-md-2">
      <b-card no-body border-variant="light" text-variant="dark" class="text-center">
        <b-col sm="12" class="py-3 p-md-4">
          <img src="@/assets/flaticon/bronze-medal.svg" alt="Bronze Medal" class="card-img card-img-top w-25">
        </b-col>
        <b-card-body>
          <h4 class="card-title text-bronze">3˚ Lugar</h4>
          Fone de ouvido <strong>JBL</strong>
          <br><i class="text-bronze fa fa-plus"/><br>
          <strong>Medalha</strong> do HackathonUSP
        </b-card-body>
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

.card-img {
  max-height: 30vh;
  max-width: 30vh;
}

.text-gold {
  color: #d9a441 !important;
}

.text-silver {
  color: #a8a8a8 !important;
}

.text-bronze {
  color: #965a38 !important;
}
</style>
