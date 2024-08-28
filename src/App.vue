<script setup>
import { RouterView, RouterLink } from 'vue-router';
import useMember from './stores/useMember';

const { userId, signout } = useMember();
</script>

<template>
  <nav class="navbar navbar-expand-lg navbar-light bg-light">
    <div class="container-fluid">
      <RouterLink to="/" class="navbar-brand">MyApp</RouterLink>
      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
          <li class="nav-item">
            <RouterLink to="/" class="nav-link">Main</RouterLink>
          </li>
          <li class="nav-item">
            <RouterLink to="/todo" class="nav-link">Todo</RouterLink>
          </li>
        </ul>
        <ul class="navbar-nav ml-auto">
          <li class="nav-item" v-if="userId.mid === ''">
            <RouterLink to="/login" class="nav-link">Login</RouterLink>
          </li>
          <li class="nav-item" v-if="userId.mid !== ''">
            <button class="btn btn-outline-danger" @click="signout">Logout</button>
          </li>
        </ul>
      </div>
    </div>
  </nav>
  <div class="container mt-3">
    <RouterView></RouterView>
  </div>
</template>

<style scoped>
.nav-link {
  margin-right: 15px;
}
</style>
