<template>
    <header class="sticky top-0 bg-transparent backdrop-blur-md shadow-lg w-full">
        <nav class="container flex flex-col sm:flex-row items-center gap-4 text-white py-6">
            <div class="flex items-center gap-3 justify-between w-full">
                <div @click="scrollToTop" class="flex items-center gap-3 transition duration-300 ease-in-out hover:scale-[1.1] cursor-pointer">
                    <i class="fa-solid fa-code text-2xl"></i>
                    <p class="text-2xl">SG</p>
                </div>
                <!-- Bars icon, visible only on small screens -->
                <div @click="toggleMenu" class="sm:hidden flex items-center gap-3 transition duration-300 ease-in-out hover:scale-[1.2] cursor-pointer">
                    <i class="fa-solid fa-bars text-2xl"></i>
                </div>
            </div>

            <!-- Regular links, visible on medium and larger screens -->
            <div class="hidden sm:flex flex-col sm:flex-row gap-6 flex-1 justify-end">
                <p @click="$emit('scroll-to-section', 'projects')" class="text-2xl transition duration-300 ease-in-out hover:scale-[1.1] cursor-pointer">Projects</p>
                <p @click="$emit('scroll-to-section', 'skills')" class="text-2xl transition duration-300 ease-in-out hover:scale-[1.1] cursor-pointer">Skills</p>
                <p @click="$emit('scroll-to-section', 'contact')" class="text-2xl transition duration-300 ease-in-out hover:scale-[1.1] cursor-pointer">Contact</p>
                <!-- dark mode icon toggle -->
                <i class="fa-solid fa-moon text-2xl transition duration-300 ease-in-out hover:scale-[1.3] cursor-pointer" @click="toggleDarkMode"></i>
            </div>

            <!-- Dropdown menu, hidden by default on small screens -->
            <transition name="slide-down">
                <div v-show="isMenuOpen" class="flex flex-col sm:hidden gap-5 flex-1 justify-end">
                    <p @click="NavToggleMenu('projects')" class="text-2xl  transition duration-300 ease-in-out hover:scale-[1.15] cursor-pointer">Projects</p>
                    <p @click="NavToggleMenu('skills')" class="text-2xl transition duration-300 ease-in-out hover:scale-[1.15] cursor-pointer">Skills</p>
                    <p @click="NavToggleMenu('contact')" class="text-2xl transition duration-300 ease-in-out hover:scale-[1.15] cursor-pointer">Contact</p>
                    <i class="fa-solid fa-moon text-2xl transition duration-300 ease-in-out hover:scale-[1.2] cursor-pointer text-center" @click="toggleDarkMode"></i>
                </div>
            </transition>
        </nav>
    </header>
</template>

<script setup>
import { ref } from 'vue';

// Define the events your component can emit
const emit = defineEmits(['scroll-to-section']);

const isMenuOpen = ref(false);

const toggleMenu = () => {
    isMenuOpen.value = !isMenuOpen.value;
};

// This method now uses `emit` to emit an event instead of using `$emit` directly
const NavToggleMenu = (section) => {
    try {
        // Toggle the menu or other logic
        isMenuOpen.value = !isMenuOpen.value;
        emit('scroll-to-section', section); // Emit the event to the parent component
    } catch (error) {
        console.error('Error toggling menu:', error);
        // Handle any errors that might occur during toggling
    }
};

const scrollToTop = () => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth',
  });
};

const toggleDarkMode = () => {
    document.body.classList.toggle('dark');
};


</script>



<style scoped>
/* Initial state for entering / before enter and leave-to / after leave */
.slide-down-enter-from, .slide-down-leave-to {
  transform: translateY(-20px); /* Adjusted for more noticeable movement */
  opacity: 0;
}

/* Active state for enter and leave transitions */
.slide-down-enter-active, .slide-down-leave-active {
  transition: opacity 0.8s ease, transform 0.8s ease; /* Separate transitions for smoother effect */
}

/* End state for enter and initial state for leave */
.slide-down-enter-to, .slide-down-leave-from {
  transform: translateY(0);
  opacity: 1;
}
</style>



