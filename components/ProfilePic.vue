<template>
  <div class="z-10 flex items-center justify-center mt-12">
    <button
      class="group relative inline-flex items-center overflow-hidden transition rounded-full bg-zinc-800"
    >
      <div
        class="absolute inset-0 flex items-center [container-type:inline-size]"
      >
        <div
          class="absolute size-[100cqw] animate-spin bg-[conic-gradient(from_0_at_50%_50%,rgba(16,185,129,1)_0deg,rgba(16,185,129,1)_90deg,transparent_90deg,transparent_270deg,rgba(16,185,129,1)_270deg,rgba(16,185,129,1)_360deg)] opacity-0 transition duration-300 group-hover:opacity-100"
        ></div>
      </div>
      <div
        class="absolute inset-0.5 bg-zinc-900 backdrop-blur-md rounded-full"
      ></div>
      <div
        class="absolute bottom-0 left-1/2 h-1/3 w-4/5 -translate-x-1/2 bg-white/10 opacity-50 blur-md transition-all duration-500 group-hover:h-2/3 group-hover:opacity-100 rounded-full"
      ></div>
      <div
        class="relative flex items-center justify-center gap-2 bg-gradient-to-b from-white/25 to-white bg-clip-text text-lg font-medium text-transparent transition-all duration-200"
      >
        <img
          width="150"
          src="/images/profile.jpeg"
          class="size-48 rounded-full border-4 border-gray-800/30 object-cover"
          alt="Profile Picture"
          aria-label="Profile Picture"
        />
      </div>
    </button>
  </div>
</template>
