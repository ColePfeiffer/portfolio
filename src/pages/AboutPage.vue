<template>
  <q-page style="pointer-events: none">
    <div class="row q-mt-lg q-pt-sm justify-center fit">
      <div class="col-6 col-xs-12 col-sm-11 col-md-10 col-lg-8 col-xl-6" style="pointer-events: auto">
        <BaseContainer title="../About/ReadMe.txt" icon="mdi-application" titlebarColor="#FF007F     "
          style="background-color: whitesmoke" :hasExpandButton="false" @close="redirectToIndex">
          <q-card>
            <q-tabs v-model="tab" dense class="text-grey" active-color="primary" indicator-color="transparent"
              align="justify">
              <q-tab name="mails" label="Profile" />
              <q-tab name="alarms" label="Contact" />
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
                  <div class="subtitle monospace">Web / App Developer</div>
                  <div class="subtitle monospace">@ Hamburg, Germany</div>
                  <q-separator />
                </div>
                <div class="col-12 text-justify q-pa-md">
                  <q-separator />
                  <div class="q-pt-sm">
                    Hi! I'm Toni Dreger, a web app developer based in Hamburg,
                    Germany. I enjoy creating things, whether that be websites,
                    applications, art or anything in between.

                    My goal is to
                    build products and tools that provide value to people,
                    either by making their lives easier or by bringing them joy,
                    and to learn and grow as a developer in the process. I enjoy
                    problem solving and working with new technologies.
                  </div>
                  <div class="q-pt-md q-pb-md">
                    Hi! I'm T, a web app developer based in Hamburg, Germany. I have a passion for creating websites,
                    applications, and digital experiences that seamlessly blend aesthetics and functionality. My goal is
                    to build tools that empower users, making their lives easier and more enjoyable.

                    I thrive on challenging projects that push the boundaries of what's possible, utilizing my
                    problem-solving mindset and drive to explore new technologies.

                    Beyond coding, I immerse myself in music, dancing, drawing, and literature, particularly science
                    fiction and slice of life genres. These creative outlets fuel my imagination and provide a fresh
                    perspective that enriches my development work.

                    Teamwork is fundamental to me, and I strive to foster a positive and inclusive work environment where
                    knowledge sharing and idea collaboration are highly valued. I believe in learning from others and
                    contributing to a supportive team culture.

                    I'm currently seeking exciting opportunities to contribute my skills to impactful projects. If you're
                    interested in working together, please don't hesitate to reach out. I'm eager to connect with
                    like-minded professionals who share my passion for creating exceptional digital experiences."

                    Feel free to make any further adjustments or additions to align the text with your personal style and
                    preferences. Good luck with your portfolio and job applications!



                    Hi! I'm Toni Dreger, a web app developer based in Hamburg,
                    Germany. I enjoy creating things, whether that be websites, applications or digital experiences that
                    blend aesthetics and functionality, aiming to build tools that empower users, making their lives
                    easier and more enjoyable.

                    With a problem-solving mindset and a passion for exploring new technologies, I thrive on challenging
                    projects that push the boundaries of what's possible.

                    Beyond coding, I immerse myself in music, dancing, drawing, and literature. These creative outlets
                    fuel my imagination and provide a fresh
                    perspective that enriches my development work.

                    I value teamwork and strive to create a positive and
                    inclusive work environment where knowledge is shared and ideas are valued. Learning from others and
                    contributing to a
                    supportive team culture are essential to me.

                    I'm currently seeking exciting opportunities to contribute my skills to impactful projects. If you're
                    interested in working together, please feel free to reach out. I'm
                    eager to connect with like-minded professionals who share a passion for creating exceptional digital
                    experiences.
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
                      Toni Dreger
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
                      ColePfeiffer
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
      this.$router.push('/');
    }
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
}</style>
