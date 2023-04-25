<template>
  <q-carousel v-model="slide" transition-prev="slide-down" transition-next="slide-up" swipeable animated
    control-color="green" prev-icon="mdi-chevron-left" next-icon="mdi-chevron-right"
    navigation-icon="radio_button_unchecked" navigation navigation-position="top" arrows
    class="bg-transparent full-height carousel" @before-transition="test" style="pointer-events: none;">
    <q-carousel-slide v-for="(project, index) in projects" :key="index" :name="project.slideName"
      class="column no-wrap flex-center carousel-slide">
      <CarouselSlide :slideName="project.slideName" :containerTitle="project.containerTitle"
        :containerIcon="project.containerIcon" :containerTitlebarColor="project.containerTitlebarColor"
        :projectName="project.name" :projectSubtitle="project.subtitle" :projectImages="project.images"
        :projectDescription="project.description" :projectFeatures="project.features"
        :projectLanguages="project.languages" :projectDate="project.date" :projectGitHub="project.gitHub"
        :projectLive="project.live" />
    </q-carousel-slide>
  </q-carousel>
</template>

<script>
import CarouselSlide from "src/components/CarouselSlide.vue";
import { defineComponent, ref, onMounted } from "vue";

export default defineComponent({
  name: "WorkPage",
  components: { CarouselSlide },
  setup() {
    var slide = ref(1);
    const projects = [
      {
        slideName: 1,
        containerTitle: "../work/projects/01/ToEGO",
        containerIcon: "fab fa-vuejs",
        containerTitlebarColor: "#ed008c",
        date: "2022 - 2023",
        name: "ToEGO",
        subtitle: "Diary App for Introspection",
        images: ["images/project_toEGO.png"],
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
        images: ["images/RoomMe_01.png", "images/RoomMe_02.png", "images/RoomMe_04.png", "images/RoomMe_05.png", "images/RoomMe_06.png"],
        description:
          "RoomMe is a management tool designed specifically for individuals living in shared flats. This intuitive application enables users to create cleaning schedules, allocate tasks among roommates, and customize rules to fit their preferences. For example, roommates can assign specific tasks to particular individuals or rotate them between themselves. They can also set the frequency for each task, whether it be weekly, bi-weekly, or monthly. RoomMe offers a unique family tree feature that shows users who lived in each room and when. The chat function facilitates easy communication among roommates, while the expense tracking feature allows users to monitor costs and split them accordingly. Roommates can add items to a shared grocery list and log purchases in the app. They can specify which roommates the item will be shared with, and the app will provide a clear breakdown of who owes what to whom.",
        features: ["cleaning schedules", "rotation of assigned tasks", "expense tracking", "family tree for rooms",],
        languages: ["Vue.js", "Vuetify", "Webpack", "HTML/CSS/JS"],
        gitHub: "https://github.com/ColePfeiffer/room_me",
        live: "",
      },
      {
        slideName: 2,
        containerTitle: "../work/projects/02/RoomMe",
        date: "2021",
        containerIcon: "fab fa-vuejs",
        containerTitlebarColor: "#ed008c",
        name: "RoomMe",
        subtitle: "Managing tool for shared flats",
        images: ["images/RoomMe_01.png", "images/RoomMe_02.png", "images/RoomMe_04.png", "images/RoomMe_05.png", "images/RoomMe_06.png"],
        description:
          "RoomMe is a management tool designed specifically for individuals living in shared flats. This intuitive application enables users to create cleaning schedules, allocate tasks among roommates, and customize rules to fit their preferences. For example, roommates can assign specific tasks to particular individuals or rotate them between themselves. They can also set the frequency for each task, whether it be weekly, bi-weekly, or monthly. RoomMe offers a unique family tree feature that shows users who lived in each room and when. The chat function facilitates easy communication among roommates, while the expense tracking feature allows users to monitor costs and split them accordingly. Roommates can add items to a shared grocery list and log purchases in the app. They can specify which roommates the item will be shared with, and the app will provide a clear breakdown of who owes what to whom.",
        features: ["cleaning schedules", "rotation of assigned tasks", "expense tracking", "family tree for rooms",],
        languages: ["Vue.js", "Vuetify", "Webpack", "HTML/CSS/JS"],
        gitHub: "https://github.com/ColePfeiffer/room_me",
        live: "",
      },
      // Add more projects here...
    ];
    onMounted(() => {
      console.log("myheader mounted");
      console.log(slide.value);
      console.log(projects);
    });

    return {
      slide,
      projects,
    };
  },
  methods: {
    test() {
      console.log(this.slide);
    },
  },
});
</script>

<style>
.carousel {
  padding-top: 50px;
  /* adjust the value as needed */
  padding-left: 0px !important;
  padding-right: 0px;
}

.q-carousel__prev-arrow,
.q-carousel__next-arrow {
  position: absolute;
  left: 15%;
  top: 50%;
  transform: translateY(-50%);
  pointer-events: auto;
}


.q-carousel__next-arrow {
  left: auto;
  right: 15%;
}

.q-carousel__navigation-icon,
.q-carousel__navigation-icon--active {
  pointer-events: auto;
}
</style>
