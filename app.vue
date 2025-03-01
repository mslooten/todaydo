<template>
  <div class="app">
    <h1><span>today</span>do</h1>
    <p class="date">{{ formattedDate }}</p>
    <ClientOnly>
      <TodoInput @todo="addTodo" />
      <ul>
        <TodoEntry
          v-for="(todo, index) in todos"
          :isEven="index % 2 === 0"
          @remove-entry="removeTodo(index)"
          >{{ todo.name }}</TodoEntry
        >
      </ul>
    </ClientOnly>
  </div>
</template>
<script setup lang="ts">
interface Todo {
  name: string;
  date: number;
}
const todos = ref<Todo[]>([]);
if (import.meta.client) {
  const localTodos = localStorage?.getItem("todos");
  if (localTodos) {
    todos.value = JSON.parse(localTodos);
  }
}
const formattedDate = new Date().toLocaleDateString(undefined, {
  weekday: "long",
  day: "numeric",
  month: "numeric",
  year: "numeric",
});
const addTodo = (todo: string) => {
  todos.value.splice(0, 0, { name: todo, date: Date.now() });
};

const removeTodo = (index: number) => {
  todos.value.splice(index, 1);
};
watch(todos.value, () => {
  if (import.meta.client) {
    localStorage?.setItem("todos", JSON.stringify(todos.value));
  }
});
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Funnel+Sans:ital,wght@0,300..800;1,300..800&display=swap");
* {
  box-sizing: border-box;
}
body {
  font-family: "Funnel Sans", serif;
  font-optical-sizing: auto;
  background: #f3ebe5;
  color: #4f4b5c;
  margin: 0;
  font-style: normal;
}
.app {
  text-align: center;
}
h1 {
  color: #7c6c77;
  letter-spacing: 0.03rem;
  font-size: 2.6rem;
  margin: 1rem 0;
}
h1 span {
  color: #201335;
}
.date {
  color: #777;
}
ul {
  margin: 0;
  padding: 0;
}
</style>
