<template>
  <b-row id="prizes" :style="{ color: colors.lightColor, backgroundColor: colors.secondaryColor }" tag="section" class="prizes px-3 px-sm-5 py-5">

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
          <p v-html="info.firstPrize" />
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
          <p v-html="info.secondPrize" />
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
          <p v-html="info.thirdPrize" />
        </b-card-body>
      </b-card>
    </b-col>

  </b-row>
</template>

<style lang="scss">
.prizes {
  min-height: calc(100vh - #{$navbar-height});
}

.card-img {
  max-height: 20vh;
  max-width: 30vh;
}

.text-gold {
  color: #d9a441;
}
.text-silver {
  color: #a8a8a8;
}
.text-bronze {
  color: #965a38;
}
</style>

<script>
export default {
  props: {
    info: {
      type: Object,
      required: true
    },
    colors: {
      type: Object,
      required: true
    }
  }
};
</script>
