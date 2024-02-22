<template>
    <div class="bg-white opacity-50 h-0.5 my-16"></div>
    
    <h1 class="text-3xl text-center text-white">Interested in working together?</h1>
    <p class="text-center text-white mb-8">
      I'm always open to discussing product design work or partnership opportunities.
    </p>
    
    <div class="flex justify-center">
      <div class="bg-slate-800 bg-opacity-60 rounded-xl w-full max-w-2xl p-8">
        <form @submit.prevent="sendEmail" class="space-y-4">
          <div class="flex flex-wrap">
            <div class="w-full sm:w-1/2 px-2 mb-4">
              <input type="text" id="firstName" name="firstName" placeholder="First Name" required class="w-full h-10 rounded-sm bg-slate-500 text-white px-3">
            </div>
            <div class="w-full sm:w-1/2 px-2 mb-4">
              <input type="text" id="lastName" name="lastName" placeholder="Last Name" required class="w-full h-10 rounded-sm bg-slate-500 text-white px-3">
            </div>
          </div>
          <div class="px-2">
            <input type="email" id="email" name="email" placeholder="Email" required class="w-full h-10 rounded-sm bg-slate-500 text-white px-3 mb-4">
          </div>
          <div class="px-2">
            <textarea id="message" name="message" placeholder="Message" required class="w-full rounded-sm bg-slate-500 text-white px-3 mb-4 fixed-size-textarea" maxlength="300" @input="countAmountCharacters"></textarea>
            <p class="flex text-white justify-end">{{ characterCount }}/300</p>
          </div>
          <div class="flex justify-center items-center">
            <button type="submit" class="bg-slate-600 text-white font-bold py-2 px-4 rounded w-40 hover:bg-slate-500 hover:scale-[1.1] cursor-pointer transition duration-300 ease-in-out">
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  </template>
  

<script setup>
import { ref } from 'vue'
import emailjs from '@emailjs/browser';

const characterCount = ref(0)

const countAmountCharacters = (e) => {
  characterCount.value = e.target.value.length
}



</script>

<style scoped>
.fixed-size-textarea {
  height: 160px; /* Example fixed height */
  resize: none; /* Prevent resize */
}

</style>