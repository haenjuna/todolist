<template>
    <div class="container mt-5">
      <div class="row justify-content-center">
        <div class="col-md-4">
          <div class="form-group">
            <label for="midInput">User ID</label>
            <input type="text" id="midInput" class="form-control" v-model="midInput">
          </div>
          <button class="btn btn-primary mt-3 w-100" @click="clickLogin">Login</button>
        </div>
      </div>
    </div>
  </template>
  
  <script setup>
  import { ref } from 'vue';
  import useMember from '../stores/useMember';
  
  const midInput = ref('')
  const { signin } = useMember()
  
  const clickLogin = () => {
    const mid = midInput.value
    signin(mid)
  }
  </script>
  
  <style lang="scss" scoped>
  </style>
  