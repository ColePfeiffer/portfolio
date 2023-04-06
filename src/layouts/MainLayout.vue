<template>
  <q-layout view="lHh Lpr lFf">
    <q-header style="background-color: #f4f4f4">
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

export default defineComponent({
  name: 'MainLayout',

  setup() {
    const leftDrawerOpen = ref(false)

    return {
      currentTab: "home",
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
