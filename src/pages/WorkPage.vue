<template>
  <BaseCarousel>
    <q-carousel-slide v-for="(project, index) in projects" :key="index" :name="project.slideName"
      class="column no-wrap flex-center carousel-slide">
      <CarouselSlide :slideName="project.slideName" :containerTitle="project.containerTitle"
        :containerIcon="project.containerIcon" :containerTitlebarColor="project.containerTitlebarColor"
        :projectName="project.name" :projectPath="project.path" :projectImages="project.images"
        :projectLanguages="project.languages" :projectDate="project.date" :projectGitHub="project.gitHub"
        :projectLive="project.live" />
    </q-carousel-slide>
  </BaseCarousel>
</template>

<script>
import BaseCarousel from "src/components/BaseCarousel.vue";
import CarouselSlide from "src/components/CarouselSlide.vue";
import { defineComponent, ref } from "vue";
import { useI18n } from 'vue-i18n'

export default defineComponent({
  name: "WorkPage",
  components: { BaseCarousel, CarouselSlide },
  setup() {
    const { t } = useI18n(); // use as global scope
    const { tm } = useI18n();
    const projects = [
      {
        slideName: 1,
        containerTitle: t('projectPath', { msg: '/toEGO' }),
        containerIcon: "fab fa-vuejs",
        containerTitlebarColor: "#FEF501",
        date: "2022 - 2023",
        name: "ToEGO",
        path: "toEGO",
        images: [{ src: "images/project_toEGO.png", description: "Placeholder Image", isVideo: false },],
        languages: ["Vue.js", "Quasar", "Webpack", "HTML/CSS/JS", "Firebase"],
        gitHub: "https://github.com/ColePfeiffer/toEgo",
        live: "https://colepfeiffer.github.io/",
      },
      {
        slideName: 2,
        containerTitle: "../work/projects/02/RoomMe",
        date: "2021",
        containerIcon: "fab fa-vuejs",
        containerTitlebarColor: "#D90479",
        name: "RoomMe",
        path: "roomMe",
        images: [
          { src: "images/RoomMe_02.png", description: "", isVideo: false },
          { src: "images/RoomMe_01.png", description: "", isVideo: false },
          { src: "images/RoomMe_04.png", description: "", isVideo: false },
          { src: "images/RoomMe_05.png", description: "", isVideo: false },
          { src: "images/RoomMe_06.png", description: "", isVideo: false },
        ],
        languages: ["Vue.js", "Vuetify", "Webpack", "HTML/CSS/JS"],
        gitHub: "https://github.com/ColePfeiffer/room_me",
        live: "",
      },
      {
        slideName: 3,
        containerTitle: "../work/projects/02/RoomMe",
        date: "2019",
        containerIcon: "fab fa-vuejs",
        containerTitlebarColor: "#04B2D9",
        name: "Philips HUE-Light Controller ",
        path: "hueLight",
        images: [
          { src: "https://drive.google.com/file/d/1S4EIoc8cpTn7_1LdPCVabsm04QEgg3ZT/preview", description: "Volume visualization without pitch", isVideo: true },
          { src: "https://drive.google.com/file/d/1LyIvTr2KlXp_DugBcDdtJzSCibOJZbU3/preview", description: "Volume and Pitch visualization, #1", isVideo: true },
          { src: "https://drive.google.com/file/d/1XmRqcPlei6PV44awwpp_RJS4vceNQbwY/preview", description: "Volume and Pitch visualization, #2", isVideo: true },
        ],
        languages: ["Python", "REST API"],
        gitHub: "https://github.com/ColePfeiffer/Farbmetrik-WS18",
        live: "",
      },
      // Add more projects here...
    ];
    return {
      projects, t, tm
    };
  },
  methods: {
  },
});
</script>
