<template>
  <v-dialog
    v-model="tarefaState.addTarefa"
    scrollable
    persistent
    max-width="500px"
    transition="dialog-transition"
  >
    <v-card>
      <v-card-title primary-title>{{ tarefaState.addTarefaTitle }}</v-card-title>

      <v-card-text></v-card-text>

      <v-card-actions>
        <v-spacer></v-spacer>
        <v-btn text color="success" @click="tarefaState.addTarefa = false">Fechar</v-btn>
        <v-btn text color="success" @click="tarefaState.addTarefa = false">Salvar</v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script>
import { mapState } from "vuex";
export default {
  name: "AddTask",
  computed: {
    ...mapState(["appConfig", "tarefaState"])
  }
};
</script>

<style>
</style>