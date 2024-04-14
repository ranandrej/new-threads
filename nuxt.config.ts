// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: false },
  modules: ["@nuxtjs/tailwindcss","@nuxtjs/supabase","@pinia/nuxt","nuxt-security"],
  supabase: {
    // Options
    redirect:false
    
  },
  security:{
    corsHandler: {
      origin: '*'
  }
}
})