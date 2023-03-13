<template>
  <div class="box">
    <div class="columns">
      <div class="column is-8" role="form" aria-label="Formulario">
        <input v-model="descricao" type="text" class="input" placeholder="Qual tarefa você deseja iniciar?">
      </div>
      <div class="column">
        <temporizador-vue @ao-temporizador-finalizado="finalizarTarefa"/>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import {defineComponent} from "vue";
import TemporizadorVue from "@/components/TemporizadorVue.vue";

export default defineComponent({
  name: 'FormularioVue',
  data() {
    return {
      descricao: '',
    }
  },
  components: {
    TemporizadorVue
  },
  methods: {
    finalizarTarefa(tempoDecorrido: number): void {
      console.log(tempoDecorrido);
      this.descricao = '';
    }
  },
})

</script>

