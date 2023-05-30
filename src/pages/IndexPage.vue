<template>
  <q-page style="pointer-events: none">
    <div class="row items-center justify-center fit">
      <div
        class="col-6 col-xs-12 col-sm-11 col-md-10 col-lg-6 col-xl-6 q-px-lg q-pt-md"
        style="pointer-events: none"
      >
        <div class="text-center q-pb-lg q-mb-lg">
          <div class="name text-left">
            <div>TONI</div>
            <div class="q-pb-md">DREGER</div>
            <q-separator color="white" class="q-mr-xl" />
            <q-separator color="white" class="q-ml-xl q-mt-md" />
            <div class="text-center q-pt-md subtitle">web developer</div>
          </div>
        </div>
      </div>
      <div
        class="col-5 col-xs-12 col-sm-11 col-md-10 col-lg-6 col-xl-6 q-pa-md"
        style="pointer-events: auto; margin-top: 40px"
      >
        <div v-intersection="onIntersection" style="height: 10px" />
        <!-- This should fade out and then reroute to /work -->
        <transition name="fade" @after-leave="navigateToWork">
          <div v-if="isVisible" class="fade-container">
            <BaseContainer
              title="../Home/Welcome.txt"
              titlebarColor="#ff7f50"
              icon="mdi-home"
              width="600px"
            >
              <div class="q-pa-sm">
                <WelcomeText></WelcomeText>
              </div>
            </BaseContainer>
          </div>
        </transition>
        <div v-if="!isVisible">NAH IM NOT ANYMORE</div>
      </div>
    </div>
  </q-page>
</template>

<script>
import BaseContainer from "src/components/BaseContainer.vue";
import WelcomeText from "src/components/WelcomeText.vue";
import { defineComponent, ref, watch } from "vue";
import { useRouter } from "vue-router";

export default defineComponent({
  name: "IndexPage",
  components: { BaseContainer, WelcomeText },
  setup() {
    const isVisible = ref(true);
    const router = useRouter();

    function onIntersection(entry) {
      const options = {
        rootMargin: "-50px",
        threshold: 0.5,
      };

      const observer = new IntersectionObserver((entries, observer) => {
        console.log(
          "isVisible",
          isVisible.value,
          "entry: ",
          entries[0].isIntersecting
        );
        isVisible.value = entries[0].isIntersecting;
        console.log(
          "isVisible",
          isVisible.value,
          "entry: ",
          entries[0].isIntersecting
        );
      }, options);

      observer.observe(entry.target);
    }

    function navigateToWork() {
      router.push("/work");
    }

    watch(isVisible, (newValue, oldValue) => {
      console.log("isVisible changed from", oldValue, "to", newValue);
    });

    return {
      isVisible,
      onIntersection,
      navigateToWork,
    };
  },
  beforeRouteLeave(to, from, next) {
    // Set isVisible to true when leaving the page
    this.isVisible = true;
    next();
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
  font-size: 2.3rem;
  color: white;
  font-family: "Source Sans Pro", sans-serif;
  font-family: "Montserrat", sans-serif;
  text-shadow: 2px 2px 10px rgb(111, 87, 156) !important;
}
</style>
