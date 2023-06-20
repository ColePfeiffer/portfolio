<template>
  <q-dialog class="project-image-modal fullscreen-dialog full-width"
    style="background-color: rgba(0, 0, 0, 0.5); backdrop-filter: blur(13px)">
    <q-page class="full-height full-width column justify-center ">
      <div class="row image-viewer-navigation-bar absolute-top justify-between text-center items-center">
        <div class="col-1">
          <q-btn color="white" flat round dense :icon="leftButtonIcon" @click="goBack" />
        </div>
        <div class="col-10 text-white text-shadow-3 monospace image-description">
          {{ imageDescription }}
        </div>
        <div class="col-1">
          <q-btn color="white" flat round dense :icon="rightButtonIcon" @click="goForward" />
        </div>
      </div>
      <q-img :src="images[currentImageIndex].src" fit="scale-down" class="fullscreen-image absolute-center"
        style="margin-top: 20px; z-index: 100">
        <div class="fit bg-transparent" style="pointer-events: none">
          <div class="overlay left bg-transparent" @click="goBack" :class="{ 'zoom-out': !hasPrevImage }"></div>
          <div class="overlay right bg-transparent" @click="goForward" :class="{ 'zoom-out': !hasNextImage }"></div>
        </div>
      </q-img>

    </q-page>
  </q-dialog>
</template>

<script>
export default {
  name: "DialogImageViewer",
  emits: ["goBack", "goForward"],
  props: {
    images: {
      type: Array,
      required: true,
    },
    currentImageIndex: {
      type: Number,
      required: true,
    },
  },
  methods: {
    goBack() {
      this.$emit("goBack");
    },
    goForward() {
      this.$emit("goForward");
    },
  },
  computed: {
    imageDescription() {
      if (this.$i18n.locale === 'en-US') {
        return this.images[this.currentImageIndex].description.en;
      } else {
        return this.images[this.currentImageIndex].description.de;
      }
    },
    leftButtonIcon() {
      if (this.hasPrevImage) {
        return "mdi-chevron-left";
      } else {
        return "mdi-close";
      }
    },
    rightButtonIcon() {
      if (this.hasNextImage) {
        return "mdi-chevron-right";
      } else {
        return "mdi-close";
      }
    },
    hasPrevImage() {
      return this.currentImageIndex > 0;
    },
    hasNextImage() {
      return this.currentImageIndex < this.images.length - 1;
    },
  },
};
</script>

<style scoped>
.image-description {
  font-family: monospace;
  text-align: justify;
  display: flex;
  justify-content: center;
  align-items: center;
}

.fullscreen-image {
  max-width: 100%;
  max-height: 95%;
}

.monospace {
  font-family: monospace;
}

.image-viewer-navigation-bar {
  pointer-events: auto;
}

.project-image-modal {
  height: 100vh;
  overflow: hidden;
}

.overlay {
  position: absolute;
  width: 35%;
  height: 80%;
  cursor: pointer;
  pointer-events: auto;
  margin-top: 4%;
}

.left {
  left: 0;
}

.right {
  right: 0;
}

.zoom-out {
  cursor: zoom-out;
}
</style>
