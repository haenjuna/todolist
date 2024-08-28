<template>
    <div class="container mt-4">
      <div class="card notebook-card">
        <div class="card-body">
          <h5 class="card-title">Todo Details</h5>
          <p class="card-text">
            <strong>MNO:</strong> {{ todo.mno }}<br>
            <strong>Title:</strong> {{ todo.title }}<br>
            <strong>Writer:</strong> {{ todo.writer }}<br>
            <strong>Due Date:</strong> {{ todo.dueDate }}
          </p>
          <button class="btn btn-warning mt-3" @click="handleMoveEdit">Edit</button>
        </div>
      </div>
    </div>
  </template>
  
  <script setup>
  import { getOne } from '../../apis/todoAPI';
  import { useRoute, useRouter } from 'vue-router';
  import { ref, onMounted } from 'vue';
  
  const route = useRoute();
  const router = useRouter();
  
  const mno = route.params.mno;
  
  const todo = ref({
    mno: 0,
    title: '',
    writer: '',
    dueDate: ''
  });
  
  onMounted(async () => {
    const data = await getOne(mno);
    todo.value = data;
  });
  
  const handleMoveEdit = () => {
    router.push(`/todo/edit/${mno}`);
  };
  </script>
  
  <style scoped>
  .notebook-card {
    width: 100%; /* Full width */
    max-width: 600px; /* Limit maximum width */
    min-height: 400px; /* Ensure height is long enough */
    border: 2px solid #007bff; /* Blue border to give a notebook-like feel */
    border-radius: 5px; /* Rounded corners */
    padding: 20px; /* Padding inside the card */
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2); /* Shadow for depth */
    background-color: #f8f9fa; /* Light background color */
  }
  </style>
  