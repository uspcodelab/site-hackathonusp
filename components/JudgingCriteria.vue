<template>
  <b-row id="judging-criteria" :style="{ backgroundColor: colors.secondaryColor, color: colors.lightColor }" tag="section" class="text-center px-3 px-sm-5 py-5">

    <b-col sm="12" class="px-lg-5 py-5">
      <h1 class="pb-3">Critérios de Avaliação</h1>
    </b-col>

    <b-col v-for="criterion in info.criteria" :key="criterion.id" sm="6" md="6" lg="3" class="py-3 p-md-4">
      <img :src="criterion.iconURL" alt="placeholder" class="w-25 py-3">
      <h4><strong>{{ criterion.name }}</strong></h4>
      <p>
        {{ criterion.description }}
      </p>
    </b-col>

  </b-row>
</template>

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
