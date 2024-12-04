import { defineStore } from "pinia";

export const useTodoListStore = defineStore({
  id: "todo-store",
  state: () => ({
    todoList: [],
    id: 0,
  }),
  getters: {
    doubleCount: (state) => state.counter * 2,
  },
  actions: {
    addTodo(item) {
      this.todoList.push({ item, id: this.id++, completed: false });
    },
    deleteTodo(itemId) {
      this.todoList = this.todoList.filter((object) => {
        return object.id !== itemId;
      });
    },

    toggleCompleted(idToFind) {
      const todo = this.todoList.find((obj) => obj.id === idToFind);
      if (todo) {
        todo.completed = !todo.completed;
      }
    },
  },
});
