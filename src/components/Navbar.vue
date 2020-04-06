<template>
  <nav>
    <v-app-bar app color="light" dark>
      <v-app-bar-nav-icon @click="drawer = !drawer"></v-app-bar-nav-icon>

      <router-link :to="{ name: 'home' }">
        <span>Vue</span>
      </router-link>

      <v-spacer></v-spacer>

      <v-btn @click="cerrarSesion()">
        <span class="mr-2" color="red">Cerrar Sesión</span>
        <v-icon>open_in_new</v-icon>
      </v-btn>
    </v-app-bar>

    <v-navigation-drawer color="indigo" v-model="drawer" temporary app>
      <v-layout column align-center mt-5>
        <v-flex>
          <v-avatar>
            <img :src="usuario.foto" alt="avatar">
          </v-avatar>
        </v-flex>
        <v-flex>
          <p class="mt-3 white--text">{{usuario.nombre}}</p>
        </v-flex>
      </v-layout>

      <v-divider></v-divider>

      <v-list dense nav>
        <v-list-item v-for="(item, index) in items" :key="index"
        :to="item.to">
          <v-icon class="white--text">
            {{ item.icon }}
          </v-icon>
          <v-list-item-content>
            <v-list-item-title class="white--text">
              {{ item.title }}
            </v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
  </nav>
</template>

<script>
import { mapActions, mapState } from "vuex";

export default {
  name: "Navbar",
  data() {
    return {
      drawer: true,
      items: [
        { title: "Dashboard", icon: "account_box", to: {name:'home'} },
        { title: "Account", icon: "account_box", to: {name:'ingreso'} },
        { title: "Admin", icon: "account_box", to: {name:'admin'} }
      ]
    };
  },
  methods: {
    ...mapActions(["cerrarSesion"])
  },
  computed: {
    ...mapState(['usuario'])
  }
};
</script>
