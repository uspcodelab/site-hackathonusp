<template>
  <b-row id="header" :style="{ 
    color: colors.lightColor,
    backgroundImage: `linear-gradient(${colors.gradientStartColor}, 
                                              ${ colors.gradientEndColor ? colors.gradientEndColor : colors.primaryColor})` 
  }" tag="section" class="header px-3 px-sm-5 py-5">

    <!-- Hackathon's logo -->
    <b-col sm="5" lg="6" class="header__logo py-3 py-md-5">
      <img :src="info.logo" :style="{ backgroundColor: colors.lightColor }" class="w-100">
    </b-col>

    <b-col sm="7" lg="6" class="header__text py-3 py-md-5">
      <!-- Header title -->
      <h1 class="text-center text-md-left pb-3 w-100" v-html="info.title" />

      <!-- Hackathon's phrase -->
      <p class="lead text-center text-md-left w-100" v-html="info.phrase" />

      <!-- Date -->
      <p class="text-center text-md-left w-100" v-html="info.date" />

      <!-- Location -->
      <p class="text-center text-md-left w-100" v-html="info.location" />

      <!-- Subscriptions and rules -->
      <div class="d-flex justify-content-center justify-content-md-start
                  w-100 pt-3">
        <b-btn v-if="subs" :href="info.subscriptions" variant="light" class="mr-2">
          Inscreva-se!
        </b-btn>
        <b-btn v-if="subs" :href="info.rules" variant="outline-light" class="ml-2">
          Regulamento
        </b-btn>
        <b-btn v-if="submission" :href="info.submit" variant="outline-light" class="ml-2">
          Submeter projeto!
        </b-btn>
      </div>
    </b-col>

  </b-row>
</template>

<script>
export default {
  props: {
    subs: {
      type: Boolean,
      required: true
    },
    submission: {
      type: Boolean,
      required: false,
      default: false
    },
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

<style lang="scss">
.header {
  min-height: calc(100vh - #{$navbar-height});

  h1 {
    font-family: Montserrat, sans;
    font-weight: 600;
  }

  &__logo {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;

    img {
      max-height: 40vh;
      max-width: 40vh;
      border-radius: 15%;
    }
  }

  &__text {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;

    h1 {
      font-family: Montserrat, sans;
      font-weight: 600;
    }

    p.lead strong {
      font-weight: bold;
    }
  }
}

@include media-breakpoint-up(md) {
  .header__logo {
    order: 2;
    justify-content: center;

    &__img {
      min-width: 0;
      width: 90%;
    }
  }

  .header__text {
    order: 1;
    align-items: left;
    justify-content: center;
  }
}
</style>
