<template>
  <b-navbar class="navbar" variant="light" fixed="top" type="light" toggleable>
    <b-navbar-brand v-scroll-to="'#header'">
      <img src="~/assets/hackathon-usp.svg" alt="HackathonUSP Logo" class="navbar__logo">
    </b-navbar-brand>
    <b-navbar-toggle target="nav_dropdown_collapse"/>
    <b-collapse id="nav_dropdown_collapse" is-nav>
      <b-navbar-nav>
        <b-nav-item v-scroll-to="'#header'">HackathonUSP 2018</b-nav-item>
        <b-nav-item v-scroll-to="'#about'">Tema</b-nav-item>
        <b-nav-item v-scroll-to="'#prizes'">Prêmios</b-nav-item>
        <b-nav-item v-scroll-to="'#sponsors'">Patrocinadores</b-nav-item>
        <b-nav-item v-scroll-to="'#footer'">Contato</b-nav-item>
      </b-navbar-nav>
    </b-collapse>
  </b-navbar>
</template>

<style lang="scss">
.navbar {
  box-shadow: 0 3px 5px rgba(57, 63, 72, 0.3);
  min-height: 4rem;
  font-size: 1em;

  &__logo {
    height: 4rem;
  }
}
</style>
