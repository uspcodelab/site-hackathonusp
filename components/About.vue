<template>
  <b-row id="about" :style="{ color: colors.darkColor, backgroundColor: colors.lightColor }" tag="section" class="about px-3 px-sm-5 py-5">

    <b-col sm="12" class="text-center px-lg-5 py-5">
      <h1 :style="{ color: colors.primaryColor }" class="pb-3">{{ info.theme }}</h1>
      <p v-html="info.question" />
      <p class="px-lg-5" v-html="info.description" />
    </b-col>

    <b-col v-for="topic in info.topics" :key="topic.id" sm="6" md="6" lg="3" class="about__info py-3 p-md-2">
      <b-card body-bg-variant="light" class="text-center">
        <img :src="topic.imgURL" class="about__info__icon p-3">
        <h3 class="about-phase">{{ topic.title }}</h3>
        {{ topic.text }}
      </b-card>
    </b-col>
  </b-row>
</template>

<style lang="scss">
.about {
  min-height: calc(100vh - #{$navbar-height});

  &__info {
    display: inline-flex;

    &__icon {
      max-width: 80%;
    }
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
