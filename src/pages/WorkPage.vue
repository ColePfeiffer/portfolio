<template>
  <BaseCarousel>

    <q-carousel-slide v-for="(project, index) in projects" :key="index" :name="project.slideName"
      class="column no-wrap flex-center carousel-slide">
      <CarouselSlide :slideName="project.slideName" :containerTitle="project.containerTitle"
        :containerIcon="project.containerIcon" :containerTitlebarColor="project.containerTitlebarColor"
        :projectName="project.name" :projectSubtitle="project.subtitle" :projectImages="project.images"
        :projectDescription="project.description" :projectFeatures="project.features"
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
        containerTitlebarColor: "#ed008c",
        date: "2022 - 2023",
        name: "ToEGO",
        subtitle: t('toEGO.subtitle'),
        images: [{ src: "images/project_toEGO.png", description: "Placeholder Image", isVideo: false },],
        description: t('toEGO.description'),
        features: tm('toEGO.features'),
        languages: ["Vue.js", "Quasar", "Webpack", "HTML/CSS/JS", "Firebase"],
        gitHub: "https://github.com/ColePfeiffer/toEgo",
        live: "https://colepfeiffer.github.io/",
      },
      {
        slideName: 2,
        containerTitle: "../work/projects/02/RoomMe",
        date: "2021",
        containerIcon: "fab fa-vuejs",
        containerTitlebarColor: "#ed008c",
        name: "RoomMe",
        subtitle: t('roomMe.subtitle'),
        images: [
          { src: "images/RoomMe_02.png", description: "", isVideo: false },
          { src: "images/RoomMe_01.png", description: "", isVideo: false },
          { src: "images/RoomMe_04.png", description: "", isVideo: false },
          { src: "images/RoomMe_05.png", description: "", isVideo: false },
          { src: "images/RoomMe_06.png", description: "", isVideo: false },
        ],
        description: t('roomMe.description'),
        features: tm('roomMe.features'),
        languages: ["Vue.js", "Vuetify", "Webpack", "HTML/CSS/JS"],
        gitHub: "https://github.com/ColePfeiffer/room_me",
        live: "",
      },
      {
        slideName: 3,
        containerTitle: "../work/projects/02/RoomMe",
        date: "2019",
        containerIcon: "fab fa-vuejs",
        containerTitlebarColor: "#ed008c",
        name: "Philips HUE-Light Controller ",
        subtitle: "On a Raspberry Pi",
        images: [
          { src: "https://drive.google.com/file/d/1S4EIoc8cpTn7_1LdPCVabsm04QEgg3ZT/preview", description: "Volume visualization without pitch", isVideo: true },
          { src: "https://drive.google.com/file/d/1LyIvTr2KlXp_DugBcDdtJzSCibOJZbU3/preview", description: "Volume and Pitch visualization, #1", isVideo: true },
          { src: "https://drive.google.com/file/d/1XmRqcPlei6PV44awwpp_RJS4vceNQbwY/preview", description: "Volume and Pitch visualization, #2", isVideo: true },
        ],
        description:
          "This project created an app that manipulates a Philips Hue light strip based on sound input. Python and audio-processing libraries enabled the app to interact with the light strip via the deCONZ API and Postman requests. Challenges included the light strip's technical limitations, which were overcome by reducing the command rate and adjusting input sensitivity. The app created a visually appealing display that responds to sound input and provides creative lighting effects. Features included pitch recognition (Aubio), volume calculation (Audioop) and microphone input (PyAudio). The project achieved its goal.",
        features: [
          "pitch and volume visualization",
          "VNC-viewer for easier management",
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
