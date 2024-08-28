<template>
    <div class="container">
      <div class="notebook-card">
        <div class="card-body">
          <h5 class="card-title">Todo Details</h5>
          <div class="form-group">
            <label for="mno">MNO:</label>
            <input type="text" id="mno" v-model="todo.mno" readonly class="form-control">
          </div>
          <div class="form-group">
            <label for="title">Title:</label>
            <input type="text" id="title" v-model="todo.title" class="form-control">
          </div>
          <div class="form-group">
            <label for="writer">Writer:</label>
            <input type="text" id="writer" v-model="todo.writer" readonly class="form-control">
          </div>
          <div class="form-group">
            <label for="duedate">Due Date:</label>
            <input type="date" id="duedate" v-model="todo.dueDate" class="form-control">
          </div>
          <div class="button-group">
            <button class="btn btn-warning" @click="handleClickModify">Modify</button>
            <button class="btn btn-danger" @click="handleClickDelete">Delete</button>
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script setup>
  import { useRoute, useRouter } from 'vue-router';
  import { ref, onMounted, computed } from 'vue';
  import { getOne, putOne, deleteOne } from '../../apis/todoAPI';
  import useMember from '../../stores/useMember';
  
  const { userId } = useMember();
  const route = useRoute();
  const router = useRouter();
  
  const checkUser = computed(() => {
    return userId.mid === todo.value.writer;
  });
  
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
    if (!checkUser.value) {
      router.replace(`/todo/read/${mno}`);
    }
  });
  
  const handleClickModify = async () => {
    if (checkUser.value) {
      await putOne(todo.value);
      router.replace(`/todo/read/${mno}`);
    }
  };
  
  const handleClickDelete = async () => {
    if (checkUser.value) {
      await deleteOne(mno);
      router.replace("/todo/list");
    }
  };
  </script>
  
  <style scoped>
  .container {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 60vh;
  }
  
  .notebook-card {
    width: 100%;
    max-width: 600px;
    min-height: 400px;
    border: 2px solid #007bff;
    border-radius: 5px;
    padding: 20px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
    background-color: #f8f9fa;
    position: relative;
  }
  
  .button-group {
    display: flex;
    justify-content: flex-end;
    gap: 10px;
    position: absolute;
    bottom: 20px;
    right: 20px;
  }
  
  .form-group {
    margin-bottom: 15px;
  }
  </style>
  