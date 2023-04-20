<template>
  <BaseContainer
    :title="containerTitle"
    :icon="containerIcon"
    :titlebarColor="containerTitlebarColor"
  >
    <div class="row justify-center items-center">
      <div class="col-0.5" style="width: 5%"></div>
      <div class="col-11" style="width: 90%">
        <BaseProjectContainer
          :name="projectName"
          :image="projectImage"
          :description="projectDescription"
          :features="projectFeatures"
          :languages="projectLanguages"
        />
      </div>
      <div class="col-0.5" style="width: 5%"></div>
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
    projectImage: String,
    projectDescription: String,
    projectFeatures: Array,
    projectLanguages: Array,
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
