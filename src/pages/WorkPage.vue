<template>
  <BaseCarousel :projectCount="projects.length">
    <q-carousel-slide v-for="(project, index) in projects" :key="index" :name="project.slideName"
      class="column no-wrap flex-center carousel-slide">
      <CarouselSlide>
        <BaseContainer :title="t('projectPath', { msg: project.containerTitle })" :icon="project.containerIcon"
          :isDraggable="false" :titlebarColor="project.containerTitlebarColor" style="background-color: whitesmoke"
          :hasExpandButton="false" @close="redirectToIndex">
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
import { projects } from "../data/projects.js";

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
