<template>
  <div>
    <q-card class="q-mb-md q-card" style="background-color: whitesmoke">
      <!-- Image and video -->
      <q-img
        v-if="!images[currentImageIndex].isVideo"
        :src="images[currentImageIndex].src"
        class="project-image"
        @click="showImageModal = true"
        :options="{
          imgClass: 'my-image-class',
          imgStyle: 'object-fit: contain;',
        }"
      />
      <div v-else>
        <q-video :src="images[currentImageIndex].src" @click.prevent />
      </div>
      <!-- Navigation buttons for when there is at least one video to display -->
      <div v-if="hasAtLeastOneVideo" class="justify-center items-center row">
        <q-btn
          icon="mdi-chevron-left"
          flat
          dense
          class="nav-button-for-video col-1 text-left"
          @click="prevImage"
          :style="hasPrevImage ? 'visibility:visible' : 'visibility:hidden'"
        />
        <div class="col-10 text-center image-description">
          {{ images[currentImageIndex].description }}
        </div>
        <q-btn
          icon="mdi-chevron-right"
          flat
          dense
          class="nav-button-for-video col-1 text-right"
          @click="nextImage"
          :style="hasNextImage ? 'visibility:visible' : 'visibility:hidden'"
        />
      </div>
      <q-card-section>
        <!-- Name -->
        <div class="project-name text-h3">{{ name }}</div>
        <!-- Subtitle -->
        <div
          class="project-subtitle text-caption col-6 text-weight-bold q-mb-md"
        >
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
        <div
          class="project-description text-body-1 q-mt-md text-justify"
          style="white-space: pre-wrap"
        >
          {{ $t(`${projectName}.description`) }}
        </div>
        <!-- DIALOG... TODO: auslagern! -->
        <q-dialog
          v-model="showImageModal"
          class="project-image-modal"
          style="
            background-color: rgba(0, 0, 0, 0.5);
            backdrop-filter: blur(5px);
          "
        >
          <q-img
            v-if="!images[currentImageIndex].isVideo"
            :src="images[currentImageIndex].src"
            class="q-pa-md"
          />
          <q-video
            v-else
            class="fit"
            src="https://drive.google.com/file/d/1S4EIoc8cpTn7_1LdPCVabsm04QEgg3ZT/preview"
          />
          <q-card-actions
            class="justify-center q-mt-md col-12"
            style="
              position: absolute;
              bottom: 20px;
              left: 50%;
              transform: translateX(-50%);
            "
          >
            <q-btn
              label="Prev"
              color="primary"
              class="q-mr-md"
              @click="prevImage"
              v-if="hasPrevImage"
            />
            <q-btn
              label="Next"
              color="primary"
              class="q-ml-md"
              @click="nextImage"
              v-if="hasNextImage"
            />
          </q-card-actions>
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
      console.log("hasprevimage....", this.currentImageIndex);
      return this.currentImageIndex > 0;
    },
    hasNextImage() {
      console.log("hasNextImage....", this.currentImageIndex);
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
    nextImage() {
      console.log("nextImage....", this.currentImageIndex);
      if (this.hasNextImage) {
        this.currentImageIndex++;
      }
    },
    prevImage() {
      console.log("prevImage....", this.currentImageIndex);
      if (this.hasPrevImage) {
        this.currentImageIndex--;
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
  max-height: 100%;
  max-width: 100%; /* Add this line to set a maximum width */
}

.project-image-modal {
  max-width: 90vw;
  max-height: 90vh;
  overflow: auto; /* Update to allow overflow */
}
</style>
