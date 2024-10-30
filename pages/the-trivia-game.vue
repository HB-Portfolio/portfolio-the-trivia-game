<template>
  <div class="max-w-[800px] mx-auto py-8 px-8 text-white">
    <!-- Logo -->
    <img
      src="/images/trivia-logo.svg"
      alt="The Trivia Game"
      class="w-full object-contain mb-8 max-w-56 mx-auto md:max-w-80"
    />
    <!-- How to Play Section -->
    <section class="mb-8 max-w-72 md:max-w-full mx-auto text-white">
      <h2 class="text-2xl font-bold mb-4 text-emerald-500">How to Play</h2>
      <p>
        Welcome to the Trivia Game! Test your knowledge by answering
        multiple-choice questions. Sign up or log in to start playing and save
        your scores to the leaderboard.
      </p>
    </section>

    <!-- Authentication and Start Game Section -->
    <section
      class="flex mt-10 mb-14 mx-auto px-4 justify-center items-center max-w-72 md:max-w-full"
    >
      <div v-if="!user">
        <!-- Login/Signup Form -->
        <h2 class="text-2xl font-bold text-center mb-4">
          {{ isSignIn ? "Sign In" : "Sign Up" }}
        </h2>
        <form @submit.prevent="handleAuth" class="max-w-md mx-auto space-y-4">
          <div>
            <label class="block mb-1">Email</label>
            <input
              v-model="email"
              type="email"
              required
              class="w-full p-2 border rounded bg-[#1e1e1e]"
              placeholder="Enter your email"
            />
          </div>
          <div v-if="!isSignIn">
            <label class="block mb-1">Username</label>
            <input
              v-model="username"
              type="text"
              required
              class="w-full p-2 border rounded bg-[#1e1e1e]"
              placeholder="Choose a username"
            />
          </div>
          <div>
            <label class="block mb-1">Password</label>
            <input
              v-model="password"
              type="password"
              required
              class="w-full p-2 border rounded bg-[#1e1e1e]"
              placeholder="Enter your password"
            />
          </div>
          <div class="flex justify-between items-center gap-2">
            <button type="submit" class="btn">
              {{ isSignIn ? "Sign In" : "Sign Up" }}
            </button>
            <button
              type="button"
              class="text-emerald-500 hover:underline"
              @click="toggleAuthMode"
            >
              {{
                isSignIn
                  ? "Need an account? Sign Up"
                  : "Have an account? Sign In"
              }}
            </button>
          </div>
          <p v-if="errorMessage" class="text-red-500">{{ errorMessage }}</p>
        </form>
      </div>

      <div v-else>
        <p class="text-center mb-4">
          Welcome,
          <span class="text-emerald-500">{{ userProfile?.username }}</span>
        </p>

        <!-- Show category and difficulty only if the game hasn't started -->
        <div v-if="!gameStarted">
          <!-- Select Category -->
          <div class="mb-4 relative">
            <label class="block mb-2">Select Category:</label>
            <select
              v-model="selectedCategory"
              class="w-full p-2 border rounded text-white bg-[#1e1e1e]"
            >
              <option value="">Any</option>
              <option
                v-for="category in categories"
                :key="category.id"
                :value="category.id"
              >
                {{ category.name }}
              </option>
            </select>
            <div
              class="absolute inset-y-0 top-8 right-0 flex items-center px-2 pointer-events-none"
            >
              <svg
                class="w-4 h-4 text-white"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </div>
          </div>

          <!-- Select Difficulty -->
          <div class="mb-8 relative">
            <label class="block mb-2">Select Difficulty:</label>
            <select
              v-model="selectedDifficulty"
              class="w-full p-2 border rounded text-white bg-[#1e1e1e]"
            >
              <option value="easy">Easy</option>
              <option value="medium">Medium</option>
              <option value="hard">Hard</option>
            </select>
            <div
              class="absolute inset-y-0 top-8 right-0 flex items-center px-2 pointer-events-none"
            >
              <svg
                class="w-4 h-4 text-white"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </div>
          </div>
        </div>

        <!-- Game Control Buttons -->
        <div class="flex justify-center space-x-4">
          <button
            v-if="!gameStarted"
            @click="startGame"
            :disabled="gameActionInProgress"
            class="btn flex items-center justify-center"
          >
            <span v-if="!gameActionInProgress">Start Game</span>
            <span v-else class="flex items-center">
              <svg
                aria-hidden="true"
                class="w-4 h-4 mr-2 text-gray-200 animate-spin fill-emerald-950"
                viewBox="0 0 100 101"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                  fill="currentColor"
                />
                <path
                  d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                  fill="currentFill"
                />
              </svg>
              Loading...
            </span>
          </button>

          <button
            v-else-if="!gameOver"
            @click="endGame"
            :disabled="gameActionInProgress"
            class="btn"
          >
            End Game
          </button>
          <button @click="signOut" class="btn">Sign Out</button>
        </div>
      </div>
    </section>

    <!-- Game Section -->
    <section v-if="gameStarted || gameOver" class="mt-10">
      <!-- Game Logic -->
      <div v-if="gameStarted && !gameOver">
        <!-- Loading State -->
        <div v-if="!isQuestionLoaded && !apiError" class="text-center py-4">
          <div
            class="animate-spin rounded-full h-8 w-8 border-b-2 border-emerald-500 mx-auto mb-4"
          ></div>
          <p class="text-white">Loading question...</p>
        </div>

        <!-- Question Content -->
        <template v-else>
          <p class="text-lg mb-2 text-red-500">
            Time Left: {{ timeLeft }} seconds
          </p>
          <p
            class="text-xl font-semibold mb-4"
            v-if="question?.question"
            v-html="question.question"
          ></p>
          <div v-if="shuffledAnswers.length > 0">
            <button
              v-for="(answer, index) in shuffledAnswers"
              :key="index"
              @click="selectAnswer(answer)"
              class="btn mb-2 w-full text-left"
              :disabled="selectedAnswer !== null"
              v-html="answer"
            ></button>
          </div>
          <!-- Feedback Message -->
          <div class="feedback-container h-10 mt-2">
            <p
              v-if="feedbackMessage"
              :class="[
                'text-center text-xl font-bold',
                isAnswerCorrect ? 'text-green-500' : 'text-red-500',
              ]"
            >
              {{ feedbackMessage }}
            </p>
          </div>
        </template>
      </div>

      <!-- Game Over Section -->
      <div v-else-if="gameOver">
        <p class="text-center text-xl mb-2 text-red-500">Game Over!</p>
        <p class="text-center text-base mb-4">
          Click the Start Game button to try again.
        </p>
        <p class="text-center text-lg mb-4">Your Score: {{ score }}</p>
        <p class="text-center text-lg mb-4" v-if="user">
          Your Highest Score:
          <span class="text-emerald-500"> {{ userProfile?.score }}</span>
        </p>
      </div>
    </section>

    <!-- Leaderboard Section -->
    <section class="my-12">
      <h2 class="text-2xl font-bold mb-4 text-emerald-500">Leaderboard</h2>
      <table class="w-full text-left border-collapse mb-4">
        <thead>
          <tr>
            <th class="border px-4 py-2">Rank</th>
            <th class="border px-4 py-2">Username</th>
            <th class="border px-4 py-2">Score</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(entry, index) in leaderboard" :key="index">
            <td class="border px-4 py-2">
              {{ index + 1 + (currentPage - 1) * entriesPerPage }}
            </td>
            <td class="border px-4 py-2">{{ entry.username }}</td>
            <td class="border px-4 py-2">{{ entry.score }}</td>
          </tr>
        </tbody>
      </table>
      <!-- Pagination Controls -->
      <div
        v-if="totalPages > 1"
        class="flex justify-center mt-4 space-x-4 items-center"
      >
        <button @click="prevPage" :disabled="currentPage === 1" class="btn">
          <!-- Left Arrow -->
          <span>&larr;</span>
        </button>
        <span>Page {{ currentPage }} of {{ totalPages }}</span>
        <button
          @click="nextPage"
          :disabled="currentPage === totalPages"
          class="btn"
        >
          <!-- Right Arrow -->
          <span>&rarr;</span>
        </button>
      </div>
    </section>

    <!-- Confirmation Modal -->
    <div
      v-if="showConfirmationModal"
      class="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50"
    >
      <div class="bg-black p-6 rounded shadow-md max-w-sm mx-auto">
        <h2 class="text-xl font-bold mb-4">Confirm Your Email</h2>
        <p class="mb-4">
          We've sent you a confirmation email. Please check your inbox and click
          the link to verify your email address before signing in.
        </p>
        <button @click="closeConfirmationModal" class="btn">OK</button>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, watchEffect, onUnmounted } from "vue";

const supabase = useSupabaseClient();
const user = useSupabaseUser();

// Authentication State
const email = ref("");
const password = ref("");
const username = ref("");
const isSignIn = ref(true);
const errorMessage = ref("");

const showConfirmationModal = ref(false);

// User Profile
const userProfile = ref(null);

// Leaderboard Data
const leaderboard = ref([]);
const currentPage = ref(1);
const totalPages = ref(1);
const entriesPerPage = 10;
const totalEntries = ref(0);

// Game State
const gameActionInProgress = ref(false);
const gameStarted = ref(false);
const gameOver = ref(false);
const question = ref(null);
const score = ref(0);
const timeLeft = ref(10);
let timer = null;
const shuffledAnswers = ref([]);
const isQuestionLoaded = ref(false);
const selectedAnswer = ref(null);
const isAnswerCorrect = ref(null);
const feedbackMessage = ref("");

const categories = ref([]);
const selectedCategory = ref("");
const selectedDifficulty = ref("medium");

// Error handling state
const apiError = ref(false);

// Authentication Functions
const handleAuth = async () => {
  errorMessage.value = "";
  try {
    if (isSignIn.value) {
      // Sign In
      const { error } = await supabase.auth.signInWithPassword({
        email: email.value,
        password: password.value,
      });
      if (error) throw error;
    } else {
      // Sign Up
      // Validate username
      const usernameError = validateUsername(username.value);
      if (usernameError) {
        throw new Error(usernameError);
      }

      const { data, error } = await supabase.auth.signUp({
        email: email.value,
        password: password.value,
      });
      if (error) throw error;

      // Insert profile with default score
      const userId = data.user.id;
      const { error: profileError } = await supabase.from("profiles").insert([
        {
          user_id: userId,
          username: username.value,
          score: 0,
        },
      ]);
      if (profileError) {
        if (profileError.message.includes("username_valid")) {
          throw new Error("Username is invalid.");
        } else if (profileError.message.includes("duplicate key value")) {
          throw new Error("Username is already taken.");
        } else {
          throw new Error("An error occurred while creating your profile.");
        }
      }

      // Show confirmation modal
      showConfirmationModal.value = true;
    }
    email.value = "";
    password.value = "";
    username.value = "";
  } catch (error) {
    errorMessage.value = error.message;
  }
};

const toggleAuthMode = () => {
  isSignIn.value = !isSignIn.value;
  errorMessage.value = "";
  username.value = "";
};

const closeConfirmationModal = () => {
  showConfirmationModal.value = false;
  isSignIn.value = true;
};

const signOut = async () => {
  const { error } = await supabase.auth.signOut();
  if (error) {
    console.error("Error signing out:", error);
  } else {
    userProfile.value = null;
    gameStarted.value = false;
    gameOver.value = false;
    question.value = null;
    shuffledAnswers.value = [];
    feedbackMessage.value = "";
    selectedAnswer.value = null;
    isAnswerCorrect.value = null;
  }
};

// Username Validation Function
const validateUsername = (username) => {
  // Allowed characters: letters, numbers, underscores, hyphens
  // Length between 3 and 15 characters
  const pattern = /^[a-zA-Z0-9_-]{3,15}$/;
  if (!pattern.test(username)) {
    return "Username must be 3-15 characters and can only contain letters, numbers, underscores, and hyphens.";
  }

  // Disallowed words - I wanted to add more but got worried I might get in trouble with SAIT by essentially submitting a list of very bad words - HB
  const disallowedWords = ["admin", "moderator", "support"];
  const lowercaseUsername = username.toLowerCase();
  for (const word of disallowedWords) {
    if (lowercaseUsername.includes(word)) {
      return "Username contains disallowed words.";
    }
  }
};

// Fetch User Profile
const fetchUserProfile = async () => {
  if (!user.value) return;
  const { data, error } = await supabase
    .from("profiles")
    .select("username, score")
    .eq("user_id", user.value.id)
    .single();
  if (error) {
    console.error("Error fetching user profile:", error);
  } else {
    userProfile.value = data;
  }
};

// Fetch categories from the API
const fetchCategories = async () => {
  try {
    const res = await fetch("https://opentdb.com/api_category.php");
    const data = await res.json();
    categories.value = data.trivia_categories;
  } catch (error) {
    console.error("Error fetching categories:", error);
  }
};

// Call this when the user is logged in to populate the category list
onMounted(() => {
  fetchCategories();
});

// Fetch Leaderboard Data
const fetchLeaderboard = async () => {
  const limit = entriesPerPage;
  const offset = (currentPage.value - 1) * limit;

  const { data, error, count } = await supabase
    .from("profiles")
    .select("username, score", { count: "exact" })
    .order("score", { ascending: false })
    .range(offset, offset + limit - 1);

  if (error) {
    console.error("Error fetching leaderboard:", error);
  } else {
    leaderboard.value = data;
    totalEntries.value = Math.min(count, 100);
    totalPages.value = Math.min(
      Math.ceil(totalEntries.value / entriesPerPage),
      10
    );
  }
};

// Pagination Functions
const prevPage = () => {
  if (currentPage.value > 1) {
    currentPage.value--;
    fetchLeaderboard();
  }
};

const nextPage = () => {
  if (currentPage.value < totalPages.value) {
    currentPage.value++;
    fetchLeaderboard();
  }
};

// Game Functions
const startGame = () => {
  if (gameActionInProgress.value || gameStarted.value) return;
  gameActionInProgress.value = true;

  if (timer) clearInterval(timer);
  gameStarted.value = true;
  gameOver.value = false;
  score.value = 0;
  selectedAnswer.value = null;
  isAnswerCorrect.value = null;
  feedbackMessage.value = "";
  question.value = null;
  isQuestionLoaded.value = false;

  fetchQuestion().finally(() => {
    gameActionInProgress.value = false;
  });
};

const endGame = () => {
  if (gameActionInProgress.value || !gameStarted.value) return;
  gameActionInProgress.value = true;

  if (timer) clearInterval(timer);
  gameStarted.value = false;
  gameOver.value = false;
  question.value = null;
  shuffledAnswers.value = [];
  selectedAnswer.value = null;
  isAnswerCorrect.value = null;
  feedbackMessage.value = "";
  isQuestionLoaded.value = false;
  timeLeft.value = 10;

  // Delay resetting the flag to prevent rapid clicks
  setTimeout(() => {
    gameActionInProgress.value = false;
  }, 1000);
};

const fetchQuestion = async () => {
  if (timer) clearInterval(timer);
  selectedAnswer.value = null;
  isAnswerCorrect.value = null;
  feedbackMessage.value = "";
  timeLeft.value = 10;
  question.value = null;
  shuffledAnswers.value = [];
  isQuestionLoaded.value = false;
  apiError.value = false;

  const categoryParam = selectedCategory.value
    ? `&category=${selectedCategory.value}`
    : "";
  const difficultyParam = `&difficulty=${selectedDifficulty.value}`;

  try {
    const res = await fetch(
      `https://opentdb.com/api.php?amount=1&type=multiple${categoryParam}${difficultyParam}`
    );
    if (!res.ok) {
      throw new Error(`HTTP error! status: ${res.status}`);
    }
    const data = await res.json();

    if (!data.results || !data.results[0]) {
      throw new Error("Invalid response format from API");
    }

    question.value = data.results[0];
    shuffleAnswers();
    resetTimer();
    isQuestionLoaded.value = true;
  } catch (error) {
    console.error("Error fetching question, retrying...", error);

    setTimeout(() => {
      fetchQuestion();
    }, 2000);
  }
};

const shuffleAnswers = () => {
  const answers = [
    ...question.value.incorrect_answers,
    question.value.correct_answer,
  ];
  shuffledAnswers.value = answers.sort(() => Math.random() - 0.5);
};

const resetTimer = () => {
  if (timer) {
    clearInterval(timer);
  }
  timeLeft.value = 10;
  timer = setInterval(() => {
    timeLeft.value--;
    if (timeLeft.value <= 0) {
      clearInterval(timer);
      handleGameOver();
    }
  }, 1000);
};

const selectAnswer = (answer) => {
  if (selectedAnswer.value !== null) return;

  clearInterval(timer);
  selectedAnswer.value = answer;
  isAnswerCorrect.value = answer === question.value.correct_answer;

  // Set feedback message
  feedbackMessage.value = isAnswerCorrect.value ? "Correct!" : "Wrong!";

  if (isAnswerCorrect.value) {
    score.value++;
    // Wait for 1.5 seconds before fetching the next question
    setTimeout(() => {
      fetchQuestion();
    }, 1500);
  } else {
    // Wait for 1.5 seconds before handling game over
    setTimeout(() => {
      handleGameOver();
    }, 1500);
  }
};

const handleGameOver = async () => {
  gameOver.value = true;
  gameStarted.value = false;
  if (timer) clearInterval(timer);
  question.value = null;
  shuffledAnswers.value = [];
  selectedAnswer.value = null;
  isAnswerCorrect.value = null;
  feedbackMessage.value = "";

  if (user.value) {
    await saveScore();
    fetchLeaderboard();
  }
};

const saveScore = async () => {
  if (!user.value) return;

  // Fetch current user's profile
  const { data: profileData, error: profileError } = await supabase
    .from("profiles")
    .select("score")
    .eq("user_id", user.value.id)
    .single();

  if (profileError) {
    console.error("Error fetching user profile:", profileError);
    return;
  }

  // Update the user's score if the new score is higher
  if (score.value > profileData.score) {
    const { error } = await supabase
      .from("profiles")
      .update({ score: score.value })
      .eq("user_id", user.value.id);
    if (error) {
      console.error("Error updating score:", error);
    } else {
      userProfile.value.score = score.value;
    }
  }
};

// Lifecycle Hooks
onMounted(() => {
  fetchLeaderboard();
});

watchEffect(() => {
  if (user.value) {
    fetchUserProfile();
  } else {
    userProfile.value = null;
    gameStarted.value = false;
  }
});

onUnmounted(() => {
  if (timer) clearInterval(timer);
});
</script>

<style scoped>
.btn {
  @apply px-4 py-2 bg-emerald-500 text-white rounded hover:bg-emerald-700 disabled:opacity-50;
}

input {
  @apply w-full p-2 border rounded;
}

table {
  @apply w-full text-left border-collapse;
}

th,
td {
  @apply border xm:px-2 xxm:px-1 px-4 py-2;
}

.fixed {
  position: fixed;
}

.inset-0 {
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
}

.bg-opacity-50 {
  background-color: rgba(0, 0, 0, 0.5);
}

.max-w-sm {
  max-width: 24rem;
}

select {
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
}

select:focus {
  outline: none;
}
</style>
