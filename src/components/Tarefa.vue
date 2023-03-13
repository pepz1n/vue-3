<template>
  <div class="box has-text-weight-bold">
    <div class="columns">
      <div class="column is-7">
        Descrição da tarefa
      </div>
      <div class="column">
        <CronometroVue tempo-segundos="15"/>
      </div>
    </div>
  </div>
</template>
<script lang="ts">
import { defineComponent } from "vue";
import CronometroVue from "@/components/CronometroVue.vue";

export default defineComponent({
  name: 'TarefaVue',
  components: {
    CronometroVue,
  }
});


</script>
