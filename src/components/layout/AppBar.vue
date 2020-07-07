<template>
  <v-app-bar app color="primary" dark>
    <v-app-bar-nav-icon @click.stop="appConfig.drawer = !appConfig.drawer"></v-app-bar-nav-icon>
    <v-toolbar-title>Listodo</v-toolbar-title>

    <v-spacer></v-spacer>

    <v-switch :label="appConfig.dark ? 'Modo claro' : 'Modo escuro'" v-model="appConfig.dark"></v-switch>
  </v-app-bar>
</template>

<script>
import { mapState } from "vuex";

export default {
  name: "AppBar",
  computed: {
    ...mapState(["appConfig"])
  }
};
</script>