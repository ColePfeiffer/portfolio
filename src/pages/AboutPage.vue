<template>
  <q-page>
    <div class="row justify-center">
      <div class="col-6 col-xs-12 col-md-6">
        <BaseContainer title="../About/Toni" icon="mdi-application" @close="$router.push('/')">
          bleppppp about me :O
        </BaseContainer>
      </div>
    </div>


  </q-page>
</template>

<script>
import BaseContainer from 'src/components/BaseContainer.vue';

import { defineComponent } from 'vue'

export default defineComponent({
  name: "WorkPage",
  components: { BaseContainer }
})
</script>


