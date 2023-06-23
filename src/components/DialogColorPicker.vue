<template>
  <BaseContainer :title="$t('indexPath') + $t('colors')" :hasExpandButton="false" :titlebarColor="hex" icon="mdi-palette"
    :zIndex="zIndex" @close="closeDialog" minWidth="11rem">
    <q-color square v-model="hex" no-header class="my-picker" />
  </BaseContainer>
</template>
<script>
import { useI18n } from "vue-i18n";
import { ref } from "vue";
import BaseContainer from "src/components/BaseContainer.vue";
import { useThemeStore } from 'src/stores/useThemeStore'

export default {
  name: "DialogColorPicker",
  components: { BaseContainer },
  emits: ["close"],
  props: {
    zIndex: {
      type: Number,
      required: true,
    },
  },
  methods: {
    closeDialog() {
      this.$emit("close");
    },
  },
  setup() {
    const themeStore = useThemeStore();
    const { t } = useI18n(); // use as global scope
    const { tm } = useI18n();
    return {
      t,
      tm,
      hex: ref('#0d0d0d'),
      themeStore
    };
  },
  watch: {
    hex(newColor, oldColor) {
      this.themeStore.setBGColor(newColor)
    },
  },
};
</script>

