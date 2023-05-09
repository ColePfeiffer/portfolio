<template>
  <q-page style="pointer-events: none">
    <div class="row q-mt-lg q-pt-sm justify-center fit">
      <div class="col-6 col-xs-12 col-sm-11 col-md-10 col-lg-6" style="pointer-events:auto">
        <BaseContainer title="../Contact/WriteMe.txt" icon="mdi-application" titlebarColor="#04B2D9"
          style="background-color: whitesmoke;">
        </BaseContainer>
      </div>
    </div>
  </q-page>
</template>

<script>
import BaseContainer from 'src/components/BaseContainer.vue';

import { defineComponent } from 'vue'

export default defineComponent({
  name: "ContactPage",
  components: { BaseContainer }
})
</script>
