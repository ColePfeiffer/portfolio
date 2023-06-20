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
@import url("https://fonts.googleapis.com/css?family=Roboto+Condensed");
@import url("https://fonts.googleapis.com/css2?family=Montserrat:wght@400;700&display=swap");
@import url("https://fonts.googleapis.com/css2?family=Source+Sans+Pro&display=swap");

html,
body {
  font-family: "Roboto", sans-serif;
}

a:visited {
  color: #009999;
}

.roboto {
  font-family: "Roboto", sans-serif;
}

.monospace {
  font-family: monospace;
}

.montserrat {
  font-family: "Montserrat", sans-serif;
}

.source-sans-pro {
  font-family: "Source Sans Pro", sans-serif;
}

#app {
  font-family: "Roboto", sans-serif;
}
</style>
