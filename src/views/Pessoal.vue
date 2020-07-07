<template>
  <v-container grid-list-xl>
    <PageTitle main="Pessoal" sub="Gerencie suas tarefas pessoais aqui" icon="mdi-account-circle" />
  </v-container>
</template>

<script>
export default {
  name: "Pessoal",
  components: {
    PageTitle: () => import("../components/layout/PageTitle")
  }
};
</script>

<style>
</style>