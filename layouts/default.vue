<template>
  <div class="page">
    <nuxt />
  </div>
</template>

<style lang="scss">
html {
  font-size: 16px;
}

@include media-breakpoint-up(xl) {
  html {
    font-size: 18px;
  }
}

@include media-breakpoint-up(xxl) {
  html {
    font-size: 24px;
  }
}

.page {
  padding-top: $navbar-height;
}
</style>
