<template>
  <v-container grid-list-xl>
    <v-data-table
      class="elevation-2"
      :headers="headers"
      :items="desserts"
      :search="search"
      no-data-text="Nenhuma tarefa adicionada"
    >
      <template v-slot:top>
        <v-toolbar height="80" dark color="primary">
          <v-toolbar-title><v-icon>mdi-drag-handle</v-icon></v-toolbar-title>

          <v-spacer></v-spacer>

          <v-text-field class="pt-5" outlined label="Procurar" v-model="search" prepend-icon="mdi-person-search"></v-text-field>
        </v-toolbar>
      </template>

      <template v-slot:item.status="{ item }">
        <v-chip :color="getColor(item.status)" dark>{{ item.status }}</v-chip>
      </template>

      <template v-slot:item.actions="{ item }">
        <v-tooltip left>
          <template v-slot:activator="{ on }">
            <v-icon v-on="on" class="mr-3 success--text" @click="endItem(item)">mdi-check</v-icon>
          </template>
          <span>Finalizar tarefa</span>
        </v-tooltip>

        <v-tooltip bottom>
          <template v-slot:activator="{ on }">
            <v-icon v-on="on" class="mr-3 warning--text" @click="editItem(item)">mdi-pencil</v-icon>
          </template>
          <span>Editar tarefa</span>
        </v-tooltip>

        <v-tooltip right>
          <template v-slot:activator="{ on }">
            <v-icon v-on="on" class="error--text" @click="deleteItem(item)">mdi-delete</v-icon>
          </template>
          <span>Excluir tarefa</span>
        </v-tooltip>
      </template>
    </v-data-table>
  </v-container>
</template>

<script>
export default {
  name: "GridTarefas",
  props: {
    tela: {
      type: String,
      default: ""
    }
  },
  data: () => ({
    search: null,
    headers: [
      { text: "Status", value: "status" },
      { text: "Descrição", value: "descricao" },
      { text: "Data para conclusão", value: "data_conclusao" },
      { text: "Ações", value: "actions", sortable: false }
    ],
    desserts: [
      {
        status: "Em andamento",
        descricao: "Criar sistema de tarefas",
        data_conclusao: "10/07/2020",
        usuario: "Leandro Cantiero"
      },
      {
        status: "Concluída",
        descricao: "Criar sistema de tarefas",
        data_conclusao: "08/07/2020",
        usuario: "Leandro Cantiero"
      },
      {
        status: "Finalizada",
        descricao: "Criar sistema de tarefas",
        data_conclusao: "02/07/2020",
        usuario: "Leandro Cantiero"
      }
    ],
    pagination: {}
  }),
  methods: {
    getColor(status) {
      if (status == "Concluída") return "success";
      else if (status == "Finalizada") return "error";
      else return "blue";
    },
    endItem(item) {},
    editItem(item) {},
    deleteItem(item) {}
  }
};
</script>

<style>
</style>