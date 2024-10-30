<template>
  <button
    class="group relative inline-flex items-center overflow-hidden transition transform rounded border border-white/10 mt-12 mx-12 xxm:scale-[85%] xm:scale-90"
  >
    <div
      class="absolute inset-0.5 bg-zinc-900 bg-zinc-900/80 backdrop-blur-md rounded"
    ></div>
    <div
      class="absolute bottom-0 left-1/2 h-1/3 w-4/5 -translate-x-1/2 bg-white/10 opacity-50 blur-md transition-all duration-500 md:group-hover:h-2/3 md:group-hover:opacity-100 rounded"
    ></div>
    <nav
      class="z-10 flex h-[50px] justify-around gap-6 md:hover:gap-12 p-1 transition-all duration-300 ease-in-out"
    >
      <NuxtLink to="/" class="nav-link" aria-label="Home navigation link">
        <Icon icon="lucide:home" class="icon" />
      </NuxtLink>
      <NuxtLink
        to="/projects"
        class="nav-link"
        aria-label="Projects navigation link"
      >
        <Icon icon="lucide:briefcase" class="icon" />
      </NuxtLink>
      <NuxtLink
        to="#"
        class="flex items-center justify-center rounded border border-transparent px-4 py-1 transition-all duration-300 ease-in-out"
        aria-label="Home logo navigation link"
      >
        <img :src="`/images/logo.png`" :class="`fixed w-auto h-8`" alt="Logo" />
      </NuxtLink>
      <NuxtLink to="/about" class="nav-link" aria-label="About navigation link">
        <Icon icon="lucide:user" class="icon" />
      </NuxtLink>
      <NuxtLink
        to="/contact"
        class="nav-link"
        aria-label="Contact navigation link"
      >
        <Icon icon="lucide:mail" class="icon" />
      </NuxtLink>
    </nav>
  </button>
</template>

<script setup>
import { Icon } from "@iconify/vue";
</script>

<style scoped>
.nav-link {
  @apply text-gray-500 flex items-center justify-center rounded border border-transparent px-4 py-1 transition-all duration-300 ease-in-out md:hover:border-white/5 md:hover:bg-zinc-900/50 md:hover:text-emerald-500 md:hover:backdrop-blur-3xl;
}

.nav-link.router-link-exact-active {
  @apply border border-white/5 bg-zinc-900/10 text-emerald-500 shadow-2xl shadow-white/50 backdrop-blur-3xl;
}

.icon {
  @apply size-7 font-light;
}
</style>
