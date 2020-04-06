<template>
  <v-app>
    <Navbar v-if="usuario != ''"></Navbar>
    <v-content>
      <router-view></router-view>
    </v-content>
  </v-app>
</template>

<script>
import Navbar from "../src/components/Navbar"
import { mapState } from "vuex"

export default {
  name: "App",

  components: {
    Navbar 
  },
  computed: {
    ...mapState(['usuario'])
  },
  data: () => ({
    //
  })
};
</script>
