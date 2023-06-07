<template>
  <BaseCarousel :projectCount="projects.length">
    <q-carousel-slide v-for="(project, index) in projects" :key="index" :name="project.slideName"
      class="column no-wrap flex-center carousel-slide">
      <CarouselSlide>
        <BaseContainer :title="project.containerTitle" :icon="project.containerIcon" :isDraggable="false"
          :titlebarColor="project.containerTitlebarColor" style="background-color: whitesmoke" :hasExpandButton="false"
          @close="redirectToIndex">
          <div class="row justify-center items-center q-pa-sm">
            <div class="col-0.5" style="width: 3%"></div>
            <div class="col-11" style="width: 94%">
              <BaseProjectContainer :name="project.name" :path="project.path" :images="project.images"
                :languages="project.languages" :date="project.date" :gitHub="project.gitHub" :live="project.live" />
            </div>
            <div class="col-0.5" style="width: 3%"></div>
          </div>
        </BaseContainer>
      </CarouselSlide>
    </q-carousel-slide>
  </BaseCarousel>
</template>

<script>
import BaseCarousel from "src/components/BaseCarousel.vue";
import CarouselSlide from "src/components/CarouselSlide.vue";
import BaseContainer from "src/components/BaseContainer.vue";
import BaseProjectContainer from "src/components/BaseProjectContainer.vue";

import { defineComponent, ref } from "vue";
import { useI18n } from "vue-i18n";

export default defineComponent({
  name: "WorkPage",
  components: {
    BaseCarousel,
    CarouselSlide,
    BaseContainer,
    BaseProjectContainer,
  },
  setup() {
    const { t } = useI18n(); // use as global scope
    const { tm } = useI18n();
    const projects = [
      {
        slideName: 0,
        containerTitle: t("projectPath", { msg: "/toEGO" }),
        containerIcon: "fab fa-vuejs",
        containerTitlebarColor: "#FEF501",
        date: "2022 - 2023",
        name: "ToEGO",
        path: "toEGO",
        images: [
          {
            src: "images/00_Überblick.png",
            description: "Placeholder Image",
            isVideo: false,
            fit: "contain"
          },
          {
            src: "images/project_toEGO.png",
            description: "Placeholder Image",
            isVideo: false,
            fit: "contain"
          },
        ],
        languages: ["Vue.js", "Quasar", "Webpack", "HTML/CSS/JS", "Firebase"],
        gitHub: "https://github.com/ToniTechBot/toEgo",
        live: "https://ToniTechBot.github.io/",
      },
      {
        slideName: 1,
        containerTitle: "../work/projects/02/RoomMe",
        date: "2021",
        containerIcon: "fab fa-vuejs",
        containerTitlebarColor: "#D90479",
        name: "RoomMe",
        path: "roomMe",
        images: [
          { src: "images/RoomMe_02.png", description: "Profile Page Edit Dialog", isVideo: false, fit: "cover" },
          { src: "images/RoomMe_05.png", description: "Task Creator Dialog", isVideo: false, fit: "cover" },
          { src: "images/RoomMe_01.png", description: "Chat / Message board", isVideo: false, fit: "cover" },
          { src: "images/RoomMe_04.png", description: "Finances Page", isVideo: false, fit: "cover" },
        ],
        languages: ["Vue.js", "Vuetify", "Webpack", "HTML/CSS/JS"],
        gitHub: "https://github.com/ToniTechBot/room_me",
        live: "",
      },
      {
        slideName: 2,
        containerTitle: "../work/projects/02/RoomMe",
        date: "2019",
        containerIcon: "fab fa-vuejs",
        containerTitlebarColor: "#04B2D9",
        name: "Philips HUE-Light Controller ",
        path: "hueLight",
        images: [
          {
            src: "https://drive.google.com/file/d/1S4EIoc8cpTn7_1LdPCVabsm04QEgg3ZT/preview",
            description: "Volume visualization without pitch",
            isVideo: true,
            fit: ""
          },
          {
            src: "https://drive.google.com/file/d/1LyIvTr2KlXp_DugBcDdtJzSCibOJZbU3/preview",
            description: "Volume and Pitch visualization, #1",
            isVideo: true,
            fit: ""
          },
          {
            src: "https://drive.google.com/file/d/1XmRqcPlei6PV44awwpp_RJS4vceNQbwY/preview",
            description: "Volume and Pitch visualization, #2",
            isVideo: true,
            fit: ""
          },
        ],
        languages: ["Python", "REST API"],
        gitHub: "https://github.com/ToniTechBot/Farbmetrik-WS18",
        live: "",
      },
      // Add more projects here...
    ];
    return {
      projects,
      t,
      tm,
    };
  },
  methods: {
    redirectToIndex() {
      this.$router.push("/");
    },
  },
});
</script>
