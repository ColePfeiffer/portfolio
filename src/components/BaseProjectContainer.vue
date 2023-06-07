<template>
  <div>
    <q-card class="q-mb-md q-card" style="background-color: whitesmoke">
      <!-- Image and video -->
      <q-img v-if="!images[currentImageIndex].isVideo" :ratio="4 / 3" :fit="images[currentImageIndex].fit"
        :src="images[currentImageIndex].src" class="project-image " @click="showImageModal = true" />
      <div v-else>
        <q-video :src="images[currentImageIndex].src" @click.prevent />
      </div>
      <!-- Navigation buttons for when there is at least one video to display -->
      <div class="justify-center items-center row">
        <q-btn icon="mdi-chevron-left" flat dense class="nav-button-for-video col-1 text-left" @click="prevImage"
          :style="hasPrevImage ? 'visibility:visible' : 'visibility:hidden'" />
        <div class="col-10 text-center image-description">
          {{ images[currentImageIndex].description }}
        </div>
        <q-btn icon="mdi-chevron-right" flat dense class="nav-button-for-video col-1 text-right" @click="nextImage"
          :style="hasNextImage ? 'visibility:visible' : 'visibility:hidden'" />
      </div>
      <q-card-section>
        <!-- Name -->
        <div class="project-name text-h3">{{ name }}</div>
        <!-- Subtitle -->
        <div class="project-subtitle text-caption col-6 text-weight-bold q-mb-md">
          {{ $t(`${projectName}.subtitle`) }}
        </div>
        <q-separator />
        <!-- Date -->
        <div class="row quart-3 justify-between items-center">
          <div class="col-auto">
            <div class="project-subitem-title">
              {{ $t("projectData.date") }}
            </div>
          </div>
          <div class="col">
            <div class="text-body-1 text-right">
              {{ date }}
            </div>
          </div>
        </div>
        <q-separator />
        <!-- Languages  -->
        <div class="row quart-3 justify-between q-mt-xs">
          <div class="col-auto">
            <div class="project-subitem-title">
              {{ $t("projectData.languages") }}
            </div>
          </div>
          <div class="col text-right">
            <div class="text-body-1" style="white-space: pre-wrap">
              {{ formattedLanguages }}
            </div>
          </div>
        </div>
        <q-separator />
        <!-- Features -->
        <div class="row quart-3 justify-between q-mt-xs">
          <div class="col-auto">
            <div class="project-subitem-title">Features</div>
          </div>
          <div class="col text-right">
            <div class="text-body-1" style="white-space: pre-wrap">
              {{ formattedFeatures }}
            </div>
          </div>
        </div>
        <q-separator />
        <!-- Links -->
        <div class="row quart-3 justify-between q-mt-xs">
          <div class="col-auto">
            <div class="project-subitem-title">Links</div>
          </div>
          <div class="col text-right">
            <div class="col text-right">
              <div v-if="live != ''">
                <a :href="live" target="_blank" style="text-decoration: none">
                  <q-icon name="fas fa-globe-americas" />
                  Live
                </a>
              </div>
              <a :href="gitHub" target="_blank" style="text-decoration: none">
                <q-icon name="fab fa-github" />
                Git Repository
              </a>
            </div>
          </div>
        </div>
        <q-separator />
        <!-- Description -->
        <div class="project-description text-body-1 q-mt-md text-justify" style="white-space: pre-wrap">
          {{ $t(`${projectName}.description`) }}
        </div>
        <!-- DIALOG... TODO: auslagern! -->
        <q-dialog v-model="showImageModal" class="project-image-modal fullscreen-dialog" style="
            background-color: rgba(0, 0, 0, 0.5);
            backdrop-filter: blur(13px);
          ">
          <q-page class="full-height full-width column justify-center">
            <div class="row justify-between text-center items-center" style="pointer-events: auto;">
              <div class="col-1">
                <q-btn color="white" flat round dense :icon="leftButtonIcon" @click="prevImage" />
              </div>
              <div class="col-10 text-white text-shadow-3 " style="font-family: monospace">
                {{ images[currentImageIndex].description }}
              </div>
              <div class="col-1">
                <q-btn color="white" flat round dense :icon="rightButtonIcon" @click="nextImage" />
              </div>
            </div>
            <q-img :src="images[currentImageIndex].src" fit="contain" class="fullscreen-image" />
          </q-page>
        </q-dialog>
      </q-card-section>
    </q-card>
  </div>
</template>

<script>
import { Screen } from "quasar";
import { useI18n } from "vue-i18n";

export default {
  name: "BaseProjectContainer",
  setup() {
    const { t } = useI18n(); // use as global scope
    const { tm } = useI18n();
    return {
      t,
      tm,
    };
  },
  data() {
    return {
      showImageModal: false,
      currentImageIndex: 0,
    };
  },
  props: {
    name: {
      type: String,
      required: true,
    },
    path: {
      type: String,
      required: true,
    },
    images: {
      type: Array,
      required: true,
    },
    languages: {
      type: Array,
      required: true,
    },
    date: {
      type: String,
      required: true,
    },
    gitHub: {
      type: String,
      required: true,
    },
    live: {
      type: String,
      required: true,
    },
  },
  computed: {
    calculatedSpacing() {
      // lt less than, gt greater than
      if (Screen.xs) {
        return "-5%";
      } else if (Screen.sm) {
        return "0%";
      } else if (Screen.lt.md) {
        return "5%";
      } else if (Screen.md) {
        return "15%";
      } else {
        return "24%";
      }
    },
    features() {
      return this.tm(this.projectName + ".features");
    },
    projectName() {
      return this.path;
    },
    isXS() {
      if (Screen.xs) {
        return true;
      } else {
        return false;
      }
    },
    formattedFeatures() {
      if (this.isXS) {
        return this.features.join("\n");
      } else {
        return (
          this.features
            .slice(0, Math.ceil(this.features.length / 2))
            .join(", ") +
          "\n" +
          this.features.slice(Math.ceil(this.features.length / 2)).join(", ")
        );
      }
    },
    formattedLanguages() {
      if (this.isXS) {
        let languages =
          this.languages
            .slice(0, Math.ceil(this.languages.length / 2))
            .join(", ") +
          "\n" +
          this.languages.slice(Math.ceil(this.languages.length / 2)).join(", ");
        return languages;
      } else {
        return this.languages.join(", ");
      }
    },
    hasPrevImage() {
      return this.currentImageIndex > 0;
    },
    hasNextImage() {
      return this.currentImageIndex < this.images.length - 1;
    },
    hasAtLeastOneVideo() {
      if (this.images.filter((image) => image.isVideo === true).length > 0) {
        return true;
      } else {
        return false;
      }
    },
    leftButtonIcon() {
      if (this.hasPrevImage) {
        return "mdi-chevron-left";
      } else {
        return 'mdi-close';
      }
    },
    rightButtonIcon() {
      if (this.hasNextImage) {
        return "mdi-chevron-right";
      } else {
        return 'mdi-close';
      }
    }
  },
  methods: {
    nextImage() {
      if (this.hasNextImage) {
        this.currentImageIndex++;
      } else {
        this.showImageModal = false;
      }
    },
    prevImage() {
      if (this.hasPrevImage) {
        this.currentImageIndex--;
      } else {
        this.showImageModal = false;
      }
    },
  },
  watch: {
    image() {
      this.image = [this.images];
      this.currentImageIndex = 0;
    },
  },
};
</script>

<style scoped>
.image-description {
  color: gray;
  font-family: monospace;
  font-size: 12px;
}

.nav-button-for-video {
  color: gray;
}

a:visited {
  color: #009999;
}

.quart-3 {
  font-size: 12px;
  font-family: monospace;
}

.fullscreen-dialog {
  overflow: hidden;
  /* Disables scrolling */
}

.fullscreen-dialog .q-dialog-content {
  overflow: hidden !important;
  /* Hides the scrollbar */
}

.fullscreen-dialog .q-dialog-content::-webkit-scrollbar {
  display: none;
  /* Hides the scrollbar in WebKit browsers */
}

.fullscreen-dialog .q-dialog-content::-moz-scrollbar {
  display: none;
  /* Hides the scrollbar in Firefox */
}

.fullscreen-image {
  max-width: 95%;
  max-height: 95%;
}

.q-card {
  border: none;
  box-shadow: none;
  border-radius: 0px;
}

.project-name {
  font-weight: 700;
  margin-top: 10px;
}

.project-details {
  margin-top: 16px;
}

.project-subtitle {
  color: #607d8b;
}

.project-subitem-title {
  font-weight: 700;
}

.project-description {
  margin-top: 16px;
}

.project-image {
  /* Add this line to set a maximum width */
  width: 100%;
}

.project-image-modal {
  max-width: 100vh;
  max-height: 100vh;
  height: 100vh;
  overflow: hidden;
  /* Update to allow overflow */
}
</style>
