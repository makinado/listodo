<template>
  <v-navigation-drawer v-model="appConfig.drawer" app>
    <v-list dense>
      <v-layout my-5 align-center column>
        <span>Leandro Cantiero</span>
        <v-divider width="90%"></v-divider>
      </v-layout>

      <v-list-item class="white--text" to="/" active-class="info">
        <v-list-item-action>
          <v-icon>mdi-home</v-icon>
        </v-list-item-action>
        <v-list-item-content>
          <v-list-item-title>Home</v-list-item-title>
        </v-list-item-content>
      </v-list-item>
      <v-list-item class="white--text" to="/minhasTarefas" active-class="info">
        <v-list-item-action>
          <v-icon>mdi-star</v-icon>
        </v-list-item-action>
        <v-list-item-content>
          <v-list-item-title>Minhas tarefas</v-list-item-title>
        </v-list-item-content>
      </v-list-item>
      <v-list-item class="white--text" to="/trabalho" active-class="info">
        <v-list-item-action>
          <v-icon>mdi-briefcase</v-icon>
        </v-list-item-action>
        <v-list-item-content>
          <v-list-item-title>Trabalho</v-list-item-title>
        </v-list-item-content>
      </v-list-item>
      <v-list-item class="white--text" to="/pessoal" active-class="info">
        <v-list-item-action>
          <v-icon>mdi-account-circle</v-icon>
        </v-list-item-action>
        <v-list-item-content>
          <v-list-item-title>Pessoal</v-list-item-title>
        </v-list-item-content>
      </v-list-item>
      <v-list-item @click="addTask">
        <v-list-item-action>
          <v-icon>mdi-plus</v-icon>
        </v-list-item-action>
        <v-list-item-content>
          <v-list-item-title>Adicionar</v-list-item-title>
        </v-list-item-content>
      </v-list-item>
    </v-list>

    <AddTask />
  </v-navigation-drawer>
</template>

<script>
import { mapState } from "vuex";

export default {
  name: "Menu",
  computed: {
    ...mapState(["appConfig", "tarefaState"])
  },
  components: {
    AddTask: () => import("../base/AddTask")
  },
  methods: {
    addTask() {
      this.tarefaState.tarefa = null;
      this.tarefaState.addTarefaTitle = "Adicionar nova tarefa";
      this.tarefaState.addTarefa = true;
    }
  }
};
</script>