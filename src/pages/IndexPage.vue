<template>
  <q-page style="pointer-events: none">
    <div class="row items-center justify-center fit">
      <!-- full name + job position -->
      <div
        class="col-6 col-xs-12 col-sm-11 col-md-10 col-lg-6 col-xl-6 q-px-lg q-pt-md"
      >
        <div class="text-center q-mb-lg">
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
        <div
          class="col-5 col-xs-12 col-sm-11 col-md-10 col-lg-6 col-xl-6 q-px-xs text-center"
          style="pointer-events: none"
        >
          <!-- Buttons -->
          <div>
            <WindowsButton
              style="pointer-events: auto"
              label="Work"
              color="green"
              icon="mdi-code-braces"
              @click="navigateTo('/work')"
            />
            <WindowsButton
              style="pointer-events: auto"
              color="blue"
              label="About"
              icon="mdi-account"
              @click="navigateTo('/about')"
            />
            <WindowsButton
              style="pointer-events: auto"
              color="white"
              label="welcome.txt"
              icon="mdi-text-box"
              @click="toggleDialog(dialogs[0])"
            />
            <WindowsButton
              style="pointer-events: auto"
              color="red"
              icon="mdi-palette"
              label="Colors"
              @click="toggleDialog(dialogs[1])"
            />
          </div>
        </div>
      </div>
      <!-- Dialogs -->
      <div
        class="col-5 col-xs-12 col-sm-11 col-md-10 col-lg-6 col-xl-6 q-pa-md"
        style="pointer-events: none; margin-top: 45px"
      ></div>
      <div
        class="col-5 col-xs-12 col-sm-11 col-md-10 col-lg-6 col-xl-6 q-pa-md"
        :style="dialogContainerStyle"
      >
        <!-- Welcome Message -->
        <!-- When using this approach the position does not reset (with v-if it does) -->
        <div
          :class="{ hidden: !dialogs[0].isVisible }"
          class="dialog-container"
        >
          <BaseContainer
            ref="welcomeDialog"
            :title="$t('indexPath')"
            titlebarColor="#fa8072"
            icon="mdi-home"
            width="600px"
            :zIndex="dialogs[0].zIndex"
            @close="closeDialog(dialogs[0])"
          >
            <div class="q-pa-sm">
              <WelcomeText></WelcomeText>
            </div>
          </BaseContainer>
        </div>

        <!-- Color Picker -->
        <div
          :class="{ hidden: !dialogs[1].isVisible }"
          class="dialog-container"
          style="margin-top: 22px"
        >
          <BaseContainer
            ref="colorPickerDialog"
            :title="$t('colorPickerPath')"
            :hasExpandButton="false"
            titlebarColor="lightgreen"
            icon="mdi-palette"
            width="400px"
            :zIndex="dialogs[1].zIndex"
            @close="closeDialog(dialogs[1])"
          >
            <div class="q-pa-md" @click="accessChildVariable">
              PICK A COLOR! PLEASE. RED PINK GREEN BLUE. IM A PLACEHOLDER RIGHT
              NOW.
            </div>
          </BaseContainer>
        </div>
      </div>
    </div>
  </q-page>
</template>

<script>
import BaseContainer from "src/components/BaseContainer.vue";
import WelcomeText from "src/components/WelcomeText.vue";
import WindowsButton from "src/components/WindowsButton.vue";
import { defineComponent, ref, reactive, computed, onMounted } from "vue";
import { useRouter } from "vue-router";
import { Screen } from "quasar";

export default defineComponent({
  name: "IndexPage",
  components: { BaseContainer, WelcomeText, WindowsButton },
  setup() {
    const router = useRouter();
    const welcomeDialog = ref(null);

    onMounted(() => {
      // Now you can access $refs in the component's lifecycle hooks
      console.log(welcomeDialog.value.$refs);
      //console.log(childComponent.value.$refs);
    });

    // Define a reactive list of objects
    const dialogs = reactive([
      {
        name: "welcome",
        zIndex: 1,
        isVisible: ref(true),
        position: { x: 50, y: 50 },
      },
      {
        name: "colorPicker",
        zIndex: 2,
        isVisible: ref(false),
        position: { x: 50, y: 100 },
      },
    ]);

    // Method to handle bringing a dialog to the front
    const bringToFront = (dialog) => {
      //console.log("bring me to the front", welcomeDialog.value.$refs);
      const maxZIndex = Math.max(...dialogs.map((d) => d.zIndex));
      dialog.zIndex = maxZIndex + 1;
    };

    // Method to handle closing a dialog
    const closeDialog = (dialog) => {
      dialog.isVisible = false;
    };

    function accessChildVariable() {
      const childComponent = this.$refs.welcomeDialog;
      const isExpanded = childComponent.isExpanded;
      console.log(isExpanded);
    }

    // Method to handle opening a dialog
    function openDialog(dialog) {
      dialog.isVisible = true;
      bringToFront(dialog);
    }

    function toggleDialog(dialog) {
      if (dialog.isVisible) {
        closeDialog(dialog);
      } else {
        openDialog(dialog);
      }
    }

    function navigateTo(path) {
      router.push(path);
    }

    return {
      dialogs,
      welcomeDialog,
      navigateTo,
      bringToFront,
      closeDialog,
      openDialog,
      toggleDialog,
      accessChildVariable,
    };
  },
  computed: {
    // takes care of positioning the dialog container according to screen size
    dialogContainerStyle() {
      // if screen resolution is xs sm or md set style A
      if (Screen.xs || Screen.sm || Screen.md) {
        return {
          "pointer-events": "none",
          position: "absolute",
          "margin-left": "0%",
          "margin-top": "85%",
        };
        // if screen resolution is lg or xl set style B
      } else {
        return {
          "pointer-events": "none",
          position: "absolute",
          "margin-left": "58%",
          "margin-top": "-13%",
        };
      }
    },
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

.hidden {
  display: none;
}

.subtitle {
  font-size: 1.75rem;
  color: white;
  font-family: "Source Sans Pro", sans-serif;
  font-family: "Montserrat", sans-serif;
}

.dialog-container {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  position: absolute;
}
.name {
  font-size: 2.2rem;
  color: white;
  font-family: "Source Sans Pro", sans-serif;
  font-family: "Montserrat", sans-serif;
  text-shadow: 2px 2px 10px rgb(111, 87, 156) !important;
}
</style>
