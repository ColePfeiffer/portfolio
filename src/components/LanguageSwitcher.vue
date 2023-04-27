<template>
  <div>
    <button @click="switchLocale('en-US')">EN</button>
    <button @click="switchLocale('de-DE')">DE</button>
  </div>
</template>

<script>
export default {
  methods: {
    switchLocale(locale) {
      this.$i18n.locale = locale
    }
  }
}
</script>
