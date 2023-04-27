<template>
  <q-page style="pointer-events: none">
    <div class="row justify-center fit">
      <div class="col-6 col-xs-12 col-sm-11 col-md-10 col-lg-6" style="pointer-events:auto">
        <div v-intersection="onIntersection" style="height: 10px" />
        <!-- This should fade out and then reroute to /work -->
        <transition name="fade" @after-leave="navigateToWork">
          <div v-if="isVisible" class="fade-container">
            <BaseContainer title="../Home/Welcome.txt" titlebarColor="#03aced" icon="mdi-home" width="600px">
              <LanguageSwitcher></LanguageSwitcher>
              <WelcomeText></WelcomeText>
            </BaseContainer>
          </div>
        </transition>
        <div v-if="!isVisible">NAH IM NOT ANYMORE</div>

      </div>

    </div>
  </q-page>
</template>

<script>
import BaseContainer from 'src/components/BaseContainer.vue';
import LanguageSwitcher from 'src/components/LanguageSwitcher.vue';
import WelcomeText from 'src/components/WelcomeText.vue';
import { defineComponent, ref, watch } from 'vue';
import { useRouter } from 'vue-router';

export default defineComponent({
  name: "IndexPage",
  components: { BaseContainer, WelcomeText, LanguageSwitcher },
  setup() {
    const isVisible = ref(true);
    const router = useRouter();

    function onIntersection(entry) {
      const options = {
        rootMargin: "-50px",
        threshold: 0.5
      };

      const observer = new IntersectionObserver((entries, observer) => {
        console.log("isVisible", isVisible.value, "entry: ", entries[0].isIntersecting);
        isVisible.value = entries[0].isIntersecting;
        console.log("isVisible", isVisible.value, "entry: ", entries[0].isIntersecting);
      }, options);

      observer.observe(entry.target);
    }

    function navigateToWork() {
      router.push('/work');
    }

    watch(isVisible, (newValue, oldValue) => {
      console.log('isVisible changed from', oldValue, 'to', newValue);
    });

    return {
      isVisible,
      onIntersection,
      navigateToWork
    };
  },
  beforeRouteLeave(to, from, next) {
    // Set isVisible to true when leaving the page
    this.isVisible = true;
    next();
  },
});
</script>

<style>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s;
}

.fade-enter,
.fade-leave-to {
  opacity: 0;
}
</style>
