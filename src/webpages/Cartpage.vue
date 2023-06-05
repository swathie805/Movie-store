<script setup>
import { useStore } from "../store/index.js";

const store = useStore();
</script>

<template>
  <div class="cart-container">
    <div v-for="movie in store.cart">
      <h1>{{ movie.title }}</h1>
      <img :src="`https://image.tmdb.org/t/p/w500/${movie.poster}`" />
    </div>
  </div>
</template>

<style>
.cart-container {
    display: flex;
    align-items: center;
    justify-content: center;
}

h1 {
    font-size: 20px;
    padding-left: 20px;
}
</style>