<template>
  <q-page style="pointer-events: none">
    <div class="row q-mt-lg q-pt-sm justify-center fit">
      <div class="col-6 col-xs-12 col-sm-11 col-md-10 col-lg-6" style="pointer-events:auto">
        <BaseContainer title="../About/Toni" icon="mdi-application" titlebarColor="#D90479" @close="$router.push('/')">
          TODO: <br />
          <br />
          texte anpassen <br /><br />
          startseite <br /><br />
          1-2 projekte einbinden <br /><br />
          baseDialog für Fotos <br /><br />
          ABOUT <br /><br />
          kontakt <br /><br />
          puffer auf allen seiten außer work sodass alle gleich hoch sind <br /><br />
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
  name: "WorkPage",
  components: { BaseContainer }
})
</script>


