<template>
  <header>
    <figure class="image is is-96x96">
      <img src="../assets/logo.png" alt="">
    </figure>
  </header>
</template>

<script>
  import { defineComponent } from "vue";

  export default defineComponent({
    name: "BarraLateral"
  })
</script>

<style scoped>
  header {
    padding: 1rem;
    background: #0d3b66;
    width: 100%;
    height: 100vh;
  }
  @media only screen and (max-width: 768px) {
    header {
      padding: 2.5rem;
      height: auto;
    }
  }
</style>
