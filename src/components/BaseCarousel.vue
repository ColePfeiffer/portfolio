<template>
  <q-carousel v-model="slide" transition-prev="slide-down" transition-next="slide-up" swipeable animated
    navigation-icon="radio_button_unchecked" navigation navigation-position="top"
    class="bg-transparent full-height carousel" style="pointer-events: none;" ref="carousel">
    <slot></slot>
    <template v-slot:control>
      <q-carousel-control position="top" :offset="[18, 455]" class="q-gutter-xs" style="position: absolute">
        <q-btn class="arrow-left" flat round dense icon="mdi-chevron-left" @click="$refs.carousel.previous()"
          :style="leftArrowSpacing" />
        <q-btn class="arrow-right" flat round dense icon="mdi-chevron-right" @click="$refs.carousel.next()"
          :style="rightArrowSpacing" />
      </q-carousel-control>
    </template>
  </q-carousel>
</template>

<script>
import { defineComponent, ref, onMounted } from "vue";
import { Screen } from 'quasar'

export default defineComponent({
  name: "BaseCarousel",
  setup() {
    var slide = ref(1);
    return {
      slide,
    };
  },
  methods: {
  },
  computed: {
    calculatedSpacing() {
      // lt less than, gt greater than
      if (Screen.xs) {
        return "-5%";
      } else if (Screen.lt.md) {
        return "-3%";
      } else if (Screen.md) {
        return "0%";
      } else {
        return "15%";
      }
    },
    leftArrowSpacing() {
      let obj = {};
      obj.left = this.calculatedSpacing;
      return obj;
    },
    rightArrowSpacing() {
      let obj = {};
      obj.right = this.calculatedSpacing;
      return obj;
    }
  }
});
</script>

<style>
.carousel {
  padding-top: 50px;
  padding-left: 0px !important;
  padding-right: 0px;
}

.arrow-left,
.arrow-right {
  position: absolute;
  transform: translateY(-50%);
  pointer-events: auto;
  text-shadow: purple 1px 1px 3px;
}

.arrow-right {
  left: auto;
}

.q-carousel__navigation-icon,
.q-carousel__navigation-icon--active {
  pointer-events: auto;
}
</style>
