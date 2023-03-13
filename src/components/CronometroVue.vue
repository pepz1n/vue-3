<template>
  <section>
    <strong> {{ tempoDecorrido }} </strong>
  </section>
</template>

<script lang="ts">
 import { defineComponent } from "vue";

 export default  defineComponent({
   name: 'CronometroVue',
   props: {
     tempoSegundos: {
       type: Number,
       default: 0,
     },
   },
   computed: {
     tempoDecorrido () : string{
       return new Date(this.tempoSegundos * 1000).toISOString().substring(11, 19)
     }
   },
 })
</script>
