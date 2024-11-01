import { defineNuxtPlugin } from '#app'
import Particles from '@tsparticles/vue3'
import { loadFull } from "tsparticles";

export default defineNuxtPlugin(nuxtApp => {
  if (typeof window !== 'undefined') {
    nuxtApp.vueApp.use(Particles, {
      init: async engine => {
        await loadFull(engine);
      },
    });
  }
});
