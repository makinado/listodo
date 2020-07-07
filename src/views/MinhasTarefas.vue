<template>
  <v-container grid-list-xl>
    <PageTitle main="Minhas tarefas" sub="Gerencie as suas tarefas" icon="mdi-star" />
    <GridTarefas />
  </v-container>
</template>

<script>
export default {
  name: "MinhasTarefas",
  components: {
    PageTitle: () => import("../components/layout/PageTitle"),
    GridTarefas: () => import("../components/base/GridTarefas")
  }
};
</script>

<style>
</style>