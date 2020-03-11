<template>
  <nav>
    <v-app-bar app color="light" dark>
      <v-app-bar-nav-icon @click="drawer = !drawer"></v-app-bar-nav-icon>

      <router-link :to="{name: 'home'}">
        <span>Vue</span>
      </router-link>

      <v-spacer></v-spacer>

      <v-btn @click="cerrarSesion()">
        <span class="mr-2" color="red">Cerrar Sesión</span>
        <v-icon>open_in_new</v-icon>
      </v-btn>
    </v-app-bar>

    <v-navigation-drawer color="primary" v-model="drawer" temporary>

    </v-navigation-drawer>
  </nav>
</template>

<script>
import { mapActions } from "vuex";

export default {
  name: "Navbar",
  data(){
    return{
      drawer: true
    }
  },
  methods: {
    ...mapActions(["cerrarSesion"])
  }
};
</script>