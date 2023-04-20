<template>
  <q-page>
    <div class="row justify-center">
      <div class="col-6 col-xs-12 col-md-6">
        <q-carousel
          v-model="slide"
          transition-prev="slide-down"
          transition-next="slide-up"
          swipeable
          animated
          control-color="green"
          prev-icon="mdi-chevron-left"
          next-icon="mdi-chevron-right"
          navigation-icon="radio_button_unchecked"
          navigation
          arrows
          class="bg-transparent full-height q-px-xs carousel"
          @before-transition="test"
        >
          <q-carousel-slide
            v-for="(project, index) in projects"
            :key="index"
            :name="project.slideName"
            class="column no-wrap flex-center carousel-slide"
          >
            <CarouselSlide
              :slideName="project.slideName"
              :containerTitle="project.containerTitle"
              :containerIcon="project.containerIcon"
              :containerTitlebarColor="project.containerTitlebarColor"
              :projectName="project.projectName"
              :projectImage="project.projectImage"
              :projectDescription="project.projectDescription"
              :projectFeatures="project.projectFeatures"
              :projectLanguages="project.projectLanguages"
            />
          </q-carousel-slide>
        </q-carousel>
      </div>
    </div>
  </q-page>
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
        containerTitle: "Project 1",
        containerIcon: "mdi-code-braces",
        containerTitlebarColor: "#ed008c",
        projectName: "Project 1",
        projectImage: "https://via.placeholder.com/300x200.png",
        projectDescription:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nunc ut aliquam tincidunt, nunc nisl aliquam nis",
        projectFeatures: ["Feature 1", "Feature 2", "Feature 3"],
        projectLanguages: ["Language 1", "Language 2", "Language 3"],
      },
      {
        slideName: 2,
        containerTitle: "Project 2",
        containerIcon: "mdi-code-braces",
        containerTitlebarColor: "#ed008c",
        projectName: "Project 2",
        projectImage: "https://via.placeholder.com/300x200.png",
        projectDescription:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nunc ut aliquam tincidunt, nunc nisl aliquam nis",
        projectFeatures: ["Feature 1", "Feature 2", "Feature 3"],
        projectLanguages: ["Language 1", "Language 2", "Language 3"],
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
  padding-top: 0px; /* adjust the value as needed */
  padding-left: 0px !important;
  padding-right: 0px;
}

.q-carousel__prev-arrow {
  left: 3px !important;
  top: 1px;
}

.q-carousel__next-arrow {
  right: 3px !important;
  top: 1px;
}
</style>
