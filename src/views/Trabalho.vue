<template>
  <v-container grid-list-xl>
    <PageTitle main="Trabalho" sub="Gerencie as tarefas do trabalho aqui" icon="mdi-briefcase" />
    <GridTarefas />
  </v-container>
</template>

<script>
export default {
  name: "Trabalho",
  components: {
    PageTitle: () => import("../components/layout/PageTitle"),
    GridTarefas: () => import("../components/base/GridTarefas")
  }
};
</script>

<style>
</style>