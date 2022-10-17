<template>
  <v-app>
    <v-app-bar app color="primary" dark>
      <v-img src="@/assets/logo.png" contain max-width="48" max-height="48" />
      <span class="ml-4">Dev test for RUVENTS</span>
    </v-app-bar>
    <v-main class="mt-4">
      <index />
    </v-main>
  </v-app>
</template>

<script>

import Index from "@/pages";
export default {
  name: 'App',
  components: {Index},
};
</script>
