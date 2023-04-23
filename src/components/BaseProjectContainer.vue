<template>
  <div>
    <q-card class="q-mb-md q-card">
      <q-img :src="image" class="project-image q-pa-md" @click="showImageModal = true" />
      <q-card-section>
        <div class="project-name text-h3">{{ name }}</div>
        <div class="project-subtitle text-caption col-6 text-weight-bold">
          {{ subtitle }}
        </div>


        <!-- small screens -->
        <div class="row justify-between q-mt-md lt-sm ">
          <div class="col-auto">
            <div class="project-languages text-subtitle2">Languages</div>
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
        <!-- large screens -->
        <div class="row justify-between items-center q-mt-md gt-xs">
          <div class="col-auto">
            <div class="project-subitem-title text-subtitle2 ">Languages</div>
          </div>
          <div class="col">
            <div class="project-subitem-title text-body-1  text-right text-positive">
              {{ languages.join(", ") }}
            </div>
          </div>
        </div>




        <div class="project-description text-body-1 q-mt-md">{{ description }}</div>

        <!-- Features -->
        <div class="row justify-between vertical-top  q-mt-md gt-xs">
          <div class="col-6">
            <div class="project-subitem-title text-subtitle2">Features</div>
          </div>
          <div class="col text-right">
            <div class="text-body-1 " v-for="(feature, index) in features" :key="index">
              {{ feature }}
            </div>
          </div>
        </div>




        <q-dialog v-model="showImageModal" class="project-image-modal">
          <q-img :src="images[currentImageIndex]" class="q-pa-md" />
          <q-card-actions class="justify-center">
            <q-btn label="Prev" color="primary" class="q-mr-md" @click="prevImage" v-if="hasPrevImage" />
            <q-btn label="Next" color="primary" class="q-ml-md" @click="nextImage" v-if="hasNextImage" />
            <q-btn label="Close" color="primary" @click="showImageModal = false" />
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
      images: [this.image],
      currentImageIndex: 0,
    };
  },
  props: {
    name: {
      type: String,
      required: true,
    },
    image: {
      type: String,
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
  },
  computed: {
    hasPrevImage() {
      return this.currentImageIndex > 0;
    },
    hasNextImage() {
      return this.currentImageIndex < this.images.length - 1;
    },
  },
  methods: {
    nextImage() {
      if (this.hasNextImage) {
        this.currentImageIndex++;
      }
    },
    prevImage() {
      if (this.hasPrevImage) {
        this.currentImageIndex--;
      }
    },
  },
  watch: {
    image() {
      this.images = [this.image];
      this.currentImageIndex = 0;
    },
  },
};
</script>

<style scoped>
.q-card {
  border: none;
  box-shadow: none;
  border-radius: 0px;

}

.project-name {
  font-weight: 700;
  margin-top: 12px;
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



.project-image-modal {
  max-width: 90vw;
  max-height: 90vh;
}
</style>
