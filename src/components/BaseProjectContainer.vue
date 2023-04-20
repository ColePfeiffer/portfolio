<template>
  <div class="q-pa-xs">
    <q-card class="q-mb-md">
      <q-img :src="image" class="q-pa-md" />
      <q-card-section>
        <div class="text-h5">{{ name }}</div>
        <div class="row">
          <div class="text-caption col-6 text-weight-bold q-mt-xs">
            subtitle
          </div>
          <div class="text-body-1 col-6 text-right q-mt-sm text-positive">
            {{ languages.join(", ") }}
          </div>
        </div>
        <div class="text-body-1 q-mt-md">{{ description }}</div>

        <div class="text-subtitle2 q-mt-md">Features:</div>
        <ul class="q-mt-sm">
          <li
            class="text-body-1 q-mt-sm"
            v-for="(feature, index) in features"
            :key="index"
          >
            {{ feature }}
          </li>
        </ul>
      </q-card-section>
    </q-card>
  </div>
</template>

<script>
export default {
  name: "BaseProjectContainer",
  props: {
    name: {
      type: String,
      required: true,
    },
    image: {
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
};
</script>

<style scoped></style>
