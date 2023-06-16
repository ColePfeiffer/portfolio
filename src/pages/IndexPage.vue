<template>
  <q-page style="pointer-events: none">
    <div class="row items-center justify-center fit">
      <!-- full name + job position -->
      <div class="col-6 col-xs-12 col-sm-11 col-md-10 col-lg-6 col-xl-6 q-px-lg q-pt-md">
        <div class="text-center  q-mb-lg">
          <div class="name text-left">
            <div class="animated-text">
              <div class="typing-text">TONI</div>
              <div class="typing-text q-pb-md">DREGER</div>
            </div>
            <q-separator color="white" class="q-mr-xl" />
            <q-separator color="white" class="q-ml-xl q-mt-md" />
            <div class="text-center q-pt-md subtitle">
              {{ $t("jobPosition") }}
            </div>
          </div>
        </div>
        <div class="col-5 col-xs-12 col-sm-11 col-md-10 col-lg-6 col-xl-6 q-px-xs text-center"
          style="pointer-events: none">
          <div>
            <WindowsButton style="pointer-events: auto" label="Work" color="green" icon="mdi-code-braces"
              @click="navigateToWork" />
            <WindowsButton style="pointer-events: auto" color="blue" label="About" icon="mdi-account"
              @click="navigateToAbout" />
            <WindowsButton style="pointer-events: auto" color="white" label="welcome.txt" icon="mdi-text-box"
              @click="openWelcomeMessage" />
            <WindowsButton style="pointer-events: auto" color="red" icon="mdi-palette" label="Colors"
              @click="openColorPicker" />
          </div>
        </div>
      </div>
      <!-- Dialogs -->
      <div class="col-5 col-xs-12 col-sm-11 col-md-10 col-lg-6 col-xl-6 q-pa-md"
        style="pointer-events: none; margin-top: 40px">
        <!-- Welcome Message -->
        <BaseContainer v-if="!isWelcomeMessageClosed" :title="$t('indexPath')" titlebarColor="#fa8072" icon="mdi-home"
          width="600px" style="pointer-events: auto; z-index: 1000" @close="closeWelcomeMessage">
          <div class="q-pa-sm">
            <WelcomeText></WelcomeText>
          </div>
        </BaseContainer>
      </div>
      <div class="col-5 col-xs-12 col-sm-11 col-md-10 col-lg-6 col-xl-6 q-pa-md" v-if="isColorPickerVisible" style="
          pointer-events: none;
          margin-top: 40px;
          position: absolute;
          z-index: 1001;
        ">
        <!-- Color Picker -->
        <BaseContainer v-if="isColorPickerVisible" :title="$t('colorPickerPath')" :hasExpandButton="false"
          titlebarColor="lightgreen" icon="mdi-palette" width="450px" style="pointer-events: auto; z-index: 1005"
          @close="closeColorPicker">
          <div class="q-pa-sm">
            PICK A COLOR! PLEASE. RED PINK GREEN BLUE. IM A PLACEHOLDER RIGHT
            NOW.
          </div>
        </BaseContainer>
      </div>
    </div>
  </q-page>
</template>

<script>
import BaseContainer from "src/components/BaseContainer.vue";
import WelcomeText from "src/components/WelcomeText.vue";
import WindowsButton from "src/components/WindowsButton.vue";
import { defineComponent, ref, watch } from "vue";
import { useRouter } from "vue-router";

export default defineComponent({
  name: "IndexPage",
  components: { BaseContainer, WelcomeText, WindowsButton },
  setup() {
    const router = useRouter();
    const isWelcomeMessageClosed = ref(false);
    const isColorPickerVisible = ref(false);

    function closeWelcomeMessage() {
      isWelcomeMessageClosed.value = true;
    }

    function openWelcomeMessage() {
      isWelcomeMessageClosed.value = false;
    }

    function openColorPicker() {
      isColorPickerVisible.value = true;
    }

    function closeColorPicker() {
      isColorPickerVisible.value = false;
    }

    function navigateToWork() {
      router.push("/work");
    }

    function navigateToAbout() {
      router.push("/about");
    }

    return {
      navigateToWork,
      isWelcomeMessageClosed,
      closeWelcomeMessage,
      openWelcomeMessage,
      openColorPicker,
      closeColorPicker,
      isColorPickerVisible,
      navigateToAbout
    };
  },
});
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Montserrat:wght@400;700&display=swap");
@import url("https://fonts.googleapis.com/css2?family=Source+Sans+Pro&display=swap");

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s;
}

.fade-enter,
.fade-leave-to {
  opacity: 0;
}

.subtitle {
  font-size: 1.75rem;
  color: white;
  font-family: "Source Sans Pro", sans-serif;
  font-family: "Montserrat", sans-serif;
}

.name {
  font-size: 2.2rem;
  color: white;
  font-family: "Source Sans Pro", sans-serif;
  font-family: "Montserrat", sans-serif;
  text-shadow: 2px 2px 10px rgb(111, 87, 156) !important;
}
</style>
