<template>
    <div class="container mt-3">
      <div class="d-flex justify-content-start mb-3">
        <RouterLink to="/todo/add" class="btn btn-primary">TodoADD</RouterLink>
      </div>
      <RouterView></RouterView>
    </div>
  </template>
  
  <script setup>
  import { RouterView, RouterLink } from 'vue-router';
  </script>
  
  <style lang="scss" scoped>
  </style>
  