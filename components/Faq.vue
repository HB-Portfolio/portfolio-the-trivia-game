<template>
  <div
    class="flex flex-col items-center justify-center space-y-8 mt-8 px-4 mb-12"
  >
    <div class="flex flex-col items-center justify-center gap-2">
      <h3 class="text-white text-4xl">FAQ</h3>
    </div>

    <div class="relative space-y-2 w-full max-w-lg">
      <div
        role="tablist"
        aria-orientation="horizontal"
        class="relative gap-4 bg-transparent rounded-full p-1 w-full h-10 inline-grid items-center mb-4"
        style="grid-template-columns: repeat(3, minmax(0px, 1fr))"
      >
        <button
          v-for="(tab, index) in tabs"
          :key="index"
          @click="selectTab(index)"
          :class="[
            'relative inline-flex items-center justify-center flex-shrink-0 w-full bg-zinc-800 focus:outline-none transition-colors duration-200 ease-out border-white/10 border-2 md:hover:bg-zinc-900/80 md:hover:text-emerald-500 px-3 py-2 font-medium rounded-full',
            selectedTab === index ? 'text-emerald-500' : 'text-white/75',
          ]"
        >
          {{ tab.title }}
        </button>
      </div>

      <div class="relative w-full mt-8">
        <transition name="fade" mode="out-in">
          <div
            :key="selectedTab"
            class="select-none space-y-5 transition-opacity duration-300 ease-in-out opacity-100"
          >
            <div
              v-for="(faq, faqIndex) in tabs[selectedTab].faqs"
              :key="faqIndex"
              class="group transform-gpu rounded-xl border border-white/10 bg-white/5 transition duration-300 will-change-transform md:hover:bg-white/[0.075] md:hover:text-emerald-500"
            >
              <div
                class="flex cursor-pointer items-center p-4"
                @click="toggleFaq(selectedTab, faqIndex)"
              >
                <div :class="faq.isOpen ? 'text-emerald-500' : 'text-white/75'">
                  {{ faq.question }}
                </div>
                <div class="relative ml-auto">
                  <svg
                    :class="faq.isOpen ? 'rotate-45' : 'rotate-0'"
                    class="transform transition-transform duration-300 w-6 h-6 text-white/75"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M12 4v16m8-8H4"
                    />
                  </svg>
                </div>
              </div>
              <transition
                name="accordion"
                @before-enter="beforeEnter"
                @enter="enter"
                @leave="leave"
              >
                <div
                  v-show="faq.isOpen"
                  class="transform-gpu overflow-hidden px-4 transition-all duration-300 will-change-[height]"
                >
                  <p
                    class="pb-4 font-extralight leading-relaxed tracking-wide text-white/75"
                  >
                    {{ faq.answer }}
                  </p>
                </div>
              </transition>
            </div>
          </div>
        </transition>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";

const tabs = ref([
  {
    title: "Services",
    faqs: [
      {
        question: "What services do you offer?",
        answer:
          "I specialize in web development, with a focus on creating dynamic and visually appealing websites using technologies like Vue and Nuxt.js.",
        isOpen: false,
      },
      {
        question: "Do you offer any additional services?",
        answer:
          "Yes, I can also help with frontend development, API integration, and deployment strategies to ensure your website runs smoothly.",
        isOpen: false,
      },
    ],
  },
  {
    title: "Pricing",
    faqs: [
      {
        question: "How much does a project cost?",
        answer:
          "My web development services start at $3000 CAD, with the final price ranging between $3000 and $10000 CAD depending on the project's complexity.",
        isOpen: false,
      },
      {
        question: "What payment methods do you accept?",
        answer:
          "I accept payments via bank transfer, PayPal, and other secure online payment methods.",
        isOpen: false,
      },
    ],
  },
  {
    title: "Personal",
    faqs: [
      {
        question: "What do you enjoy most about your work?",
        answer:
          "I love the blend of technical challenge and creative problem-solving that comes with web development. Seeing my clients happy with their final product is the best reward.",
        isOpen: false,
      },
      {
        question: "What are your hobbies?",
        answer:
          "Outside of work, I enjoy playing video games, traveling, and exploring new restaurants.",
        isOpen: false,
      },
    ],
  },
]);

const selectedTab = ref(0);

const toggleFaq = (tabIndex, faqIndex) => {
  tabs.value[tabIndex].faqs.forEach((faq, index) => {
    if (index !== faqIndex) {
      faq.isOpen = false;
    }
  });
  tabs.value[tabIndex].faqs[faqIndex].isOpen =
    !tabs.value[tabIndex].faqs[faqIndex].isOpen;
};

const selectTab = (index) => {
  selectedTab.value = index;
  tabs.value.forEach((tab) => tab.faqs.forEach((faq) => (faq.isOpen = false)));
};

const beforeEnter = (el) => {
  el.style.height = "0";
};

const enter = (el) => {
  el.style.height = el.scrollHeight + "px";
};

const leave = (el) => {
  el.style.height = el.scrollHeight + "px";
  requestAnimationFrame(() => {
    el.style.height = "0";
  });
};
</script>
