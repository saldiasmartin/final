<template>
  <v-app>
    <navbar></navbar>
    <v-main>
      <router-view></router-view>
      <Home></Home>
    </v-main>
    <Footer></Footer>
  </v-app>
</template>

<script>
import Home from "./components/Home";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";

//import router from "../routes";

export default {
  watch: {},
  name: "App",

  components: {
    Home,
    Navbar,
    Footer,
    
  },

  data: () => ({
    //
  }),
};
</script>
