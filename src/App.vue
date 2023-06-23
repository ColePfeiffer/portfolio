<template>
  <router-view />
</template>

<script>
import { defineComponent } from "vue";

export default defineComponent({
  name: "App",
});
</script>

<style>
html,
body {
  font-family: "Roboto", sans-serif;
}

a:visited {
  color: #009999;
}

.monospace {
  font-family: monospace;
}

#app {
  font-family: "Roboto", sans-serif;
}
</style>
