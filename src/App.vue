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

@font-face {
  font-family: 'Roboto';
  font-style: normal;
  font-weight: 400;
  src: url('fonts/Roboto/Roboto-Regular.ttf') format('truetype');
}

@font-face {
  font-family: 'Montserrat';
  font-style: normal;
  font-weight: 400;
  src: url('fonts/Montserrat/Montserrat-Regular.ttf') format('truetype');
}

@font-face {
  font-family: 'Source Sans 3';
  font-style: normal;
  font-weight: 400;
  src: url('fonts/Source_Sans_3/SourceSans3-Regular.ttf') format('truetype');
}

.monospace {
  font-family: monospace;
}

#app {
  font-family: "Roboto", sans-serif;
}
</style>
