const pkg = require("./package");

module.exports = {
  mode: "spa",

  /*
  ** Headers of the page
  */
  head: {
    title: pkg.name,
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      {
        hid: "description",
        name: "description",
        content: "A maior competição de desenvolvimento da USP"
      }
    ],
    link: [
      { rel: "icon", type: "image/x-icon", href: "/icon.png" },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css?family=Montserrat"
      }
    ]
  },

  /*
  ** Customize the progress-bar color
  */
  loading: { color: "#e9c241" },

  /*
  ** Global CSS
  */
  css: [],

  /*
  ** Plugins to load before mounting the App
  */
  plugins: ["~plugins/vue-scrollto.js"],

  /*
  ** Nuxt.js modules
  */
  modules: [
    // Doc: https://bootstrap-vue.js.org/docs/
    "bootstrap-vue/nuxt",
    "nuxt-sass-resources-loader",
    "@nuxtjs/onesignal",
    "@nuxtjs/pwa"
  ],

  generate: {
    fallback: true
  },

  manifest: {
    name: "HackathonUSP",
    lang: "pt-br",
    mobileAppIOS: true,
    ogHost: "https://hackathon.ime.usp.br"
  },

  oneSignal: {
    init: {
      appId: "8d601dcc-08e4-4b42-bb4e-d6535d218a80",
      allowLocalHostAsSecureOrigin: true,
      welcomeNotification: {
        disable: false
      }
    }
  },

  /*
  ** Build configuration
  */
  build: {
    /*
    ** You can extend webpack config here
    */
    extend(config, ctx) {
      const vueLoader = config.module.rules.find(
        rule => rule.loader === "vue-loader"
      );
      vueLoader.options.transformToRequire = {
        img: "src",
        image: "xlink:href",
        "b-img": "src",
        "b-img-lazy": ["src", "blank-src"],
        "b-card": "img-src",
        "b-card-img": "img-src",
        "b-carousel-slide": "img-src",
        "b-embed": "src"
      };
    }
  },

  sassResources: [
    "@/assets/custom.scss",
    "@/node_modules/bootstrap/scss/bootstrap.scss"
  ]
};
