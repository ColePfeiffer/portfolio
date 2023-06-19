<template>
  <q-carousel v-model="slide" transition-prev="slide-down" transition-next="slide-up" swipeable animated
    navigation-icon="radio_button_unchecked" navigation navigation-position="top"
    class="bg-transparent full-height carousel" ref="carousel">
    <slot></slot>
    <template v-slot:control>
      <q-carousel-control position="top" class="q-gutter-xs carousel-control">
        <q-btn class="arrow-left" v-if="hasPrevProject" flat round dense icon="mdi-chevron-left"
          @click="$refs.carousel.previous()" :style="leftArrowSpacing" />
        <q-btn class="arrow-right" v-if="hasNextProject" flat round dense icon="mdi-chevron-right"
          @click="$refs.carousel.next()" :style="rightArrowSpacing" />
      </q-carousel-control>
    </template>
  </q-carousel>
</template>

<script>
import { defineComponent, ref } from "vue";
import { Screen } from 'quasar'

export default defineComponent({
  name: "BaseCarousel",
  props: {
    projectCount: {
      type: Number,
      required: true,
    },
  },
  setup() {
    const slide = ref(0);
    return {
      slide,
    };
  },
  methods: {
    generateArrowSpacing(direction) {
      const spacing = this.calculatedSpacing;
      return { [direction]: spacing };
    }
  },
  computed: {
    hasPrevProject() {
      return this.slide > 0;
    },
    hasNextProject() {
      return this.slide < this.projectCount - 1;
    },
    calculatedSpacing() {
      switch (true) {
        case Screen.xs:
          return "-5%";
        case Screen.sm:
          return "0%";
        case Screen.lt.md:
          return "5%";
        case Screen.md:
          return "15%";
        default:
          return "24%";
      }
    },
    leftArrowSpacing() {
      return this.generateArrowSpacing('left');
    },
    rightArrowSpacing() {
      return this.generateArrowSpacing('right');
    }
  }
});
</script>

<style>
.carousel-control {
  position: absolute;
  margin-top: 12px;
}

.carousel {
  padding-top: 38px;
  padding-left: 0px !important;
  padding-right: 0px;
  pointer-events: none;
}

.arrow-left,
.arrow-right {
  position: absolute;
  transform: translateY(-50%);
  pointer-events: auto;
  text-shadow: #9286a5 1px 1px 3px;
}

.arrow-right {
  left: auto;
}

.q-carousel__navigation-icon,
.q-carousel__navigation-icon--active {
  pointer-events: auto;
}

.q-carousel__navigation {
  margin-top: -18px;
}
</style>
