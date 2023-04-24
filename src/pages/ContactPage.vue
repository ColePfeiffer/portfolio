<template>
  <q-page>
    <div class="row justify-center">
      <div class="col-6 col-xs-12 col-md-6">
        <BaseContainer title="../Contact/WriteMe.txt" icon="mdi-application">
          Cyan: <br />
          Text color: #009999 <br />
          Background color: #e6ffff <br />
          <br /> <br />
          Magenta: <br />
          Text color: #990099 <br />
          Background color: #ffe6ff <br />
          <br /> <br />
          Yellow: <br />
          Text color: #999900 <br />
          Background color: #ffffe6 <br />
          <br /> <br />
          Black: <br />
          Text color: #1a1a1a <br />
          Background color: #f2f2f2 <br />
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
