<template>
  <q-page style="pointer-events: none">
    <div class="row justify-center fit">
      <div class="col-6 col-xs-12 col-sm-11 col-md-10 col-lg-6" style="pointer-events:auto">
        <BaseContainer title="../About/Toni" icon="mdi-application" @close="$router.push('/')">
          TODO: <br />
          <br />
          texte anpassen <br /><br />
          startseite <br /><br />
          1-2 projekte einbinden <br /><br />
          baseDialog für Fotos <br /><br />
          ABOUT <br /><br />
          kontakt <br /><br />
          puffer auf allen seiten außer work sodass alle gleich hoch sind <br /><br />
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


