<template>
  <v-app-bar app color="primary" dark>
    <div class="d-flex align-center"></div>
    <v-spacer></v-spacer>
    <router-link to="/">
      <v-btn target="_blank" text>
        Inicio
        <v-icon>mdi-open-in-new</v-icon>
      </v-btn>
    </router-link>
    <router-link to="/Ejercicio1">
      <v-btn target="_blank" text>
        Ejercicio 1
        <v-icon>mdi-open-in-new</v-icon>
      </v-btn>
    </router-link>

    <router-link to="/Ejercicio2">
      <v-btn target="_blank" text>
        Ejercicio 2
        <v-icon>mdi-open-in-new</v-icon>
      </v-btn>
    </router-link>

    <router-link to="/Ejercicio3">
      <v-btn target="_blank" text>
        Ejercicio 3
        <v-icon>mdi-open-in-new</v-icon>
      </v-btn>
    </router-link>
  </v-app-bar>
</template>

<script>
//import { mapGetters } from "vuex";
//import { auth } from "../db";
//import sidebar from "./Sidebar";

export default {
  data: () => ({
    side: {
      drawer: false,
    },
  }),

  computed: {
    /* ...mapGetters({
      // map `this.user` to `this.$store.getters.user`
      user: "user"
    })*/
  },
  methods: {
    /*signOut() {
      auth.signOut().then(() => {
        this.$router.replace({
          name: "Home"
        });
      });
    }*/
  },
  components: {},
};
</script>
