<template>
  <FormularioVue @aoSalvarTarefa="salvarTarefa"/>
  <div class="lista" v-if="tarefas.length === 0">
    <vue-box>
      <h1> Você não esta produtivo </h1>
    </vue-box>
  </div>
  <div class="lista">
    <TarefaVue v-for="(tarefa, i) in tarefas" :key="i" :tarefa="tarefa" :id="i" />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import FormularioVue from '@/components/Formulario.vue';
import TarefaVue from "@/components/Tarefa.vue";
import ITarefa from "@/interfaces/ITarefa";
import VueBox from "@/components/Box.vue";

export default defineComponent({
  name: 'App',
  title: 'socorro',
  components: {
    VueBox,
    FormularioVue,
    TarefaVue,
  },
  data () {
    return {
      tarefas: [] as ITarefa[],
    }
  },

  computed: {
    listaVazia () : boolean {
      return this.tarefas.length === 0;
    }
  },

  methods: {
    salvarTarefa (tarefa: ITarefa) : void {
      this.tarefas.push(tarefa)
    },
  },

  mounted() {
    document.title = 'Lista'
  }
});
</script>
