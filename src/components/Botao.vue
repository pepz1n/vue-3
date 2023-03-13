<template>
  <button :class="!loading ? `button is-${color} is-outlined` : `button is-${color} is-outlined is-loading`" @click="clicado" :disabled="desabilitado">
    <span class="icon">
      <i :class="icone"></i>
    </span>
    <span>{{texto}}</span>
  </button>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "BotaoVue",
  emits: ['clicado'],
  props: {
    desabilitado: {
      type: Boolean
    },
    color: {
      type: String,
      required: true,
    },
    icone: {
      type: String,
      required: true
    },
    loading: {
      type: Boolean
    },
    texto: {
      type: String,
      required: true
    },
  },
  methods: {
    clicado () : void {
      this.$emit('clicado')
    }
  }
});
</script>
