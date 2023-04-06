<template>
  <div class="window">
    <div class="title-bar">
      <!-- Icon and title of window -->
      <div class="title-bar-text">
        <q-icon :name="icon" class="icon" />
        {{ title }}
      </div>
      <!-- Buttons -->
      <div class="title-bar-controls">
        <button class="close" @click="$router.push('/')">
          <q-icon name="mdi-close" size="16px" class="text-black " />
        </button>
      </div>
    </div>
    <div class="window-body">
      <slot></slot>
    </div>
  </div>
</template>
<script>
export default {
  name: "baseContainer",
  props: {
    title: {
      type: String,
      default: "Window Title",
    },
    icon: {
      type: String,
      default: "",
    },
  },
};
</script>
<style scoped>
.window {

  background-color: #fff;
  border: 2px solid #000;
  box-shadow: 3px 3px #000;
  margin: 20px auto;
}

.title-bar {
  position: relative;
  height: 22px;
  background-color: #c0c0c0;
  border-bottom: 2px solid #000;
  padding: 3px;
  font-size: 12px;
  font-weight: bold;
  color: #000;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.title-bar-text {
  display: flex;
  align-items: center;
  font-family: "VT323", monospace;
}

.icon {
  height: 16px;
  margin-right: 5px;
}

.title-bar-controls {
  display: flex;
  align-items: center;
}

.close {
  width: 16px;
  height: 16px;
  background-color: #ff0000;
  border: 1.7px solid #181818;
  margin-left: 5px;
  display: flex;
  justify-content: center;
  align-items: center;
}

.close:hover {
  cursor: pointer;
}

.window-body {
  padding: 10px;
  font-size: 14px;
}
</style>
