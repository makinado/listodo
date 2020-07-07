<template>
  <v-container grid-list-xl>
    <PageTitle main="Minhas tarefas" sub="Gerencie as suas tarefas" icon="mdi-star" />
  </v-container>
</template>

<script>
export default {
  name: "MinhasTarefas",
  components: {
    PageTitle: () => import("../components/layout/PageTitle")
  }
};
</script>

<style>
</style>