<template>
  <div class="w-full h-full overflow-hidden flex flex-col-reverse">
    <NavBar />
    <RouterView class="p-2 w-full h-full"/> <!-- Needed for vue router: where the router component is inserted  -->
  </div>
</template>

<script lang="ts">
  import {RouterView} from 'vue-router'
  import NavBar from './components/common/layout/NavBar.vue';
  export default {
    components: {NavBar, RouterView}
  }
</script>
