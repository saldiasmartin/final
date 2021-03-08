<template>
  <v-container>
    <v-row class="text-center">
      <v-col class="mb-4">
        <h1 class="display-2 font-weight-bold mb-3">Ejercicio 1</h1>
        <p class="subheading font-weight-regular">
          Llamada a una Api
        </p>
        
        <a
          href="https://jsonplaceholder.typicode.com/posts"
          target="_blank"
          rel="noopener"
          >Api <br />https://jsonplaceholder.typicode.com/posts</a>
      </v-col>
      <v-col class="mb-5" cols="12">
        <v-card>
          <v-card-title>
            Listado
            <v-spacer></v-spacer>
            <v-text-field
              v-model="search"
              append-icon="mdi-magnify"
              label="Search"
              single-line
              hide-details
            ></v-text-field>
          </v-card-title>
          <v-data-table
            :headers="headers"
            :items="info"
            :pagination.sync="pagination"
            item-key="id"
            class="elevation-1"
          >
            <template slot="items" slot-scope="props">
              <td>{{ props.item.id }}</td>
              <td>{{ props.item.title }}</td>
            </template>
          </v-data-table>
        </v-card>
      </v-col>
    </v-row>
     <hr>
  </v-container>
</template>

<script>
import axios from "axios";

export default {
  name: "Ejercicio1",
  data() {
    return {
      search: "Buscar",
      headers: [
        { text: "#", value: "id" },
        { text: "Título", value: "title" },
        { text: "Descripción", value: "body" },
      ],
      info: [],
    };
  },
  mounted() {
    axios
      .get("https://jsonplaceholder.typicode.com/posts")
      .then((response) => (this.info = response.data));
  },
  methods: {
    getTodos() {
      console.log("aca va el codigo");
    },
  },
};
</script>
