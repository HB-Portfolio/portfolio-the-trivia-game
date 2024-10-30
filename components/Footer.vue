<template>
  <section class="mt-auto text-white">
    <Divider />
    <footer
      class="mx-auto flex max-w-7xl flex-col items-center gap-4 px-4 py-6"
    >
      <Logo :size="8" class="md:hover:scale-110 transition ease-in-out 150ms" />
      <span class="text-center text-sm text-muted">
        © {{ new Date().getFullYear() }} HB - All rights reserved.
      </span>
    </footer>
  </section>
</template>
