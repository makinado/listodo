<template>
  <v-container grid-list-xl>
    <PageTitle main="Home" sub="Bem-vindo ao Listodo" icon="mdi-home" />
  </v-container>
</template>

<script>
export default {
  name: "Home",
  components: {
    PageTitle: () => import("../components/layout/PageTitle")
  }
};
</script>
