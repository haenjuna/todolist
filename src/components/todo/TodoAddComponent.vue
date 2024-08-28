<template>
    <div class="container">
      <div class="form-card">
        <h1 class="text-center">Todo Add Component</h1>
        <div class="form-group">
          <label for="title">Title:</label>
          <input type="text" id="title" v-model="todo.title" class="form-control" placeholder="Enter title">
        </div>
        <div class="form-group">
          <label for="writer">Writer:</label>
          <input type="text" id="writer" v-model="todo.writer" class="form-control" placeholder=작성자 readonly>
        </div>
        <div class="form-group">
          <label for="dueDate">Due Date:</label>
          <input type="date" id="dueDate" v-model="todo.dueDate" class="form-control">
        </div>
        <div class="text-center">
          <button class="btn btn-primary" @click="handleClickAdd">Add</button>
        </div>
      </div>
    </div>
  </template>
  
  <script setup>
  import { ref } from 'vue';
  import { postOne } from '../../apis/todoAPI';
  import { useRouter } from 'vue-router';
  import useMember from '../../stores/useMember';
  
  const router = useRouter();
  const { userId } = useMember();
  
  const todo = ref({
    title: '',
    writer: userId.mid || '', // Automatically set the writer field with userId
    dueDate: ''
  });
  
  const handleClickAdd = async () => {
    // Ensure that `writer` is set to `userId.mid` if it's empty
    todo.value.writer = userId.mid || '';
    await postOne(todo.value);
    router.push(`/todo/list`);
  };
  </script>
  
  <style scoped>
  .container {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
  }
  
  .form-card {
    width: 100%;
    max-width: 500px;
    padding: 20px;
    border: 1px solid #ddd;
    border-radius: 8px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    background-color: #fff;
  }
  
  .form-group {
    margin-bottom: 15px;
  }
  
  .text-center {
    text-align: center;
  }
  
  .btn {
    width: 100%;
  }
  </style>
  