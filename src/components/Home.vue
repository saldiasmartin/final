<template>
  <v-container>
    <v-row class="text-center">
      <v-col class="mb-5">
        <h1 class="display-2 font-weight-bold mb-3">
          TRABAJO FINAL CURSO VUE JS
        </h1>

        <p class="subheading font-weight-regular">
          ALUMNO: Saldías Martín
        </p>
      </v-col>

      <v-col class="mb-5" cols="12">
        <h2 class="headline font-weight-bold mb-3">
          Ejercicio 1
        </h2>

        <v-row justify="center">
          <p class="subheading font-weight-regular">
            Componente: Ejercicio1<br />
            Llamada a una Api<br />

            <a
              href="https://jsonplaceholder.typicode.com/posts"
              target="_blank"
              rel="noopener"
              >Api <br />https://jsonplaceholder.typicode.com/posts</a
            >
            <br /><br />

            <router-link to="/Ejercicio1">
              <v-btn color="blue">
                Ejercicio 1
              </v-btn>
            </router-link>
          </p>
        </v-row>
      </v-col>

      <v-col class="mb-5" cols="12">
        <h2 class="headline font-weight-bold mb-3">
          Ejercicio 2
        </h2>

        <v-row justify="center">
          <p class="subheading font-weight-regular">
            Guardar algún dato, que se ingrese en un formulario, en el
            LocalStorage de su cliente.
            <br /><br />

            <router-link to="/Ejercicio2">
              <v-btn color="blue">
                Ejercicio 2
              </v-btn>
            </router-link>
          </p>
        </v-row>
      </v-col>

      <v-col class="mb-5" cols="12">
        <h2 class="headline font-weight-bold mb-3">
          Ejercicio 3
        </h2>

        <v-row justify="center">
          <p class="subheading font-weight-regular">
            Mostrar la información en la consola de desarrollador desde el
            LocalStorage.
            <br /><br />

            <router-link to="/Ejercicio3">
              <v-btn color="blue">
                Ejercicio 3
              </v-btn>
            </router-link>
          </p>
        </v-row>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
/*export default {
 name: "Home",

};*/
</script>
