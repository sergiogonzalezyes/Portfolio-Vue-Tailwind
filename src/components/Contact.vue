<template>
    <div class="flex flex-col justify-center items-center">
        <div class="flex flex-col justify-center items-center w-2/3">
            <div class="bg-white opacity-50 h-0.5 my-16 w-full"></div>

            <h1 class="text-4xl text-center text-white">Interested in working together? </h1>
            <br>
            <i class="fa-solid fa-handshake text-3xl text-white hover:scale-[1.3] transition duration-300 ease-in-out"></i>
            <br>
            <p class="text-center text-white mb-8">
              I'm always open to discussing product design work or partnership opportunities.
            </p>
        </div>
        
        <div class="flex justify-center">
          <div class="bg-slate-800 bg-opacity-60 rounded-xl w-full max-w-2xl p-8">
            <form id="contactForm" @submit.prevent="sendEmail" class="space-y-4">
              <div class="flex flex-wrap">
                <div class="w-full sm:w-1/2 px-2 mb-4">
                  <input type="text" id="firstName" name="firstName" placeholder="First Name" required class="w-full h-10 rounded-sm bg-slate-600 text-white px-3">
                </div>
                <div class="w-full sm:w-1/2 px-2 mb-4">
                  <input type="text" id="lastName" name="lastName" placeholder="Last Name" required class="w-full h-10 rounded-sm bg-slate-600 text-white px-3">
                </div>
              </div>
              <div class="px-2">
                <input type="email" id="email" name="email" placeholder="Email" required class="w-full h-10 rounded-sm bg-slate-600 text-white px-3 mb-4">
              </div>
              <div class="px-2">
                <textarea id="message" name="message" placeholder="Message" required class="w-full rounded-sm bg-slate-600 text-white px-3 mb-4 fixed-size-textarea" maxlength="300" @input="countAmountCharacters"></textarea>
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
    </div>
</template>
  

<script setup>
import { ref } from 'vue'
import emailjs from '@emailjs/browser';



const characterCount = ref(0)
const emailJsServiceId = import.meta.env.VITE_EMAILJS_SERVICE_ID
const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID

const countAmountCharacters = (e) => {
  characterCount.value = e.target.value.length
}

const sendEmail = async () => {
    try {
        const form = document.getElementById('contactForm');
        const result = await emailjs.sendForm(emailJsServiceId, templateId, form, { publicKey: import.meta.env.VITE_EMAILJS_PUBLIC_KEY });
        console.log('Email sent successfully', result.text);
        alert('Email sent successfully. I will get back to you as soon as possible!');
        form.reset();
        characterCount.value = 0;
    } catch (error) {
        console.error('Failed to send email', error.text);
        alert('Failed to send email. Please try again.');
    }
}

</script>

<style scoped>
.fixed-size-textarea {
  height: 160px; /* Example fixed height */
  resize: none; /* Prevent resize */
}

</style>