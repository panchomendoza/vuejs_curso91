<template>
  <v-app>
    <Navbar></Navbar>
    <v-content>
      <router-view></router-view>
    </v-content>
  </v-app>
</template>

<script>
import Navbar from "../src/components/Navbar"

export default {
  name: "App",

  components: {
    Navbar 
  },

  data: () => ({
    //
  })
};
</script>
