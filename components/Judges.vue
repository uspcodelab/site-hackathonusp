<template>
  <b-row id="judges" tag="section" class="judges text-center px-3 px-sm-5 py-5">

    <b-col sm="12" class="px-lg-5 py-5">
      <h1 class="text-primary pb-3">Jurados</h1>
    </b-col>

    <b-col v-for="judge in info.judges" :key="judge.id" sm="4" class="judges__profile py-3 py-md-0">
      <img :src="judge.imgURL" :alt="judge.imgAlt"
           class="w-50 py-3"
           style="border-radius: 50%;">
      <strong>{{ judge.name }}</strong>
      <small>
        {{ judge.bio }}
      </small>
    </b-col>
  </b-row>
</template>

<style lang="scss">
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

<script>
export default {
  props: {
    info: {
      type: Object,
      required: true
    }
  }
};
</script>
