<template>
  <div class="flex flex-col min-h-screen font-Roboto bg-weather-primary">
    <SiteNavigation @scroll-to-section="scrollToSection" />
    <div>
      <HomeView ref="homeSection" />
    </div>
    <div>
      <ExperienceView ref="experienceSection" />
    </div>
    <div>
      <SkillsView ref="skillsSection"/>
    </div>
    <div>
      <ProjectsView ref="projectsSection" />
    </div>

    <div>
      <ContactView ref="contactSection" />
    </div>
    <SiteFooter @scroll-to-section="scrollToSection"/>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import SiteNavigation from './components/SiteNavigation.vue';
import HomeView from './views/HomeView.vue';
import ExperienceView from './views/ExperienceView.vue';
import ProjectsView from './views/ProjectsView.vue';
import ContactView from './views/ContactView.vue';
import SkillsView from './views/SkillsView.vue';
import SiteFooter from './components/SiteFooter.vue';


const homeSection = ref(null);
const projectsSection = ref(null);
const skillsSection = ref(null);
const contactSection = ref(null);
const experienceSection = ref(null);

const scrollToSection = (sectionName) => {
  const sectionRef = {
    home: homeSection,
    projects: projectsSection,
    skills: skillsSection,
    contact: contactSection,
    experience: experienceSection,
  }[sectionName];
  if (sectionRef && sectionRef.value) {
    sectionRef.value.$el.scrollIntoView({behavior: 'smooth'});
  };
};
</script>

<style lang="scss" scoped>

</style>