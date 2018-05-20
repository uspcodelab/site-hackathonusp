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
      { hid: "description", name: "description", content: pkg.description }
    ],
    link: [
      { rel: "icon", type: "image/x-icon", href: "/icon.png" },
      {
        rel: "stylesheet",
        href:
          "https://fonts.googleapis.com/css?family=Montserrat|IBM+Plex+Sans+Condensed"
      }
    ]
  },

  /*
  ** Customize the progress-bar color
  */
  loading: { color: "#e13566" },

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
    name: "HackathonUSP 2018",
    lang: "pt-br",
    mobileAppIOS: true,
    ogHost: "https://hackathonusp.netlify.com/"
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

      // Run ESLint on save
      if (ctx.isDev && ctx.isClient) {
        config.module.rules.push({
          enforce: "pre",
          test: /\.(js|vue)$/,
          loader: "eslint-loader",
          exclude: /(node_modules)(static)/
        });
      }
    }
  },

  sassResources: [
    "@/assets/custom.scss",
    "@/node_modules/bootstrap/scss/bootstrap.scss"
  ]
};
