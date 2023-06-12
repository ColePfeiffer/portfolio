<template>
  <q-btn
    square
    no-caps
    flat
    class="windows-button"
    @click="executeProgram"
    @mouseover="isHovered = true"
    @mouseout="isHovered = false"
  >
    <div class="button-content">
      <q-icon :name="icon" class="icon" color="red" size="2rem" />
      <div class="text" v-if="label">{{ label }}</div>
    </div>
  </q-btn>
</template>

<script>
export default {
  props: {
    icon: {
      type: String,
      default: "mdi-windows",
    },
    label: {
      type: String,
      default: "",
    },
  },
  data() {
    return {
      isHovered: false,
    };
  },
  methods: {
    executeProgram() {
      // Code to execute when the button is clicked
    },
  },
};
</script>

<style scoped>
.windows-button {
  padding: 10px;
  border-radius: 1px;
  color: white;
  cursor: pointer;
  transition: background-color 0.3s;
  border: 1px solid rgba(0, 0, 0, 0);
}

.windows-button:hover {
  background-color: rgba(0, 120, 215, 0.3);
  border: 1px solid rgba(0, 0, 0, 0.1);
}

.button-content {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.text {
  margin-top: 8px;
  font-size: 0.8rem;
  color: white;
  text-shadow: rgb(77, 73, 125) 1px 1px 4px;
}
</style>
