<template>
  <b-navbar class="navbar" variant="light" fixed="top" type="light" toggleable>
    <b-navbar-brand v-scroll-to="target('#header')">
      <img :src="logo" alt="HackathonUSP Logo" class="navbar__logo">
    </b-navbar-brand>
    <b-navbar-toggle target="nav_dropdown_collapse" />
    <b-collapse id="nav_dropdown_collapse" is-nav>
      <b-navbar-nav v-for="item in info" :key="item.id">
        <b-nav-item v-scroll-to="target(`${item.id}`)">{{ item.text }}</b-nav-item>
      </b-navbar-nav>
    </b-collapse>
  </b-navbar>
</template>

<script>
export default {
  props: {
    logo: {
      type: String,
      required: true
    },
    info: {
      type: Array,
      required: true
    }
  },
  computed: {
    offset() {
      const rem = parseFloat(
        window.getComputedStyle(document.documentElement)["font-size"]
      );
      return -1 * 5 * rem; // Current size of $navbar-height
    }
  },
  methods: {
    target(el) {
      return {
        el: el,
        offset: this.offset
      };
    }
  }
};
</script>

<style lang="scss">
.navbar {
  box-shadow: 0 3px 5px rgba(57, 63, 72, 0.3);
  min-height: $navbar-height;

  &__logo {
    height: calc(#{$navbar-height} - 1.5rem);
  }
}
</style>
