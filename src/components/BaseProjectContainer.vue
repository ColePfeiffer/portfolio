<template>
  <div>
    <div>
      <q-card class="q-mb-md base-project-card">
        <!-- Image and video -->
        <q-img v-if="!images[currentImageIndex].isVideo" :ratio="images[currentImageIndex].ratio"
          :fit="images[currentImageIndex].fit" :src="images[currentImageIndex].src" class="project-image"
          @click="showImageModal = true">
          <template v-slot:loading>
            <q-spinner color="white" :thickness="2" size="2em" />
          </template>
        </q-img>
        <div v-else>
          <q-video loading :src="images[currentImageIndex].src" @click.prevent />
        </div>
        <!-- Navigation buttons for when there is at least one video to display -->
        <div class="justify-center items-center row">
          <q-btn icon="mdi-chevron-left" flat dense class="nav-button-for-video col-1 text-left" @click="goBack"
            :style="hasPrevImage ? 'visibility:visible' : 'visibility:hidden'" />
          <div class="col-10 image-description ">
            {{ imageDescription }}
          </div>
          <q-btn icon="mdi-chevron-right" flat dense class="nav-button-for-video col-1 text-right" @click="goForward"
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
              <div class="text-body-1 languages-features-container">
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
              <div class="text-body-1 languages-features-container">
                {{ formattedFeatures }}
              </div>
            </div>
          </div>
          <q-separator />
          <!-- Links -->
          <div class="row quart-3 justify-between q-mt-xs" v-if="gitHub != ''">
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
          <div class="project-description text-body-1 q-mt-md text-justify">
            {{ $t(`${projectName}.description`) }}
          </div>
        </q-card-section>
      </q-card>
    </div>
    <DialogImageViewer v-model="showImageModal" :images="images" :currentImageIndex="currentImageIndex" @goBack="goBack"
      @goForward="goForward" style="background-size: cover;" />
  </div>
</template>

<script>
import { Screen } from "quasar";
import { useI18n } from "vue-i18n";
import DialogImageViewer from "./DialogImageViewer.vue";

export default {
  name: "BaseProjectContainer",
  components: {
    DialogImageViewer,
  },
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
    imageDescription() {
      if (this.$i18n.locale === 'en-US') {
        return this.images[this.currentImageIndex].description.en;
      } else {
        return this.images[this.currentImageIndex].description.de;
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
  },
  methods: {
    goForward() {
      if (this.hasNextImage) {
        this.currentImageIndex++;
      } else {
        this.showImageModal = false;
      }
    },
    goBack() {
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

<style>
@import "./styles/BaseProjectContainer.css";
</style>
