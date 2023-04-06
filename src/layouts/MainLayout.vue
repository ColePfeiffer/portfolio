<template>
  <q-layout view="lHh Lpr lFf">
    <Particles id="tsparticles" :particlesInit="particlesInit" :particlesLoaded="particlesLoaded" :options="{
      background: {
        color: {
          value: '#0d47a1'
        }
      },
      fpsLimit: 120,
      interactivity: {
        events: {
          onClick: {
            enable: true,
            mode: 'push'
          },
          onHover: {
            enable: true,
            mode: 'repulse'
          },
          resize: true
        },
        modes: {
          bubble: {
            distance: 400,
            duration: 2,
            opacity: 0.8,
            size: 40
          },
          push: {
            quantity: 4
          },
          repulse: {
            distance: 200,
            duration: 0.4
          }
        }
      },
      particles: {
        color: {
          value: '#ffffff'
        },
        links: {
          color: '#ffffff',
          distance: 150,
          enable: true,
          opacity: 0.5,
          width: 1
        },
        collisions: {
          enable: true
        },
        move: {
          direction: 'none',
          enable: true,
          outMode: 'bounce',
          random: false,
          speed: 6,
          straight: false
        },
        number: {
          density: {
            enable: true,
            area: 800
          },
          value: 80
        },
        opacity: {
          value: 0.5
        },
        shape: {
          type: 'circle'
        },
        size: {
          random: true,
          value: 5
        }
      },
      detectRetina: true
    }" />
    <q-header style="background-color: transparent">
      <q-toolbar class="bg-transparent" style="height: 70px">
        <q-tabs no-caps v-model="currentTab" class="text-grey-10 absolute-center">
          <q-tab v-for="tab in firstTabs" :key="tab.label" :name="tab.route" :label="tab.label" @click="navigateTo" />
          <img src="../assets/eye2.png" style="max-width: 40px" />
          <q-tab v-for="tab in secondTabs" :key="tab.label" :name="tab.route" :label="tab.label" @click="navigateTo" />
        </q-tabs>
      </q-toolbar>
    </q-header>
    <q-page-container class="q-pa-md" style="background-color: #f4f4f4">
      <div class="row q-mb-md justify-center">
        <div class="col-6 col-md-6 col-sm-10 col-xs-11 q-scroll-y ">
          <router-view />
        </div>
      </div>
    </q-page-container>
  </q-layout>
</template>

<script>
import { defineComponent, ref } from 'vue'
import { loadFull } from "tsparticles";

export default defineComponent({
  name: 'MainLayout',

  setup() {
    const leftDrawerOpen = ref(false)

    const particlesInit = async engine => {
      await loadFull(engine);
    };

    const particlesLoaded = async container => {
      console.log("Particles container loaded", container);
    };

    return {
      currentTab: "home",
      particlesInit,
      particlesLoaded,
      toggleLeftDrawer() {
        leftDrawerOpen.value = !leftDrawerOpen.value
      }
    }
  },
  computed: {
    firstTabs() {
      return [
        { label: 'Home', route: '/' },
        { label: 'Work', route: '/work' },
      ]
    },
    secondTabs() {
      return [
        { label: 'About', route: '/about' },
        { label: 'Contact', route: '/contact' }
      ]
    }
  },
  methods: {
    navigateTo() {
      this.$router.push(this.currentTab)
    }
  }
})
</script>

<style lang="scss">
.text {
  color: $textColor;
}
</style>
