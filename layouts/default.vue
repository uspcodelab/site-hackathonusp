<template>
  <div class="page">
    <nuxt/>
  </div>
</template>

<style lang="scss">
html {
  font-size: 14px;
}

@include media-breakpoint-up(lg) {
  html {
    font-size: 16px;
  }
}

@include media-breakpoint-up(xl) {
  html {
    font-size: 28px;
  }
}

.page {
  margin: 0;
  padding-top: 4rem;
}
</style>
