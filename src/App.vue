<template>
  <main class="columns is-gapless is-multiline">
    <div class="column is-one-quarter">
      <BarraLateral></BarraLateral>
    </div>
    <div class="column is-three-quarter">
      <FormularioVue/>
      <div class="lista">
        <tarefa/>
        <tarefa/>
        <tarefa/>
      </div>
    </div>
  </main>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import BarraLateral from './components/BarraLateral.vue';
import FormularioVue from './components/Formulario.vue';
import Tarefa from "@/components/Tarefa.vue";

export default defineComponent({
  name: 'App',
  components: {
    BarraLateral,
    FormularioVue,
    Tarefa,
  }
});
</script>

<style>

</style>
