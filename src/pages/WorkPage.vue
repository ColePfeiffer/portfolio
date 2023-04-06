<template>
  <q-page>
    <div class="row justify-center">
      <div class="col-6 col-xs-12 col-md-6">
        <BaseContainer title="../Work/Projects" icon="mdi-application" titlebarColor="#ed008c">
          <BaseProjectContainer name="My Project" image="https://via.placeholder.com/300x200.png"
            description="This is a short description of my project." :features="['Feature 1', 'Feature 2', 'Feature 3']"
            :languages="['JavaScript', 'HTML']" />
        </BaseContainer>
      </div>
    </div>


  </q-page>
</template>

<script>
import BaseContainer from 'src/components/BaseContainer.vue';
import BaseProjectContainer from 'src/components/BaseProjectContainer.vue';
import { defineComponent } from 'vue'

export default defineComponent({
  name: "WorkPage",
  components: { BaseContainer, BaseProjectContainer }
})
</script>
