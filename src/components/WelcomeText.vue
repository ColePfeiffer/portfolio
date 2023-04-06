<template>
  <div class="welcome-message">
    <span class="decorative-font">Hello</span>, and <span class="highlight">welcome</span> to my
    <span class="decorative-font">portfolio</span>.
  </div>
</template>

<script>
export default {
  name: "WelcomeMessage",
};
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Montserrat:wght@400;700&display=swap");
@import url("https://fonts.googleapis.com/css2?family=Oswald:wght@400;700&display=swap");

.welcome-message {
  font-size: 1.5rem;
  text-align: center;
  margin: 0.5rem;
  padding: 0.5rem;
}

.highlight {
  color: #f9e814;
}

.decorative-font {
  font-family: 'Montserrat Alternates', sans-serif;
  font-weight: 600;
}
</style>
