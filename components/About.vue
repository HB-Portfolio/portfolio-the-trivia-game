<template>
  <section
    class="flex flex-col items-center justify-center space-y-12 mt-16 px-8 mb-12"
  >
    <div class="text-center">
      <h2 class="font-mono text-white text-5xl">About Me</h2>
    </div>

    <div
      class="flex flex-col md:flex-row items-center space-y-8 md:space-y-0 md:space-x-12 w-full max-w-4xl"
    >
      <div class="flex-shrink-0">
        <img
          src="/public/images/profile.jpeg"
          alt="Hendrich Buhrer"
          class="rounded-lg w-96 h-96 object-cover border-4 border-emerald-500"
        />
      </div>
      <div class="text-white text-lg leading-relaxed">
        <h3 class="font-semibold text-2xl mb-4">Intro</h3>
        <p>
          I'm HB, a passionate web developer with a strong foundation in IT and
          software development. I thrive on creating bespoke web experiences
          that not only meet but exceed client expectations.
        </p>
        <p class="mt-4">
          When I'm not working, I'm constantly learning and experimenting,
          working on personal projects, and diving into new technologies. I
          believe in the continuous evolution of skills and staying ahead in the
          ever-changing tech landscape.
        </p>
      </div>
    </div>

    <div class="w-full max-w-5xl">
      <h3 class="text-2xl font-semibold text-white mb-6">Experiences</h3>
      <div class="grid grid-cols-1 gap-8">
        <div
          v-for="(experience, index) in experiences"
          :key="index"
          class="flex flex-col space-y-2 p-4 border border-white/10 rounded-lg bg-zinc-800 bg-white/5 hover:bg-white/10 transition duration-300 cursor-pointer"
          @click="toggleExperience(index)"
        >
          <div class="flex items-center justify-between">
            <div>
              <h4 class="text-lg font-medium text-white">
                {{ experience.title }}
              </h4>
              <p class="text-emerald-500">{{ experience.company }}</p>
              <p class="text-gray-400">{{ experience.dates }}</p>
            </div>
            <svg
              :class="experience.isOpen ? 'rotate-45' : 'rotate-0'"
              class="transform transition-transform duration-500 min-w-6 h-6 text-white ml-auto"
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
          <transition
            name="accordion"
            @before-enter="beforeEnter"
            @enter="enter"
            @leave="leave"
          >
            <ul
              v-show="experience.isOpen"
              class="list-disc list-inside text-white/75 space-y-2 transform-gpu overflow-hidden transition-all duration-500 will-change-[height]"
            >
              <li
                v-for="(point, pIndex) in experience.description"
                :key="pIndex"
              >
                {{ point }}
              </li>
            </ul>
          </transition>
        </div>
      </div>
    </div>

    <div class="w-full max-w-5xl mt-8">
      <h3 class="text-2xl font-semibold text-white mb-6">Education</h3>
      <div class="grid grid-cols-1 gap-8">
        <div
          class="flex flex-col space-y-2 p-4 border border-white/10 rounded-lg bg-zinc-800 bg-white/5 hover:bg-white/10 transition duration-300"
        >
          <h4 class="text-lg font-medium text-white">
            Bachelor of Science in Engineering (BSc in Eng), Software
            Engineering
          </h4>
          <p class="text-gray-400">University of Calgary, Jul 2028</p>
        </div>
        <div
          class="flex flex-col space-y-2 p-4 border border-white/10 rounded-lg bg-zinc-800 bg-white/5 hover:bg-white/10 transition duration-300"
        >
          <h4 class="text-lg font-medium text-white">
            Bachelor of Communication and Media Studies (BCMS), Communication
            and Media Studies
          </h4>
          <p class="text-gray-400">University of Calgary, Jul 2027</p>
        </div>
        <div
          class="flex flex-col space-y-2 p-4 border border-white/10 rounded-lg bg-zinc-800 bg-white/5 hover:bg-white/10 transition duration-300"
        >
          <h4 class="text-lg font-medium text-white">
            Code In Place – Python Certification
          </h4>
          <p class="text-gray-400">Stanford University, Jul 2024</p>
        </div>
        <div
          class="flex flex-col space-y-2 p-4 border border-white/10 rounded-lg bg-zinc-800 bg-white/5 hover:bg-white/10 transition duration-300"
        >
          <h4 class="text-lg font-medium text-white">
            Diploma of New Media Production and Design
          </h4>
          <p class="text-gray-400">
            Southern Alberta Institute of Technology, Dec 2024
          </p>
        </div>
        <div
          class="flex flex-col space-y-2 p-4 border border-white/10 rounded-lg bg-zinc-800 bg-white/5 hover:bg-white/10 transition duration-300"
        >
          <h4 class="text-lg font-medium text-white">
            Web Developer Certificate
          </h4>
          <p class="text-gray-400">
            Southern Alberta Institute of Technology, Apr 2024
          </p>
        </div>
        <div
          class="flex flex-col space-y-2 p-4 border border-white/10 rounded-lg bg-zinc-800 bg-white/5 hover:bg-white/10 transition duration-300"
        >
          <h4 class="text-lg font-medium text-white">
            CompTIA A+ Certification & CompTIA Network+ Certification
          </h4>
          <p class="text-gray-400">Bow Valley College, Dec 2012</p>
        </div>
      </div>
    </div>
    <div
      class="w-full max-w-5xl mt-8 text-center justify-center align-middle items-center object-center"
    >
      <h3 class="text-2xl font-semibold text-white mb-6 text-start">
        Tech Stack
      </h3>
      <div class="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6">
        <div
          v-for="(tech, index) in techStack"
          :key="index"
          class="flex flex-col space-y-2 p-4 border border-white/10 rounded-lg text-center justify-center align-middle items-center object-center bg-zinc-800 bg-white/5 hover:bg-white/10 transition duration-300"
        >
          <img
            :src="`/images/${tech.image}`"
            :alt="tech.name"
            class="w-16 h-16 object-contain"
          />
          <p class="text-white">{{ tech.name }}</p>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref } from "vue";

const experiences = ref([
  {
    title: "Full Stack Developer",
    company: "Cyntech Group - Calgary, AB",
    dates: "Aug 2024 - Present",
    description: [
      "Rebuilding Cyntech websites (Tanks, Fasteners, Anchors, Motion Steel) using Nuxt 3 and Tailwind CSS",
      "Created a landing page to consolidate access across all sites.",
      "Revamping styling for a modern, responsive design while preserving content.",
      "Integrating APIs for dynamic content.",
    ],
    isOpen: false,
  },
  {
    title: "Junior Software Developer",
    company: "SafeCSS - New York, NY",
    dates: "Jan 2024 - Present",
    description: [
      "Leveraging Tailwind CSS to develop SafeCSS, a secure and customizable CSS framework.",
      "Utilizing Node.js and TypeScript for backend services and high-volume data processing.",
      "Developing VUE3/NUXT3 components and maintaining technical documentation.",
      "Integrating APIs and automating testing with Jest and Cypress.",
    ],
    isOpen: false,
  },
  {
    title: "Information Technology Support Team Lead",
    company: "Alpaca - San Mateo, CA",
    dates: "Mar 2020 - May 2023",
    description: [
      "Managed IT support ticket queue and provided escalated support for complex issues.",
      "Collaborated with HR on onboarding/offboarding and created new hire accounts remotely.",
      "Engineered long-term solutions to reduce incoming tickets and improve processes.",
      "Trained and onboarded remote support analysts, building a responsive remote support team.",
    ],
    isOpen: false,
  },
  {
    title: "Senior Information Technology Support Analyst",
    company: "Barneys New York - Los Angeles, CA",
    dates: "Dec 2016 - Sep 2019",
    description: [
      "Provided IT support for Windows 10, Microsoft Office Suite, and VPN connections.",
      "Handled data entry and ticket management using ServiceNow.",
      "Used SCCM for system configuration and software deployment.",
      "Managed IT hardware and asset inventory.",
    ],
    isOpen: false,
  },
  {
    title: "Information Technology Support Analyst",
    company: "American Apparel - Los Angeles, CA",
    dates: "May 2015 - Nov 2016",
    description: [
      "Troubleshooted technical issues reported via phone, email, remote systems, and in person, logging calls into the Service Desk system and assigning priority levels.",
      "Addressed issues in the ticketing system and escalated to third-level support when necessary.",
      "Supported both Windows and Mac platforms, ensuring smooth operation across various systems.",
      "Installed, updated, maintained, troubleshooted, and repaired PCs, laptops, software, printers, in-store equipment, and RFID scanners.",
      "Managed user accounts in Active Directory and mailboxes in Office365, including creation and deactivation.",
      "Collaborated with fellow Senior Support Analysts to manage the day-to-day performance and operations, taking responsibility for every ticket in the queues.",
      "Analyzed trends to provide root cause resolutions for chronic issues.",
    ],
    isOpen: false,
  },
]);

const techStack = ref([
  { name: "HTML", image: "html.svg" },
  { name: "CSS", image: "css.svg" },
  { name: "Photoshop", image: "photoshop.svg" },
  { name: "Illustrator", image: "illustrator.svg" },
  { name: "Github", image: "github-white.svg" },
  { name: "Vercel", image: "vercel.svg" },
  { name: "JavaScript", image: "js.svg" },
  { name: "Vue.js", image: "vue.svg" },
  { name: "Nuxt.js", image: "nuxt.svg" },
  { name: "Tailwind CSS", image: "tailwind.svg" },
  { name: "Node.js", image: "node.svg" },
  { name: "Figma", image: "figma.svg" },
  { name: "Python", image: "python.svg" },
  { name: "PHP", image: "php.svg" },
]);

const toggleExperience = (index) => {
  experiences.value.forEach((exp, i) => {
    if (i !== index) exp.isOpen = false;
  });
  experiences.value[index].isOpen = !experiences.value[index].isOpen;
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
