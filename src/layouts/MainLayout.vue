<template>
  <q-layout view="lhh Lpr lFf" class="particles-container">
    <Particles id="tsparticles" :particlesInit="particlesInit" :particlesLoaded="particlesLoaded" :options="{
      fpsLimit: 60,
      interactivity: {
        detect_on: 'canvas',
        events: {
          onhover: {
            enable: true,
            mode: 'bubble',
            distance: 150,
            size: 3,
            color: '#ffffff',
          },
          onclick: {
            enable: true,
            mode: 'push',
          },
          resize: true,
        },
        modes: {
          grab: {
            distance: 400,
            line_linked: {
              opacity: 1,
            },
          },
          bubble: {
            distance: 150,
            size: 6,
            duration: 2,
            opacity: 0.8,
            speed: 3,
          },
          repulse: {
            distance: 200,
            duration: 0.4,
          },
          push: {
            particles_nb: 4,
          },
          remove: {
            particles_nb: 2,
          },
        },
      },
      particles: {
        number: {
          value: 250,
          density: {
            enable: true,
            value_area: 1500,
          },
        },
        color: {
          value: '#ffffff',
        },
        shape: {
          type: 'circle',
          stroke: {
            width: 0,
            color: '#000000',
          },
        },
        opacity: {
          value: 0.5,
          random: false,
          anim: {
            enable: true,
            speed: 0.2,
            opacity_min: 0,
            sync: false,
          },
        },
        size: {
          value: 2,
          random: true,
          anim: {
            enable: true,
            speed: 2,
            size_min: 0,
            sync: false,
          },
        },
        line_linked: {
          enable: false,
          distance: 150,
          color: '#ffffff',
          opacity: 0.4,
          width: 1,
        },
        move: {
          enable: true,
          speed: 0.2,
          direction: 'none',
          random: true,
          straight: false,
          out_mode: 'out',
          bounce: false,
          attract: {
            enable: false,
            rotateX: 600,
            rotateY: 1200,
          },
        },
      },
      retina_detect: true,
    }" />
    <q-header style="background-color: transparent; pointer-events: none">
      <q-toolbar class="bg-transparent q-mb-sm">
        <div class="flex-grow absolute-center tabs-container">
          <q-tabs v-model="currentTab" dense all-caps active-class="q-tabs__item--active text-center"
            indicator-color="transparent">
            <q-tab class="q-tabs__items" name="/" @click="navigateTo">
              <img :src="eyeImage" class="glow-on-hover" :style="homeStyle" />
            </q-tab>
            <q-tab style="font-size: 15px !important" class="q-tabs__items" name="/work" :label="workLabel"
              @click="navigateTo" />
            <q-tab class="q-tabs__items" name="/about" :label="aboutLabel" @click="navigateTo" />
          </q-tabs>
        </div>
        <LanguageSwitcher style="
            flex: 0;
            margin-left: auto;
            margin-right: 0;
            pointer-events: auto;
          "></LanguageSwitcher>
      </q-toolbar>
    </q-header>
    <q-page-container>
      <div class="row justify-center" id="megaTest">
        <div class="col-6 col-md-6 col-sm-10 col-xs-11 q-scroll-y">
          <router-view />
        </div>
      </div>
    </q-page-container>
  </q-layout>
</template>

<script>
import { useI18n } from "vue-i18n";
import { defineComponent, ref } from "vue";
import { loadFull } from "tsparticles";
import LanguageSwitcher from "src/components/LanguageSwitcher.vue";

export default defineComponent({
  name: "MainLayout",
  components: { LanguageSwitcher },
  setup() {
    const { t } = useI18n(); // use as global scope
    const { tm } = useI18n();

    const leftDrawerOpen = ref(false);
    const particlesInit = async (engine) => {
      await loadFull(engine);
    };
    const particlesLoaded = async (container) => {
      console.log("Particles container loaded", container);
    };
    return {
      currentTab: ref("/"),
      particlesInit,
      particlesLoaded,
      toggleLeftDrawer() {
        leftDrawerOpen.value = !leftDrawerOpen.value;
      },
      t,
      tm,
    };
  },
  mounted() {
    this.currentTab = this.$route.path;
  },
  computed: {
    homeStyle() {
      return this.isRouteSetToHome
        ? {
          'max-width': '31px',
          'opacity': '77%',
          'flex': 0,
          'pointer-events': 'auto'
        }
        : {
          'max-width': '31px',
          'opacity': '40%',
          'flex': 0,
          'pointer-events': 'auto'
        }
    },
    workLabel() {
      return this.$t("work");
    },
    aboutLabel() {
      return this.$t("about");
    },
    currentRoute() {
      return this.$route.path;
    },
    isRouteSetToHome() {
      if (this.currentRoute === "/") {
        return true;
      } else {
        return false;
      }
    },
    eyeImage() {
      if (this.isRouteSetToHome) {
        return "images/eye-w2.png";
      } else {
        return "images/eye4.png";
      }
    },
  },
  methods: {
    navigateTo() {
      this.$router.push({ path: this.currentTab });
    },
    goToHome() {
      this.currentTab = "/";
      this.navigateTo();
    },
  },
  watch: {
    currentRoute(newRoute, oldRoute) {
      console.log(oldRoute);
      console.log(newRoute);
    },
  },
});
</script>

<style lang="scss">
.glow-on-hover {
  transition: all 0.3s ease-out;
  opacity: 0.4;
}

.glow-on-hover:hover {
  opacity: 1;
  transform: scale(1.05);
  color: rgba(255, 255, 255, 1);
}

.particles-container {
  position: absolute;
  background-image: linear-gradient(to bottom, #a1a8e6, #0d0d0d);
}

.tabs-container {
  text-align: center;
  pointer-events: auto;
  font-size: 10px !important;
}

.q-tab__label {
  font-size: 0.85rem;
}

.text {
  color: $textColor;
}

.q-tabs__items {
  color: rgba(245, 245, 245, 0.829);
  color: #7573db;
  text-shadow: #7776d0 0px 0px 1px;
}

.q-tabs__items:hover {
  text-shadow: rgba(130, 126, 180, 0.507) 1px 1px 5px;
  color: rgba(247, 228, 255, 0.952);
  transition: all 0.4s ease-in-out;
}

.q-tabs__item--active {
  color: white;
  text-shadow: rgba(17, 0, 255, 0.507) 1px 1px 5px;
}
</style>
