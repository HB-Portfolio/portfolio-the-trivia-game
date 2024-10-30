<template>
  <div class="flex flex-col mt-12">
    <ContactInfo />
    <ContactForm />
    <Divider />
    <div
      class="flex w-full flex-col gap-4 my-8 text-center align-middle justify-center mx-auto"
    >
      <div class="flex flex-col items-center">
        <dd class="flex items-center gap-3 text-gray-400">
          <UIcon
            name="heroicons-envelope"
            class="size-6 text-emerald-500"
            aria-hidden="true"
          />
          <span
            @click="copyEmail"
            :class="
              emailCopied
                ? 'bg-emerald-500 text-white transition-all duration-300'
                : 'cursor-pointer transition-colors duration-300 hover:text-emerald-500'
            "
            class="px-2 py-1 rounded"
          >
            {{ emailCopied ? "Email copied!" : email }}
          </span>
        </dd>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";

const email = "hendrich.buhrer@gmail.com";
const emailCopied = ref(false);

const copyEmail = async () => {
  try {
    await navigator.clipboard.writeText(email);
    emailCopied.value = true;
    setTimeout(() => {
      emailCopied.value = false;
    }, 2000);
  } catch (err) {
    console.error("Failed to copy email: ", err);
  }
};
</script>
