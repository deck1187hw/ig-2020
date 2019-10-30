const getAppRoutes = require("./utils/getRoutes.js");
const getSitemapRoutesMa = require("./utils/getSiteMapMa.js");

export default {
  mode: "universal",
  /*
   ** Headers of the page
   */
  head: {
    title: process.env.npm_package_name || "",
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      {
        hid: "description",
        name: "description",
        content: process.env.npm_package_description || ""
      }
    ],
    link: [
      { rel: "icon", type: "image/x-icon", href: "/favicon.ico" },
      {
        rel: "stylesheet",
        type: "text/css",
        href:
          "https://stackpath.bootstrapcdn.com/bootstrap/4.2.1/css/bootstrap.min.css"
      }
    ]
  },
  /*
   ** Customize the progress-bar color
   */
  loading: { color: "#fff" },
  /*
   ** Global CSS
   */
  css: [],
  /*
   ** Plugins to load before mounting the App
   */
  plugins: [],
  /*
   ** Nuxt.js dev-modules
   */
  buildModules: [],
  /*
   ** Nuxt.js modules
   */
  modules: [
    // Doc: https://axios.nuxtjs.org/usage
    "@nuxtjs/axios",
    "@nuxtjs/sitemap"
  ],
  /*
   ** Axios module configuration
   ** See https://axios.nuxtjs.org/options
   */
  axios: {},
  /*
   ** Build configuration
   */
  build: {
    /*
     ** You can extend webpack config here
     */
    extend(config, ctx) {}
  },
  generate: {
    routes: async function() {
      return getAppRoutes();
    }
  },
  sitemap: [
    {
      path: "/sitemap-ma.xml",
      routes: async function() {
        return getSitemapRoutesMa();
      }
    },
    {
      path: "/sitemap-news.xml",
      routes: [
        '/page/1',
        '/page/2',
        {
          url: '/page/3',
          changefreq: 'daily',
          priority: 1,
          lastmod: '2019-10-30T13:30:00.000Z'
        }
      ]
    }
  ]
};
