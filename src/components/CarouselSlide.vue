<template>
  <q-page style="pointer-events: none">
    <div class="row justify-center fit">
      <div
        class="col-6 col-xs-12 col-sm-11 col-md-10 col-lg-7 col-xl-6"
        style="pointer-events: auto"
      >
        <slot></slot>
      </div>
    </div>
  </q-page>
</template>

<script>
import { defineComponent } from "vue";

export default defineComponent({
  name: "CarouselSlide",
  components: {},
  props: {},
});
</script>

<style>
.carousel-slide {
  padding-left: 0px;
  padding-right: 0px;
  padding-top: 0px;
  padding-bottom: 40px;
}
</style>
