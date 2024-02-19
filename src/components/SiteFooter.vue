<template>
        <div class="container flex flex-col sm:flex-row items-center gap-4 text-white py-6 justify-between">
            <div class="flex-1"></div>
            <p class="text-2xl sm:text-center flex-1">Created by Sergio Gonzalez</p>
            <div @click="scrollToTop" class="flex items-center hover:text-weather-secondary duration-150 cursor-pointer flex-1 justify-end">
                <i class="fa-solid fa-chevron-up text-2xl"></i>
            </div>
        </div>
</template>

<script setup>

const scrollToTop = () => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth',
  });
};

</script>
