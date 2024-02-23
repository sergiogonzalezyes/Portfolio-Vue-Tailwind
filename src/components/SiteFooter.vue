<template>
          <!-- Social Media Links Icon buttons -->

        <div class="flex flex-col justify-center items-center py-10 text-white">
          <p class="text-white text-2xl text-center">Connect with me!</p>
          <br>
          <div class="flex justify-center items-center gap-12">
            <button aria-label="LinkedIn" class="transition duration-300 ease-in-out hover:scale-[1.3]">
                <a href="https://www.linkedin.com/in/sergio-gonzalez-garcia-b5082a264/" target="_blank">
                    <i class="fa-brands fa-linkedin-in text-3xl cursor-pointer"></i>
                </a>
            </button>
            <button aria-label="GitHub" class="transition duration-300 ease-in-out hover:scale-[1.3]">
                <a href="https://github.com/sergiogonzalezyes"><i class="fa-brands fa-github text-3xl cursor-pointer"></i></a>
            </button>
          </div>
        </div>

        <div class="container flex flex-col sm:flex-row items-center gap-4 text-white py-6 justify-between text-center">
          
            <div class="flex-1">

            </div>
            
            <p class="text-center flex-1">Sergio Gonzalez™</p>

            

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
