<script setup>
import { useTodoListStore } from "../stores/todoList";
import { storeToRefs } from "pinia";

const store = useTodoListStore();
const { todoList } = storeToRefs(store);
const { toggleCompleted, deleteTodo } = store;
</script>
<template>
  <div v-for="todo in todoList" :key="todo.id" class="item">
    <div class="content">
      <span :class="{ completed: todo.completed }">{{ todo.item }}</span>
      <span>
        <button @click.stop="toggleCompleted(todo.id)">&#10004;</button>
        <button @click="deleteTodo(todo.id)" class="x">&#10060;</button>
      </span>
    </div>
  </div>
</template>
<style scoped>
button {
  margin: 0 10px;
  cursor: pointer;
  background-color: transparent;
  border: none;
}
.item {
  display: flex;
  justify-content: center;
}
.content {
  display: flex;
  font-size: 1.5em;
  justify-content: space-between;
  width: 80vw;
  padding: 5px;
}
.completed {
  text-decoration: line-through;
}
</style>
