<template>
    <div class="flex flex-col justify-center items-center text-white">
    
        <div class="lg:flex lg:flex-row w-full">
            <div class="flex justify-center items-center"><img src="../assets/images/profilepic.jpg" alt="Profile Picture" class="rounded-full w-80 h-80 xs:h-60 xs:w-60 mt-4 mb-4 shadow-2xl"></div>
            <div class="flex flex-col justify-center items-center lg:mt-14 px-10">
                <h1 class="text-5xl font-bold text-center mt-5">Sergio Gonzalez</h1>

                <h2 class="text-3xl font-bold text-center mt-2 xs:text-xl">Full-Stack Developer</h2>
                
                <!-- Social Media Links Icon buttons -->
                <div class="flex justify-center items-center gap-6 mt-6">
                    <button aria-label="LinkedIn" class="transition duration-300 ease-in-out hover:scale-[1.3]">
                        <a href="https://www.linkedin.com/in/sergio-gonzalez-garcia-b5082a264/" target="_blank">
                            <i class="fa-brands fa-linkedin-in text-3xl cursor-pointer"></i>
                        </a>
                    </button>
            
                    <button aria-label="GitHub" class="transition duration-300 ease-in-out hover:scale-[1.3]">
                        <a href="https://github.com/sergiogonzalezyes"><i class="fa-brands fa-github text-3xl cursor-pointer"></i></a>
                    </button>
                    <!-- Download Resume Button -->
                    <button aria-label="Resume" class="transition duration-300 ease-in-out hover:scale-[1.3]">
                        <a href="../assets/SergioGonzalezResume.pdf" download="SergioGonzalezResume.pdf">
                            <i class="fa-solid fa-download text-3xl cursor-pointer"></i>
                        </a>
                    </button>
                </div>
            </div>
        </div>


        <div class="flex flex-col justify-center items-center mt-6 lg:w-3/5">
            <h5 class="text-2xl font-bold">About Me</h5>
            <!-- line break -->
            <div class="w-full h-0.5 bg-white mt-2 mb-2"></div>
            <p class="text-center">Hello! I'm Sergio Gonzalez, a Full-Stack Developer passionate about creating technology that connects and resonates.
             Skilled in database and full-stack design, I craft seamless systems that enhance user experience. Driven by constant learning and teamwork,
              I thrive on the dynamic evolution of tech, taking joy in every line of code that weaves into our digital world.
            </p>
        </div>
    </div>
</template>

<script setup>

</script>

<style lang="scss" scoped>

</style>