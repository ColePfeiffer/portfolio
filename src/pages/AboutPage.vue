<template>
  <q-page style="pointer-events: none">
    <div class="row q-mt-lg q-pt-sm justify-center fit">
      <div
        class="col-6 col-xs-12 col-sm-11 col-md-10 col-lg-8 col-xl-6"
        style="pointer-events: auto"
      >
        <BaseContainer
          title="../About/ReadMe.txt"
          icon="mdi-application"
          titlebarColor="#04B2D9"
          style="background-color: whitesmoke"
          :hasExpandButton="false"
        >
          <q-card>
            <q-tabs
              v-model="tab"
              dense
              class="text-grey"
              active-color="primary"
              indicator-color="transparent"
              align="justify"
            >
              <q-tab name="mails" label="Profile" />
              <q-tab name="alarms" label="Contact" />
            </q-tabs>

            <q-separator />

            <q-tab-panels v-model="tab" animated>
              <q-tab-panel
                name="mails"
                class="row justify-center items-start q-pa-none q-pa-md"
              >
                <div class="col-6 q-pa-sm q-pl-md q-gutter-xs">
                  <q-avatar
                    size="150px"
                    class="fit"
                    style="max-height: 150px; max-width: 150px"
                  >
                    <img src="images/toni.png" />
                  </q-avatar>
                </div>
                <div class="col-6 text-center q-pa-xs q-pt-lg">
                  <div class="name">Toni Dreger</div>
                  <div class="subtitle">Web App Developer</div>
                  <div class="subtitle">@ Hamburg, Germany</div>
                  <q-separator />
                </div>
                <div class="col-12 text-justify q-pa-md">
                  <q-separator />
                  <div class="q-pt-sm">
                    Hi! I'm Toni Dreger, a web app developer based in Hamburg,
                    Germany. I enjoy creating things, whether that be websites,
                    applications, art or anything in between. My goal is to
                    build products and tools that provide value to people,
                    either by making their lives easier or by bringing them joy,
                    and to learn and grow as a developer in the process. I enjoy
                    problem solving and working with new technologies.
                  </div>
                  <div class="q-pt-md q-pb-md">
                    This portfolio is a collection of some of my work and was
                    made with Vue.js 3, Quasar 2 and Vite. Feel free to browse
                    around and get in touch if you have any questions or would
                    like to work together.
                  </div>
                  <q-separator />
                </div>

                <div class="bold subtitle text-center">
                  Status:
                  <q-icon style="top: -1px" name="circle" color="green" />
                  available
                </div>
                <div class="q-pa-md subtitle text-center">
                  <!-- JavaScript, HTML5, CSS3, Vue.js, Quasar, Vite, Node.js, PHP,
                  C, Python, Java, SQL, Git, Linux, Windows -->
                </div>
              </q-tab-panel>

              <q-tab-panel name="alarms">
                CONTACTME.txt
                <!-- LinkedIn, GitHub, E-Mail -->
              </q-tab-panel>
            </q-tab-panels>
          </q-card>
        </BaseContainer>
      </div>
    </div>
  </q-page>
</template>

<script>
import BaseContainer from "src/components/BaseContainer.vue";

import { defineComponent, ref } from "vue";

export default defineComponent({
  setup() {
    return {
      tab: ref("mails"),
      innerTab: ref("innerMails"),
      splitterModel: ref(20),
    };
  },
  name: "WorkPage",
  components: { BaseContainer },
});
</script>

<style scoped>
.name {
  font-size: 1rem;
  font-weight: 500;
}

.subtitle {
  font-size: 0.75rem;
}

.bold {
  font-weight: 500;
}
</style>
