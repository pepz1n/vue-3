<template>
  <header>
    <h1>
      <img src="../assets/logo.png" alt="">
    </h1>
    <button class="button" @click="alterarTema">
      {{ textoBotao }}
    </button>
    <nav class="panel mt-5">
      <ul>
        <li>
          <router-link to="/" class="link">
            <i class="fas fa-tasks"></i>
            <span>
              Tarefas
            </span>
          </router-link>
        </li>
        <li>
          <router-link to="/projetos" class="link">
            <i class="fas fa-project-diagram"></i>
            <span>
              Projetos
            </span>
          </router-link>
        </li>
      </ul>
    </nav>
  </header>
</template>

<script>
  import { defineComponent } from "vue";

  export default defineComponent({
    name: "BarraLateral",
    emits: ['aoTemaAlterado'],
    data () {
      return {
        modoEscuroAtivo: false,
      }
    },
    methods: {
      alterarTema() {
        this.modoEscuroAtivo = !this.modoEscuroAtivo;
        this.$emit('aoTemaAlterado', this.modoEscuroAtivo);
      }
    },
    computed: {
      textoBotao () {
        return this.modoEscuroAtivo ? 'Desativar modo escuro' : 'ativar modo escuro';
      }
    }
  })
</script>

<style scoped>
  header {
    padding: 1rem;
    background: #0d3b66;
    width: 100%;
    height: 100vh;
    text-align: center;
  }
  @media only screen and (max-width: 768px) {
    header {
      padding: 2.5rem;
      height: auto;
    }
  }
  .panel li {
    margin: 8px 0;
  }
  .link {
    color: white;
  }
  .link:hover {
    color: #FAF0CA;
  }
  .link.router-link-active {
    color: #FAF0CA;
  }
</style>
