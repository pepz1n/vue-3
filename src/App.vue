<template>
  <main class="columns is-gapless is-multiline" :class="{ 'modo-escuro': modoEscuroAtivo }">
    <div class="column is-one-fifth">
      <BarraLateral @ao-tema-alterado="trocarTema"></BarraLateral>
    </div>
    <div class="column is-four-fifths conteudo">
      <FormularioVue @aoSalvarTarefa="salvarTarefa"/>
      <div class="lista">
        <TarefaVue v-for="(tarefa, i) in tarefas" :key="i" :tarefa="tarefa" :id="i" />
        <VueBox v-if="listaVazia">
          <h1 class="roboto"> Nenhuma Atividade cadastrada! </h1>
        </VueBox>
      </div>
    </div>
  </main>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import BarraLateral from './components/BarraLateral.vue';
import FormularioVue from './components/Formulario.vue';
import TarefaVue from "@/components/Tarefa.vue";
import VueBox from "@/components/Box.vue";
import ITarefa from "@/interfaces/ITarefa";

export default defineComponent({
  name: 'App',
  title: 'socorro',
  components: {
    VueBox,
    BarraLateral,
    FormularioVue,
    TarefaVue,
  },
  data () {
    return {
      tarefas: [] as ITarefa[],
      modoEscuroAtivo: false,
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

    trocarTema (modoEscuro : boolean) {
      this.modoEscuroAtivo = modoEscuro;
      console.log(this.modoEscuroAtivo)
    }
  },

  mounted() {
    document.title = 'Lista'
  }
});
</script>

<style>
  .lista {
    padding: 1.25rem;
  }
  .roboto {
    font-family: Roboto , sans-serif;
  }
  main {
    --bg-primario: #fff;
    --texto-primario: #000;
  }
  main.modo-escuro {
    --bg-primario: #2b2d42;
    --texto-primario: #ddd;
  }
  .conteudo {
    background-color: var(--bg-primario);
  }
</style>
