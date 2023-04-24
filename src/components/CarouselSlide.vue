<template>
  <BaseContainer :title="containerTitle" :icon="containerIcon" :titlebarColor="containerTitlebarColor"
    style="background-color: whitesmoke;">
    <div class="row justify-center items-center">
      <div class="col-0.5" style="width: 3%"></div>
      <div class="col-11" style="width: 94%">
        <BaseProjectContainer :name="projectName" :subtitle="projectSubtitle" :images="projectImages"
          :description="projectDescription" :features="projectFeatures" :languages="projectLanguages" :date="projectDate"
          :gitHub="projectGitHub" :live="projectLive" />
      </div>
      <div class="col-0.5" style="width: 3%"></div>
    </div>
  </BaseContainer>
</template>

<script>
import BaseContainer from "src/components/BaseContainer.vue";
import BaseProjectContainer from "src/components/BaseProjectContainer.vue";
import { defineComponent } from "vue";

export default defineComponent({
  name: "CarouselSlide",
  components: { BaseContainer, BaseProjectContainer },
  props: {
    slideName: Number,
    containerTitle: String,
    containerIcon: String,
    containerTitlebarColor: String,
    projectName: String,
    projectDate: String,
    projectSubtitle: String,
    projectImages: Array,
    projectDescription: String,
    projectFeatures: Array,
    projectLanguages: Array,
    projectGitHub: String,
    projectLive: String,
  },
});
</script>

<style>
.carousel-slide {
  padding-left: 5px;
  padding-right: 5px;
  padding-top: 0px;
  padding-bottom: 40px;
}
</style>
