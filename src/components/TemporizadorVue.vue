<template>
  <div class="is-flex is-align-items-center is-justify-content-space-between">
    <CronometroVue :tempo-segundos="tempoSegundos"/>
    <Botao @clicado="iniciar" color="success" icone="fas fa-play" texto="play" :loading="cronometroRodando" />
    <Botao @clicado="finalizar" color="danger" icone="fas fa-stop" texto="stop" :desabilitado="!cronometroRodando" />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import CronometroVue from "@/components/CronometroVue.vue";
import Botao from "@/components/Botao.vue";

export default defineComponent({
  name: 'TemporizadorVue',
  emits: ['aoTemporizadorFinalizado'],
  components: {
    CronometroVue,
    Botao,
  },
  data () {
    return {
      tempoSegundos: 0,
      cronometro: 0,
      cronometroRodando: false,
    }
  },

  methods: {
    iniciar () {
      this.cronometroRodando = true;
      this.cronometro = setInterval(() => {
        this.tempoSegundos++;
      }, 1000);
    },
    finalizar () {
      this.cronometroRodando = false;
      clearInterval(this.cronometro);
      this.$emit('aoTemporizadorFinalizado', this.tempoSegundos);
      this.tempoSegundos = 0;
    },
  }
})

</script>
