<script setup lang="ts">


import NavBar from "./components/NavBar.vue";
import Headers from "./components/headers.vue";
</script>

<template>
  <header>
    <main>
      <Headers/>
    </main>
    <div class="wrapper">
      <NavBar/>

      <nav>
        <!--<RouterLink to="/">Home</RouterLink>
        <RouterLink to="/about">About</RouterLink>-->
      </nav>
    </div>
    
  </header>

</template>

<style>

</style>
