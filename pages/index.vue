<template>
  <div>
    <ProfilePic />
    <section class="flex flex-col max-w-[800px] text-center mt-6 px-8 py-8">
      <h1
        class="mx-auto text-pretty bg-gradient-to-b from-white/90 to-white/30 bg-clip-text text-center text-3xl leading-tight text-transparent lg:max-w-3xl lg:text-4xl"
      >
        Why look elsewhere when you can have the best of both worlds?
      </h1>
      <p
        class="mx-auto mt-4 max-w-xl text-center text-lg antialiased text-white/60"
      >
        As a developer with a knack for aesthetic appeal and efficiency, I blend
        technical expertise with a passion for captivating design. Whether it's
        developing robust web applications or creating visually stunning
        projects, I bring a unique dimension to every task. My commitment to
        beauty and functionality ensures that every project not only looks great
        but also performs flawlessly. Let's create something extraordinary
        together.
      </p>
    </section>
    <section class="flex items-center justify-center gap-6 mb-12 mt-4">
      <a
        href="https://github.com/hbuhrer"
        target="_blank"
        class="flex items-center justify-center"
        aria-label="Go to GitHub profile"
      >
        <img
          src="/images/github.svg"
          class="size-10 md:hover:scale-110 transition-all duration-300"
          alt="GitHub logo"
          aria-label="GitHub logo"
        />
      </a>
      <a
        href="https://www.linkedin.com/in/hendrich-buhrer/"
        target="_blank"
        class="flex items-center justify-center"
        aria-label="Go to LinkedIn profile"
      >
        <img
          src="/images/linkedin.svg"
          class="size-10 md:hover:scale-110 transition-all duration-300"
          alt="LinkedIn logo"
          aria-label="LinkedIn logo"
        />
      </a>
    </section>
    <section class="flex items-center justify-center mb-12">
      <NuxtLink
        to="/contact"
        class="group relative inline-flex items-center overflow-hidden transition rounded-md px-12 py-2 bg-zinc-800"
      >
        <div
          class="absolute inset-0 flex items-center [container-type:inline-size]"
        >
          <div
            class="absolute w-[100cqw] h-[100cqw] animate-spin bg-[conic-gradient(from_0_at_50%_50%,rgba(255,255,255,0.5)_0deg,transparent_60deg,transparent_300deg,rgba(255,255,255,0.5)_360deg)] opacity-0 transition duration-300 group-hover:opacity-100"
          />
        </div>

        <div
          class="absolute inset-0.5 bg-zinc-900 sm:bg-zinc-900/80 sm:backdrop-blur-md rounded-md"
        ></div>

        <div
          class="absolute bottom-0 left-1/2 h-1/3 w-4/5 -translate-x-1/2 bg-white/10 opacity-50 blur-md transition-all duration-500 group-hover:h-2/3 group-hover:opacity-100 rounded-md"
        ></div>

        <span class="relative z-10 text-white text-lg">Contact Me</span>
      </NuxtLink>
    </section>
    <Divider />
    <Faq />
  </div>
</template>

<style scoped>
@keyframes spin {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}

.animate-spin {
  animation: spin 2s linear infinite;
}
</style>
