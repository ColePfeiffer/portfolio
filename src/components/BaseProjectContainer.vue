<template>
  <div>
    <q-card class="q-mb-md q-card" style="background-color: whitesmoke;">
      <!-- Image and video -->
      <q-img v-if="!images[currentImageIndex].isVideo" :src="images[currentImageIndex].src" class="project-image "
        @click="showImageModal = true" :options="{ imgClass: 'my-image-class', imgStyle: 'object-fit: contain;' }" />
      <div v-else>
        <q-video :src="images[currentImageIndex].src" @click.prevent />
      </div>
      <!-- Navigation buttons for when there is at least one video to display -->
      <div v-if="hasAtLeastOneVideo" class="justify-center items-center row">
        <q-btn icon="mdi-chevron-left" flat dense class="nav-button-for-video col-1 text-left" @click="prevImage"
          :style="hasPrevImage ? 'visibility:visible' : 'visibility:hidden'" />
        <div class="col-10 text-center image-description">
          {{ images[currentImageIndex].description }}
        </div>
        <q-btn icon="mdi-chevron-right" flat dense class="nav-button-for-video col-1 text-right" @click="nextImage"
          :style="hasNextImage ? 'visibility:visible' : 'visibility:hidden'" />
      </div>
      <q-card-section>
        <div class="project-name text-h3">{{ name }}</div>
        <div class="project-subtitle text-caption col-6 text-weight-bold">
          {{ subtitle }}
        </div>
        <div class="q-mt-md"></div>
        <q-separator />
        <!-- Date -->
        <div class="row quart-3 justify-between items-center  gt-xs">
          <div class="col-auto">
            <div class="project-subitem-title  ">Date</div>
          </div>
          <div class="col">
            <div class="text-body-1  text-right">
              {{ date }}
            </div>
          </div>
        </div>
        <q-separator />
        <!-- Languages on small screens -->
        <div class="row quart-3 justify-between q-mt-xs lt-sm ">
          <div class="col-auto">
            <div class="project-languages">Languages</div>
          </div>
          <div class="col text-right text-positive">
            <div class="project-languages text-body-1">
              {{ languages.slice(0, Math.ceil(languages.length / 2)).join(", ") }}
            </div>
            <div class="project-languages text-body-1">
              {{ languages.slice(Math.ceil(languages.length / 2)).join(", ") }}
            </div>
          </div>
        </div>

        <!-- Languages on large screens -->
        <div class="row quart-3 justify-between items-center q-mt-xs gt-xs">
          <div class="col-auto">
            <div class="project-subitem-title  ">Languages</div>
          </div>
          <div class="col">
            <div class="project-subitem-title text-body-1  text-right">
              {{ languages.join(", ") }}
            </div>
          </div>
        </div>
        <q-separator />
        <!-- Features -->
        <div class="row quart-3 justify-between q-mt-xs gt-xs">
          <div class="col-auto">
            <div class="project-subitem-title">Features</div>
          </div>
          <div class="col text-right ">
            <div class="text-body-1">
              {{ features.slice(0, Math.ceil(features.length / 2)).join(", ") }}
            </div>
            <div class="text-body-1">
              {{ features.slice(Math.ceil(features.length / 2)).join(", ") }}
            </div>
          </div>
        </div>
        <q-separator />
        <div class="row quart-3 justify-between q-mt-xs gt-xs">
          <div class="col-auto">
            <div class="project-subitem-title">Links</div>
          </div>
          <div class="col text-right ">
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
        <div class="project-description text-body-1 q-mt-md text-justify">{{ description }}</div>

        <q-dialog v-model="showImageModal" class="project-image-modal"
          style="background-color: rgba(0, 0, 0, 0.5);
                                                                                                                                                                                          backdrop-filter: blur(5px);">

          <q-img v-if="!images[currentImageIndex].isVideo" :src="images[currentImageIndex].src" class="q-pa-md" />
          <q-video v-else class="fit" src="https://drive.google.com/file/d/1S4EIoc8cpTn7_1LdPCVabsm04QEgg3ZT/preview" />
          <q-card-actions class="justify-center q-mt-md col-12"
            style="position: absolute; bottom: 20px; left: 50%; transform: translateX(-50%);">
            <q-btn label="Prev" color="primary" class="q-mr-md" @click="prevImage" v-if="hasPrevImage" />
            <q-btn label="Next" color="primary" class="q-ml-md" @click="nextImage" v-if="hasNextImage" />
          </q-card-actions>
        </q-dialog>
      </q-card-section>
    </q-card>
  </div>
</template>

<script>
export default {
  name: "BaseProjectContainer",
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
    images: {
      type: Array,
      required: true,
    },
    subtitle: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    features: {
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
    }
  },
  computed: {
    hasPrevImage() {
      console.log("hasprevimage....", this.currentImageIndex)
      return this.currentImageIndex > 0;
    },
    hasNextImage() {
      console.log("hasNextImage....", this.currentImageIndex)
      return this.currentImageIndex < this.images.length - 1;
    },
    hasAtLeastOneVideo() {
      if (this.images.filter(image => image.isVideo === true).length > 0) {
        return true;
      } else {
        return false;
      }
    }
  },
  methods: {
    nextImage() {
      console.log("nextImage....", this.currentImageIndex)
      if (this.hasNextImage) {
        this.currentImageIndex++;
      }
    },
    prevImage() {
      console.log("prevImage....", this.currentImageIndex)
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
  max-height: 450px;
}

.project-image-modal {
  max-width: 90vw;
  max-height: 90vh;
}
</style>

