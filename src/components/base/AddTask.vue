<template>
  <v-dialog
    v-model="tarefaState.addTarefa"
    scrollable
    persistent
    max-width="1000px"
    transition="dialog-transition"
  >
    <v-card>
      <v-card-title primary-title>{{ tarefaState.addTarefaTitle }}</v-card-title>

      <v-card-text>
        <v-container grid-list-xl>
          <v-layout row wrap>
            <v-flex xs12>
              <v-text-field outlined label="Descrição*" v-model="tarefa.descricao"></v-text-field>
            </v-flex>

            <v-flex xs12 md6>
              <v-select
                outlined
                :items="['Minhas tarefas', 'Trabalho', 'Pessoal']"
                v-model="tarefa.categoria"
                label="Categoria*"
              ></v-select>
            </v-flex>

            <v-flex xs12 md6>
              <v-menu
                v-model="menu"
                :close-on-content-click="false"
                transition="scale-transition"
                offset-y
                max-width="290px"
                min-width="290px"
              >
                <template v-slot:activator="{ on, attrs }">
                  <v-text-field
                    v-model="computedDateFormatted"
                    label="Data para conclusão"
                    prepend-icon="mdi-calendar-today"
                    readonly
                    v-bind="attrs"
                    v-on="on"
                    outlined
                  ></v-text-field>
                </template>
                <v-date-picker v-model="tarefa.data" no-title @input="menu = false" locale="pt-BR"></v-date-picker>
              </v-menu>
            </v-flex>
          </v-layout>
        </v-container>
      </v-card-text>

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
    ...mapState(["appConfig", "tarefaState"]),
    computedDateFormatted() {
      return this.formatDate(this.tarefa.data);
    }
  },
  data: () => ({
    tarefa: {},
    menu: false
  }),
  methods: {
    formatDate(date) {
      if (!date) return null;

      const [year, month, day] = date.split("-");
      return `${month}/${day}/${year}`;
    }
  }
};
</script>

<style>
</style>