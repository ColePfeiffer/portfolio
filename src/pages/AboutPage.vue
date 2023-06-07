<template>
  <q-page style="pointer-events: none">
    <div class="row q-mt-sm q-pt-sm justify-center fit">
      <div class="col-6 col-xs-12 col-sm-11 col-md-10 col-lg-8 col-xl-6">
        <BaseContainer :title="$t('aboutPath')" icon="mdi-application" titlebarColor="#FF007F     "
          style="background-color: whitesmoke; pointer-events: auto" :hasExpandButton="false" @close="redirectToIndex">
          <q-card>
            <q-tabs v-model="tab" dense class="text-grey" active-color="primary" indicator-color="transparent"
              align="justify">
              <q-tab name="mails" :label="aboutTabName" />
              <q-tab name="alarms" :label="contactTabName" />
            </q-tabs>

            <q-separator />

            <q-tab-panels v-model="tab" animated>
              <q-tab-panel name="mails" class="row justify-center items-start q-pa-none q-pa-md">
                <div class="col-6 q-pa-sm q-pl-md q-gutter-xs">
                  <q-avatar size="150px" class="fit" style="max-height: 150px; max-width: 150px">
                    <img src="images/toni.png" />
                  </q-avatar>
                </div>
                <div class="col-6 text-center q-pa-xs q-pt-lg">
                  <div class="name">Toni Dreger</div>
                  <div class="subtitle monospace">{{ $t("jobPosition") }}</div>
                  <div class="subtitle monospace">@ {{ $t("location") }}</div>
                  <q-separator />
                </div>
                <div class="col-12 text-justify q-pa-md">
                  <q-separator />
                  <div class="q-pt-sm">{{ $t("readMePart1") }}</div>
                  <div class="q-pt-md q-pb-md">
                    {{ $t("readMePart2") }}
                  </div>
                  <q-separator />
                </div>

                <div class="bold subtitle text-center">
                  Status:
                  <q-icon style="top: -1px" name="circle" color="green" />
                  {{ $t("status") }}
                </div>
                <div class="q-pa-md subtitle text-center">
                  <!-- JavaScript, HTML5, CSS3, Vue.js, Quasar, Vite, Node.js, PHP,
                  C, Python, Java, SQL, Git, Linux, Windows -->
                </div>
              </q-tab-panel>

              <q-tab-panel name="alarms">
                <!-- LinkedIn, GitHub, E-Mail -->
                <div class="row justify-between items-center monospace q-pt-md">
                  <div class="col-auto">
                    <div class="project-subitem-title">Mail</div>
                  </div>
                  <div class="col">
                    <div class="text-body-1 text-right">
                      <a
                        href="&#109;&#97;&#105;lto&#58;t&#46;%&#54;4%72eg&#101;&#37;72&#46;&#37;&#55;0&#37;6&#70;r&#116;fo&#108;&#37;69o&#64;g&#109;&#37;61i%&#54;&#67;&#46;c%6&#70;m">&#116;&#46;&#100;re&#103;er&#46;po&#114;&#116;folio&#64;gma&#105;l&#46;com</a>
                    </div>
                  </div>
                </div>
                <q-separator />
                <!-- Languages  -->
                <div class="row justify-between q-mt-xs monospace">
                  <div class="col-auto">
                    <div class="project-subitem-title">LinkedIn</div>
                  </div>
                  <div class="col text-right">
                    <div class="text-body-1" style="white-space: pre-wrap">
                      <a href="https://www.linkedin.com/in/toni-dreger-957463278/">Toni Dreger</a>
                    </div>
                  </div>
                </div>
                <q-separator />
                <!-- Languages  -->
                <div class="row justify-between q-mt-xs monospace">
                  <div class="col-auto">
                    <div class="bold">GitHub</div>
                  </div>
                  <div class="col text-right">
                    <div class="text-body-1" style="white-space: pre-wrap">
                      <a href="https://github.com/ToniTechBot/">ToniTechBot</a>
                    </div>
                  </div>
                </div>
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
  methods: {
    redirectToIndex() {
      this.$router.push("/");
    },
  },
  computed: {
    aboutTabName() {
      return this.$t("aboutTab");
    },
    contactTabName() {
      return this.$t("contactTab");
    },
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

.paragraph {
  font-size: 0.89rem;
}

.monospace {
  font-family: monospace;
}
</style>
