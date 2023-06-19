<template>
  <BaseContainer
    :title="$t('indexPath')"
    titlebarColor="#fa8072"
    icon="mdi-home"
    width="600px"
    :zIndex="zIndex"
    @close="closeDialog"
  >
    <div class="q-pa-sm">
      <div class="row justify-center q-pa-md">
        <div class="welcome-message q-pa-sm col-12">
          <span class="decorative-font">{{ $t("welcomeTitle") }}</span>
          <q-icon
            name="code"
            size="1.7em"
            color="secondary"
            class="q-ml-sm q-mr-sm"
          ></q-icon>
          <q-icon name="fab fa-vuejs" size="1.7em" color="dark"></q-icon>
        </div>

        <div class="col-12 q-pa-sm q-mt-sm text-justify">
          {{ $t("welcomeText") }}
        </div>
      </div>
    </div>
  </BaseContainer>
</template>
<script>
import { useI18n } from "vue-i18n";
import BaseContainer from "src/components/BaseContainer.vue";

export default {
  name: "DialogWelcomeText",
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
    const { t } = useI18n(); // use as global scope
    const { tm } = useI18n();
    return {
      t,
      tm,
    };
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

.welcome-message {
  font-size: 1.5rem;
  text-align: left;
}

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
