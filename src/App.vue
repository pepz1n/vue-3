<template>
  <main class="columns is-gapless is-multiline" :class="{ 'modo-escuro': modoEscuroAtivo }">
    <div class="column is-one-fifth">
      <BarraLateral @ao-tema-alterado="trocarTema"></BarraLateral>
    </div>
    <div class="column is-four-fifths conteudo">
      <router-view></router-view>
    </div>
  </main>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import BarraLateral from './components/BarraLateral.vue';

export default defineComponent({
  name: 'App',
  title: 'socorro',
  components: {
    BarraLateral,
  },
  data () {
    return {
      modoEscuroAtivo: false,
    }
  },

  methods: {
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
