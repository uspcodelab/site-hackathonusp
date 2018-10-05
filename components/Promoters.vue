<template>
  <b-row id="promoters" :style="{ backgroundColor: colors.lightColor }" tag="section" class="text-center px-3 px-sm-5 py-5">

    <b-col sm="12" class="py-5">
      <b-row class="align-items-center">

        <b-col sm="12">
          <h1 :style="{ color: colors.secondaryColor }" class="pb-5">Patrocínio</h1>
        </b-col>

        <b-col v-for="(sponsor, index) in info.sponsors"
               :key="index"
               sm="4"
               class="logo logo-small px-5 py-3 p-sm-2">
          <a :href="sponsor.webURL" class="h-100 mw-100">
            <img :src="sponsor.imgURL"
                 :alt="sponsor.name" class="d-block mw-100 mh-100">
          </a>
        </b-col>

      </b-row>
    </b-col>

    <b-col v-if="info.supporters" sm="12" class="py-5">
      <b-row class="align-items-center">

        <b-col sm="12">
          <h1 :style="{ color: colors.secondaryColor }" class="pb-5">Apoio</h1>
        </b-col>

        <b-col v-for="(supporter, index) in info.supporters" 
               :key="index" 
               sm="4" 
               class="logo logo-small px-5 py-3 p-sm-2">
          <a :href="supporter.webURL">
            <img :src="supporter.imgURL"
                 :alt="supporter.name" class="d-block mw-100 mh-100">
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
          <h1 :style="{ color: colors.primaryColor }" class="pb-5">Organização</h1>
        </b-col>

        <b-col v-for="(organizer, index) in info.organizers" 
               :key="index" 
               sm="4" 
               class="logo logo-small px-5 px-sm-2 py-3 py-sm-0">
          <a :href="organizer.webURL">
            <img :src="organizer.imgURL"
                 :alt="organizer.name" class="d-block mw-100 mh-100">
          </a>
        </b-col>

      </b-row>
    </b-col>

  </b-row>
</template>

<style lang="scss">
#promoters {
  min-height: calc(100vh - #{$navbar-height});
}

.logo {
  display: flex;
  justify-content: center;
  align-items: center;
}

@include media-breakpoint-up(md) {
  .logo-small {
    height: calc(2 * #{$navbar-height});
  }
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
