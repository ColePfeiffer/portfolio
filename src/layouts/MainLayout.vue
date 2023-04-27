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
    <q-header style="background-color: transparent">
      <q-toolbar class="bg-transparent" style="height: 50px">
        <!-- Home -->
        <img src="../assets/eye4.png" class="glow-on-hover" style="max-width: 38px; opacity: 40%; flex: 0;"
          @click="goToHome" />
        <div class="flex-grow absolute-center" style="text-align: center;">
          <q-tabs v-model="currentTab" class="text-white" dense no-caps style="text-shadow: darkblue 1px 1px 3px">
            <q-tab name="/work" label="Work" @click="navigateTo" />
            <q-tab name="/about" label="About" @click="navigateTo" />
            <q-tab name="/contact" label="Contact" @click="navigateTo" />
          </q-tabs>
        </div>
        <LanguageSwitcher style="flex: 0; margin-left: auto; margin-right: 0;"></LanguageSwitcher>
      </q-toolbar>
    </q-header>
    <q-page-container>
      <div class="row justify-center">
        <div class="col-6 col-md-6 col-sm-10 col-xs-11 q-scroll-y">
          <router-view />
        </div>
      </div>
    </q-page-container>
  </q-layout>
</template>

<script>
import { defineComponent, ref } from "vue";
import { loadFull } from "tsparticles";
import LanguageSwitcher from "src/components/LanguageSwitcher.vue";

export default defineComponent({
  name: "MainLayout",
  setup() {
    const leftDrawerOpen = ref(false);
    const particlesInit = async (engine) => {
      await loadFull(engine);
    };
    const particlesLoaded = async (container) => {
      console.log("Particles container loaded", container);
    };
    return {
      currentTab: "home",
      particlesInit,
      particlesLoaded,
      toggleLeftDrawer() {
        leftDrawerOpen.value = !leftDrawerOpen.value;
      },
    };
  },
  computed: {
    firstTabs() {
      return [
        { label: "Home", route: "/" },
        { label: "Work", route: "/work" },
      ];
    },
    secondTabs() {
      return [
        { label: "About", route: "/about" },
        { label: "Contact", route: "/contact" },
      ];
    },
  },
  methods: {
    navigateTo() {
      this.$router.push(this.currentTab);
    },
    goToHome() {
      this.currentTab = "/";
      this.navigateTo();
    }
  },
  components: { LanguageSwitcher }
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

.text {
  color: $textColor;
}

.q-carousel__navigation-inner {
  height: 20px;
}
</style>
