<template>
  <nav class="px-8 shadow dark:bg-indigo-500 shadow-gray-300 w-100 md:px-auto">
    <div
      class="container flex flex-wrap justify-between items-center mx-auto h-28 md:h-16 md:px-4 md:flex-nowrap"
    >
      <!-- Logo -->
      <div class="text-indigo-500 md:order-1">
        <!-- Heroicon - Chip Outline -->
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="w-10 h-10"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z"
          />
        </svg>
      </div>
      <div class="order-3 w-full text-gray-500 md:w-auto md:order-2">
        <ul class="flex justify-between font-semibold">
          <!-- Active Link = text-indigo-500
                Inactive Link = hover:text-indigo-500 -->
          <li
            class="hover:text-indigo-500 dark:hover:text-gray-300 dark:text-white md:px-4 md:py-2"
          >
            <a href="https://scraayp.ga">Home</a>
          </li>
          <li
            class="md:px-4 md:py-2 dark:hover:text-gray-300 dark:text-white hover:text-indigo-400"
          >
            <a href="https://scraayp.ga/socials">Socials</a>
          </li>
          <li
            class="md:px-4 md:py-2 dark:hover:text-gray-300 dark:text-white hover:text-indigo-400"
          >
            <a href="https://scraayp.ga/contact">Contact</a>
          </li>
        </ul>
      </div>
      <div class="order-2 md:order-3">
        <a href="https://scraayp.ga/login">
          <button
            class="flex gap-2 items-center px-4 py-2 text-gray-50 bg-indigo-500 rounded-xl hover:bg-indigo-400 dark:hover:bg-indigo-600"
          >
            <!-- Heroicons - Login Solid -->
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="w-5 h-5"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fill-rule="evenodd"
                d="M3 3a1 1 0 011 1v12a1 1 0 11-2 0V4a1 1 0 011-1zm7.707 3.293a1 1 0 010 1.414L9.414 9H17a1 1 0 110 2H9.414l1.293 1.293a1 1 0 01-1.414 1.414l-3-3a1 1 0 010-1.414l3-3a1 1 0 011.414 0z"
                clip-rule="evenodd"
              />
            </svg>
            <span>Login</span>
          </button>
        </a>
      </div>
    </div>
  </nav>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  // eslint-disable-next-line vue/multi-word-component-names
  name: 'Login',
})
</script>
