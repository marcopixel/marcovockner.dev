import { NuxtConfigurationHead } from "@nuxt/types/config/head"

const head: NuxtConfigurationHead = {
  title: process.env.npm_package_name || "",
  htmlAttrs: {
    lang: "en",
  },
  meta: [
    { charset: "utf-8" },
    { name: "viewport", content: "width=device-width, initial-scale=1" },
    {
      hid: "description",
      name: "description",
      content: process.env.npm_package_description || "",
    },
  ],
  link: [
    { rel: "icon", type: "image/x-icon", href: "/favicon.ico" },
    {
      rel: "stylesheet",
      href: "https://fonts.googleapis.com/css2?family=IBM+Plex+Sans&display=swap",
    },
  ],
}

export default head
