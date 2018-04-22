<template>
  <b-row id="footer" tag="footer" class="footer px-3 py-5 px-sm-5 text-white">
    <b-col class="footer__social">
      <p class="footer__social__description text-center">
        Confirme presença no evento!
      </p>
      <a href="https://facebook.com/uspcodelab/" target="_blank">
        <span class="fa fa-facebook mx-2"/>
      </a>
    </b-col>
  </b-row>
</template>

<style lang="scss">
a:hover {
  text-decoration: none;
}

.footer {
  color: #fff;
  background-color: #292827;

  &__about {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-content: center;

    &__logo {
      height: 4rem;
    }

    &__neu_logo {
      height: 8rem;
    }

    &__description {
      max-width: 24rem;
    }
  }

  &__social {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-content: center;

    &__description {
      flex-basis: 100%;
      white-space: nowrap;
    }

    .fa {
      font-size: 1.7rem;

      /* Make the icon inside a circle*/
      height: 3rem;
      width: 3rem;
      border-radius: 50%;

      /* Display icon */
      color: #182c39;
      background-color: white;

      /* Centralize icon in the circle */
      display: flex;
      justify-content: center;
      align-items: center;

      /* Configure transition */
      transition: color 0.2s;
    }

    .fa-envelope:hover {
      color: #00aced;
    }

    .fa-envelope:focus {
      color: #00aced;
    }

    .fa-facebook:hover {
      color: #2b55ff;
    }
    .fa-facebook:focus {
      color: #2b55ff;
    }

    .fa-telegram:hover {
      color: #1f95d3;
    }
    .fa-telegram:focus {
      color: #1f95d3;
    }

    .fa-gitlab:hover {
      color: #e24329;
    }
    .fa-gitlab:focus {
      color: #e24329;
    }
  }
}
</style>
