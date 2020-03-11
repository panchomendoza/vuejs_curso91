<template>
<div>
  <h2>Bienvenido {{usuario.nombre}}</h2>
</div>
</template>

<script>

import { mapState } from "vuex";

export default {
 name: 'Home',
 computed: {
   ...mapState(['usuario'])
 }
};
</script>
