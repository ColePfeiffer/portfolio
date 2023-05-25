<template>
  <div class="language-switcher">
    <q-btn
      padding="0"
      flat
      class="language-switcher-button"
      :class="{ active: $i18n.locale === 'en-US' }"
      @click="switchLocale('en-US')"
      >EN</q-btn
    >
    <div class="q-px-xs">|</div>
    <q-btn
      padding="0"
      flat
      class="language-switcher-button"
      :class="{ active: $i18n.locale === 'de-DE' }"
      @click="switchLocale('de-DE')"
      >DE</q-btn
    >
  </div>
</template>

<script>
export default {
  methods: {
    switchLocale(locale) {
      this.$i18n.locale = locale;
    },
  },
};
</script>

<style>
.language-switcher {
  display: flex;
  font-size: 11px;
}

.language-switcher-button {
  color: #7573db;
  font-size: 11px;
  text-shadow: #7776d0 0px 0px 1px;
  border: none;
  background-color: transparent;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  margin-left: 0.1rem;
}

.language-switcher button:first-child {
  margin-left: 0;
}

.language-switcher button.active {
  color: #fff;
  font-weight: bold;
  text-shadow: 0 0 3px rgba(17, 0, 255, 0.5);
}
</style>
