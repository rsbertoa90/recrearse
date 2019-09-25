
export default {
  mode: "universal",
  /*
   ** Headers of the page
   */
  server: {
    port: 3006 // default: 3000
    /* host: '0.0.0.0', */ // default: localhost
  },

  manifest: {
    name: "Recrearse",
    lang: "es",
    theme_color: "#3A2BB3"
  },

  workbox: {
   /*  config: {
      debug: true
    }, */
    offlinePage: "/offline.html",
    offlineAssets: ["/offline.html", "/favicon.ico"]
  },

  head: {
    title: "Recrearse talleres bioneuro",
    htmlAttrs: {
      lang: "es"
    },
    meta: [
      {
        name: "google-site-verification",
        content: "k8Gh3Pho_qE5xYo_S078mJoy4n1KjIIHzb42i3783YI"
      },
      {
        name: "theme-color",
        content: "#3A2BB3"
      },
      {
        property: "og:image",
        content: "@/static/images/logo.png"
      },
      { property: "og:title", content: "Recrearse talleres bioneuro" },

      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      {
        hid: "description",
        name: "description",
        content: "Recrearse talleres bioneuro"
      }
    ],
    link: [
      {
        rel: "preconnect",
        href: "https://use.fontawesome.com"
      },
      {
        rel: "preconnect",
        href: "https://fonts.googleapis.com"
      },

      { rel: "canonical", href: "https://recrearse.com" },
      { rel: "icon", type: "image/x-icon", href: "/favicon.ico" }
    ]
  },
  /*
   ** Customize the progress-bar color
   */
  loading: { color: "#fff" },
  /*
   ** Global CSS
   */
  css: [
    "@/assets/css/bootstrap.min.css",
    "@/assets/css/reset.css",
    "@/assets/css/animate.css"
  ],
  /*
   ** Plugins to load before mounting the App
   */
  plugins: [
    "./plugins/v-lazy-image.js",
    {
      src: "./plugins/ga.js",
      ssr: false
    }
  ],
  /*
   ** Nuxt.js dev-modules
   */
  devModules: [],
  /*
   ** Nuxt.js modules
   */
  modules: [
    [
      "nuxt-mq",
      {
        // Default breakpoint for SSR
        defaultBreakpoint: "default",
        breakpoints: {
          sm: 450,
          md: 1250,
          lg: Infinity
        }
      }
    ],
    "nuxt-webfontloader",
   
    "@nuxtjs/pwa"
  ],


  webfontloader: {
    google: {
      families: ["Rubik","Be Vietnam"] //Loads Lato font with weights 400 and 700
    },
    custom: {
      families: ["fontawesome"],
      urls: ["https://use.fontawesome.com/releases/v5.8.2/css/all.css"]
    }
  },

  /*
   ** Build configuration
   */
  build: {
    /*
     ** You can extend webpack config here
     */
    extend(config, ctx) {}
  }
};
