<template>
  <v-container grid-list-xl>
    <PageTitle
      main="Erro 404"
      sub="Ops, parece que a página que você solicitou não existe ou está fora do ar"
      icon="mdi-close"
    />
  </v-container>
</template>

<script>
export default {
  name: "404",
  components: {
    PageTitle: () => import("../components/layout/PageTitle")
  }
};
</script>

<style>
</style>