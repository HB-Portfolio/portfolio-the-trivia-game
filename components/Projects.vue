<template>
  <section>
    <h1 class="flex flex-col text-center mt-16 text-5xl font-mono text-white">
      Games
    </h1>
    <div
      class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12 my-12 px-4 md:px-12"
    >
      <div
        v-for="(game, index) in games"
        :key="index"
        class="relative group rounded-lg border-4 border-emerald-500 bg-emerald-500 w-96 max-w-full aspect-square mx-auto inset-(-4px) md:hover:scale-105 transition-all duration-300 ease-in-out"
      >
        <img
          :src="game.image"
          :alt="game.title"
          class="w-full h-full object-cover transition-transform duration-300 ease-in-out transform group-hover:blur-sm"
        />

        <div
          class="absolute inset-0 bg-black bg-opacity-50 opacity-0 transition-opacity duration-300 ease-in-out group-hover:opacity-100 flex items-center justify-center"
        >
          <div class="text-center space-y-8">
            <h3 class="text-2xl text-white px-4">{{ game.title }}</h3>
            <div class="space-x-4">
              <a
                :href="game.github"
                target="_blank"
                class="px-4 py-2 bg-zinc-800 text-white/75 font-medium rounded-md transition-all duration-300 ease-in-out transform md:hover:bg-emerald-500 md:hover:text-white"
                >GitHub</a
              >
              <a
                v-if="game.gameURL"
                :href="game.gameURL"
                target="_blank"
                class="px-4 py-2 bg-zinc-800 text-white/75 font-medium rounded-md transition-all duration-300 ease-in-out transform md:hover:bg-emerald-500 md:hover:text-white"
                >Play</a
              >
              <NuxtLink
                v-if="game.gameURLNoRedirect"
                :to="game.gameURLNoRedirect"
                class="px-4 py-2 bg-zinc-800 text-white/75 font-medium rounded-md transition-all duration-300 ease-in-out transform md:hover:bg-emerald-500 md:hover:text-white"
                >Play</NuxtLink
              >
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>

  <section>
    <h1 class="flex flex-col text-center mt-16 text-5xl font-mono text-white">
      Development
    </h1>
    <div
      class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 my-12 px-4 md:px-12 gap-12 lg:gap-0"
    >
      <div
        v-for="(project, index) in projects"
        :key="index"
        class="relative group rounded-lg border-4 border-emerald-500 bg-emerald-500 w-96 max-w-full aspect-square mx-auto inset-(-4px) md:hover:scale-105 transition-all duration-300 ease-in-out"
      >
        <img
          :src="project.image"
          :alt="project.title"
          class="w-full h-full object-cover transition-transform duration-300 ease-in-out transform group-hover:blur-sm"
        />

        <div
          class="absolute inset-0 bg-black bg-opacity-50 opacity-0 transition-opacity duration-300 ease-in-out group-hover:opacity-100 flex items-center justify-center"
        >
          <div class="text-center space-y-8">
            <h3 class="text-2xl text-white px-4">{{ project.title }}</h3>
            <div class="space-x-4">
              <a
                :href="project.github"
                target="_blank"
                class="px-4 py-2 bg-zinc-800 text-white/75 font-medium rounded-md transition-all duration-300 ease-in-out transform md:hover:bg-emerald-500 md:hover:text-white"
                >GitHub</a
              >
              <a
                :href="project.projectURL"
                target="_blank"
                class="px-4 py-2 bg-zinc-800 text-white/75 font-medium rounded-md transition-all duration-300 ease-in-out transform md:hover:bg-emerald-500 md:hover:text-white"
                >Website</a
              >
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>

  <section>
    <h1 class="flex flex-col text-center mt-16 text-5xl font-mono text-white">
      Websites
    </h1>
    <div
      class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-12 my-12 px-4 md:px-12 lg:gap-0"
    >
      <div
        v-for="(website, index) in websites"
        :key="index"
        class="relative group rounded-lg border-4 border-emerald-500 bg-emerald-500 w-96 max-w-full aspect-square mx-auto inset-(-4px) md:hover:scale-105 transition-all duration-300 ease-in-out"
      >
        <img
          :src="website.image"
          :alt="website.title"
          class="w-full h-full object-cover transition-transform duration-300 ease-in-out transform group-hover:blur-sm"
        />

        <div
          class="absolute inset-0 bg-black bg-opacity-50 opacity-0 transition-opacity duration-300 ease-in-out group-hover:opacity-100 flex items-center justify-center"
        >
          <div class="text-center space-y-8">
            <h3 class="text-2xl text-white px-4">{{ website.title }}</h3>
            <div class="space-x-4">
              <a
                v-if="website.github"
                :href="website.github"
                target="_blank"
                class="px-4 py-2 bg-zinc-800 text-white/75 font-medium rounded-md transition-all duration-300 ease-in-out transform md:hover:bg-emerald-500 md:hover:text-white"
                >GitHub</a
              >
              <a
                :href="website.websiteURL"
                target="_blank"
                class="px-4 py-2 bg-zinc-800 text-white/75 font-medium rounded-md transition-all duration-300 ease-in-out transform md:hover:bg-emerald-500 md:hover:text-white"
                >Website</a
              >
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>

  <section>
    <h1 class="flex flex-col text-center mt-16 text-5xl font-mono text-white">
      University Projects
    </h1>
    <div class="grid grid-cols-1 gap-12 my-12 px-4 md:px-12">
      <div
        v-for="(uniProject, index) in uniProjects"
        :key="index"
        class="relative group rounded-lg border-4 border-emerald-500 bg-emerald-500 w-96 max-w-full aspect-square mx-auto inset-(-4px) md:hover:scale-105 transition-all duration-300 ease-in-out"
      >
        <img
          :src="uniProject.image"
          :alt="uniProject.title"
          class="w-full h-full object-cover transition-transform duration-300 ease-in-out transform group-hover:blur-sm"
        />

        <div
          class="absolute inset-0 bg-black bg-opacity-50 opacity-0 transition-opacity duration-300 ease-in-out group-hover:opacity-100 flex items-center justify-center"
        >
          <div class="text-center space-y-8">
            <h3 class="text-2xl text-white px-4">{{ uniProject.title }}</h3>
            <div class="space-x-4">
              <a
                :href="uniProject.github"
                target="_blank"
                class="px-4 py-2 bg-zinc-800 text-white/75 font-medium rounded-md transition-all duration-300 ease-in-out transform md:hover:bg-emerald-500 md:hover:text-white"
                >GitHub</a
              >
              <a
                :href="uniProject.uniProjectURL"
                target="_blank"
                class="px-4 py-2 bg-zinc-800 text-white/75 font-medium rounded-md transition-all duration-300 ease-in-out transform md:hover:bg-emerald-500 md:hover:text-white"
                >Website</a
              >
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
const games = [
  {
    title: "The Trivia Game",
    image: "/images/the-trivia-game.jpg",
    github: "https://github.com/HB-Portfolio/portfolio-trivia-game",
    gameURLNoRedirect: "/the-trivia-game",
  },
  {
    title: "Asteroid Field Python Game",
    image: "/images/project-4.png",
    github: "https://github.com/HB-Portfolio/portfolio-asteroid-field",
    gameURL: "https://codeinplace.stanford.edu/cip4/share/kUXS1Wp8Wc4IMICnSgR1",
  },
  {
    title: "Block Stacking JavaScript Game",
    image: "/images/project-5.png",
    github: "https://github.com/HB-Portfolio/portfolio-block-stacking-game",
    gameURL: "https://hb-portfolio.github.io/portfolio-block-stacking-game/",
  },
];

const projects = [
  {
    title: "SafeCSS",
    image: "/images/project-1.png",
    github: "https://github.com/HB-Portfolio/portfolio-safe-css",
    projectURL: "https://safecss.com",
  },
  {
    title: "Quick Snyk",
    image: "/images/project-2.png",
    github: "https://github.com/HB-Portfolio/portfolio-quick-snyk-app",
    projectURL: "https://quick-snyk.onrender.com",
  },
];

const websites = [
  {
    title: "Inglewood Interactive Map Website",
    image: "/images/project-3.png",
    github: "https://github.com/HB-Portfolio/portfolio-interactive-map-website",
    websiteURL: "https://interactive-map-website.vercel.app",
  },
  {
    title: "Cyntech Tanks Rebuild",
    image: "/images/cyntech-tanks.png",
    websiteURL: "https://www.cyntechtanks.com",
  },
];

const uniProjects = [
  {
    title: "Find The Center Karel Project",
    image: "/images/project-6.png",
    github: "https://github.com/HB-Portfolio/portfolio-karel-center-finder",
    websiteURL:
      "https://codeinplace.stanford.edu/cip4/share/4AdpjabHDMmMKVeGyPxE",
  },
];
</script>

<style>
.group:hover .group-hover\\:opacity-100 {
  opacity: 1;
}

.group:hover .group-hover\\:blur-sm {
  filter: blur(4px);
}

.group-hover\\:scale-105:hover {
  transform: scale(1.05);
}
</style>
