<template>
    <div class="flex flex-col justify-center items-center text-white">
    
        <div class="lg:flex lg:flex-row w-full lg:items-center lg:justify-center">
            <div class="flex justify-center items-center"><img src="../assets/images/profilepic.jpg" alt="Profile Picture" class="rounded-full w-80 h-80 xs:h-60 xs:w-60 mt-4 mb-4 shadow-2xl"></div>
            <div class="flex flex-col justify-center items-center xl:mt-14 xl:justify-center xl:items-center xl:flex px-10">
                <h1 class="text-5xl font-bold text-center mt-5">Sergio Gonzalez</h1>

                <h2 class="text-3xl font-bold text-center mt-2 xs:text-xl">Full-Stack Developer</h2>
                
                <!-- Social Media Links Icon buttons -->
                <div class="flex justify-center items-center gap-8 mt-6">
                    <button aria-label="LinkedIn" class="transition duration-300 ease-in-out hover:scale-[1.3]">
                        <a href="https://www.linkedin.com/in/sergio-gonzalez-b5082a264/" target="_blank">
                            <i class="fa-brands fa-linkedin-in text-3xl cursor-pointer"></i>
                        </a>
                    </button>
            
                    <button aria-label="GitHub" class="transition duration-300 ease-in-out hover:scale-[1.3]">
                        <a href="https://github.com/sergiogonzalezyes"><i class="fa-brands fa-github text-3xl cursor-pointer"></i></a>
                    </button>
                    <!-- Download Resume Button -->
                    <button aria-label="Resume" class="transition duration-300 ease-in-out hover:scale-[1.3]">
                        <a href="/src/assets/download/Sergio-Gonzalez-Resume.pdf" download="Sergio-Gonzalez-Resume.pdf">
                            <i class="fa-solid fa-download text-3xl cursor-pointer"></i>
                        </a>
                    </button>
                </div>
            </div>
        </div>


        <div class="flex flex-col justify-center items-center my-12 lg:w-3/5">
            <h5 class="text-2xl font-bold">About Me</h5>
            <!-- line break -->
            <!-- <div class="w-full h-0.5 bg-white mt-4 mb-2"></div> -->
            <p class="text-center my-2">Hello! I'm Sergio Gonzalez, a Full-Stack Developer passionate about creating technology that connects and resonates.
             Skilled in database and full-stack design, I craft seamless systems that enhance user experience. Driven by constant learning and teamwork,
              I thrive on the dynamic evolution of tech, taking joy in every line of code that weaves into our digital world.
            </p>
        </div>

        <div class="lg:flex lg:flex-row w-full lg:items-center lg:justify-center my-10">
            <div class="flex flex-col justify-center items-center lg:w-3/5">
                <div class="w-full sm:w-full h-0.5 bg-white opacity-50 mt-2 mb-2"></div>
                    <div class="flex flex-col sm:flex-row w-full justify-evenly my-4">
                        <div class="flex flex-col justify-start items-center mx-2 space-y-2 py-4">
                            <i class="fa-solid fa-guitar text-3xl cursor-pointer"></i>
                            <div class="text-center font-bold">Guitar Player</div>
                            <p class="text-center">8+ years</p>
                        </div>
                        <div class="flex flex-col justify-start items-center mx-2 space-y-2 py-4">
                            <i class="fa-solid fa-graduation-cap text-3xl cursor-pointer"></i>
                            <div class="text-center font-bold">Computer Information Systems</div>
                            <div class="flex justify-center items-center space-x-1">
                                <p class="text-center">University Of</p>
                                <p class="text-center">&nbsp;Houston</p>
                            </div>
                        </div>
                        <div class="flex flex-col justify-start items-center mx-2 space-y-2 py-4">
                            <i class="fa-solid fa-lightbulb text-3xl cursor-pointer"></i>
                            <div class="text-center font-bold">Innovative</div>
                            <p class="text-center">Problem Solver</p>
                        </div>
                    </div>
                <div class="w-full h-0.5 bg-white opacity-50 mt-2 mb-2"></div>
            </div>
        </div>

    </div>
</template>

<script setup>

</script>

<style scoped>

</style>