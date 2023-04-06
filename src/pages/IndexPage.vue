<template>
  <q-page>
    <div class="row justify-center">
      <div class="col-6 col-xs-12 col-md-6">
        <BaseContainer title="../Home/Welcome" icon="mdi-home" width="600px">
          <WelcomeText></WelcomeText>
        </BaseContainer>
      </div>
    </div>

  </q-page>
</template>

<script>
import BaseContainer from 'src/components/BaseContainer.vue';
import WelcomeText from 'src/components/WelcomeText.vue';
import { defineComponent } from 'vue'

export default defineComponent({
  name: "IndexPage",
  components: { BaseContainer, WelcomeText }
})
</script>
