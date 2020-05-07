import { NuxtConfigurationHead } from "@nuxt/types/config/head"

const META = {
  name: "Marco Vockner",
  description:
    "Front-End Developer/Designer living in Austria who loves to create stuff for people to enjoy. | Typescript, Javascript, React, Vue.js",
  url: "https://marcovockner.dev",
  twitterHandle: "@marcovockner",
}
const head: NuxtConfigurationHead = {
  title: "Marco Vockner",
  htmlAttrs: {
    lang: "en",
  },
  meta: [
    { charset: "utf-8" },

    { name: "viewport", content: "width=device-width, initial-scale=1" },
    { name: "author", content: META.name },
    {
      hid: "description",
      name: "description",
      content: META.description,
    },
    { hid: "theme-color", name: "theme-color", content: "#1E2125" },

    // Open Graph (Facebook)
    { hid: "og:title", property: "og:title", content: META.name },
    { hid: "og:type", property: "og:type", content: "website" },
    { hid: "og:url", property: "og:url", content: META.url },
    { hid: "og:description", property: "og:description", content: META.description },

    // Twitter
    { hid: "twitter:card", name: "twitter:card", content: "summary" },
    { hid: "twitter:creator", name: "twitter:creator", content: META.twitterHandle },
    { hid: "twitter:site", name: "twitter:site", content: META.twitterHandle },
  ],
  link: [
    { rel: "icon", type: "image/x-icon", href: "/favicon.ico" },
    { rel: "preconnect", href: "https://api.github.com" },
    {
      rel: "stylesheet",
      href: "https://fonts.googleapis.com/css?family=Jost:400,600&display=swap",
    },
  ],
}

export default head
