<template>
  <BoxVue>
    <div class="columns">
      <div class="column is-7">
        {{ tarefa.descricao || `Tarefa ${id + 1}` }}
      </div>
      <div class="column">
        <CronometroVue :tempo-segundos="tarefa.duracaoEmSegundos"/>
      </div>
    </div>
  </BoxVue>
</template>
<script lang="ts">
import {defineComponent, PropType} from "vue";
import CronometroVue from "@/components/CronometroVue.vue";
import BoxVue from '@/components/Box.vue'
import ITarefa from "@/interfaces/ITarefa";

export default defineComponent({
  name: 'TarefaVue',
  props: {
    tarefa: {
      type: Object as PropType<ITarefa>,
      required: true,
    },
    id: {
      type: Number,
      required: true,
    },
  },
  components: {
    CronometroVue,
    BoxVue,
  }
});
</script>
