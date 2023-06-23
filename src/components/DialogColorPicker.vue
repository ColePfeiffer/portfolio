<template>
  <BaseContainer :title="$t('indexPath') + $t('colors')" :hasExpandButton="false" :titlebarColor="hex" style="color: auto"
    icon="mdi-palette" :zIndex="zIndex" @close="closeDialog">
    <div class="row justify-center ">
      <div class="col-9 fit">
        <q-color v-model="hex" no-header class="my-picker" />
      </div>
    </div>
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
      console.log(oldColor);
      console.log(newColor);
      this.themeStore.setBGColor(newColor)
    },
  },
};
</script>
<style lang="scss" scoped>
@import url("https://fonts.googleapis.com/css2?family=Montserrat:wght@400;700&display=swap");
@import url("https://fonts.googleapis.com/css2?family=Oswald:wght@400;700&display=swap");

$primary: #18181b;
$secondary: #fff001;
$accent: #ed008c;
$info: #03aced;

$textColor: #333333;

$dark: #1d1d1d;
$dark-page: #121212;

$positive: #25e744;
$negative: #ea0201;

$warning: #0000ff;

.highlight {
  color: $accent;
}

.decorative-font {
  font-family: "Montserrat Alternates", sans-serif;
  font-weight: 600;
}

.animate__animated {
  animation-duration: 1s;
}

.animate__pulse {
  animation-name: pulse;
}

@keyframes pulse {
  from {
    transform: scale3d(1, 1, 1);
  }

  50% {
    transform: scale3d(1.05, 1.05, 1.05);
  }

  to {
    transform: scale3d(1, 1, 1);
  }
}

.q-icon {
  transition: all 0.3s ease-in-out;
}

.q-icon:hover {
  transform: scale(1.1);
}
</style>
