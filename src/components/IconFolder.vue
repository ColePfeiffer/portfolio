<template>
  <div class="row justify-center q-pa-md">
    <div class="col-12 q-pa-sm q-mt-sm text-justify">
      {{ $t("welcomeText") }}
      <WindowsButton icon="mdi-folder" label="Colorbucket" />
    </div>
  </div>
</template>
<script>
import { useI18n } from "vue-i18n";
import WindowsButton from "./WindowsButton.vue";

export default {
  name: "WelcomeMessage",
  components: {
    WindowsButton,
  },
  setup() {
    const { t } = useI18n(); // use as global scope
    const { tm } = useI18n();
    return {
      t,
      tm,
    };
  },
};
</script>
<style lang="scss" scoped></style>
