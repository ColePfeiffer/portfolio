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
import { defineComponent } from "vue";

export default defineComponent({
  name: "WorkPage",
  components: { BaseCarousel, CarouselSlide },
  setup() {
    const projects = [
      {
        slideName: 1,
        containerTitle: "../work/projects/01/ToEGO",
        containerIcon: "fab fa-vuejs",
        containerTitlebarColor: "#ed008c",
        date: "2022 - 2023",
        name: "ToEGO",
        subtitle: "Diary App for Introspection",
        images: [{ src: "images/project_toEGO.png", description: "Placeholder Image", isVideo: false },],
        description:
          "ToEGO is a diary app for introspection that I developed using Vue.js and Quasar as part of my bachelor's thesis. With ToEGO, users can create notes throughout the day to track their thoughts, emotions, and experiences. These notes can be looked through and reflected on before creating a diary entry. With customizable templates for notes and diary entries, users can easily format and save text for future use, and set default templates to be used automatically when creating a new entry or a new note. One of the app's unique features is its customizable interface, allowing users to style the app to their liking by creating themes, reminiscent of the customization options offered by platforms like MySpace and blog sites of the past.",
        features: ["customizable ui", "mood tracking", "reuseable templates"],
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
        subtitle: "Managing tool for shared flats",
        images: [
          { src: "images/RoomMe_02.png", description: "", isVideo: false },
          { src: "images/RoomMe_01.png", description: "", isVideo: false },
          { src: "images/RoomMe_04.png", description: "", isVideo: false },
          { src: "images/RoomMe_05.png", description: "", isVideo: false },
          { src: "images/RoomMe_06.png", description: "", isVideo: false },
        ],
        description:
          "RoomMe is a management tool designed specifically for individuals living in shared flats. This intuitive application enables users to create cleaning schedules, allocate tasks among roommates, and customize rules to fit their preferences. For example, roommates can assign specific tasks to particular individuals or rotate them between themselves. They can also set the frequency for each task, whether it be weekly, bi-weekly, or monthly. RoomMe offers a unique family tree feature that shows users who lived in each room and when. The chat function facilitates easy communication among roommates, while the expense tracking feature allows users to monitor costs and split them accordingly. Roommates can add items to a shared grocery list and log purchases in the app. They can specify which roommates the item will be shared with, and the app will provide a clear breakdown of who owes what to whom.",
        features: [
          "cleaning schedules",
          "rotation of assigned tasks",
          "expense tracking",
          "family tree for rooms",
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
      projects,
    };
  },
  methods: {},
});
</script>
