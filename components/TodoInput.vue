// simple input component
<template>
  <input
    ref="todo"
    type="text"
    v-model="inputValue"
    placeholder="Add a new todo..."
    @keydown.enter="submitTodo"
  />
</template>
<script setup lang="ts">
const inputValue = ref("");
const todo = ref<HTMLInputElement>();
const emit = defineEmits<{ (e: "todo", todo: string): void }>();
const submitTodo = (todo: Event) => {
  const target = todo.target as HTMLInputElement;
  emit("todo", target.value);
  inputValue.value = "";
};
</script>

<style scoped>
/* input has no border, just a 2px bottom border */
input {
  border: none;
  background-color: white;
  text-align: center;
  width: 100%;
  padding: 20px;
  line-height: 2rem;
  font-size: 1.2rem;
  margin: 0;
  color: #4f4b5c;
  font-weight: 600;
}
/* outline */
input:focus {
  outline: none;
  border-color: #040f0f;
}
input::placeholder {
  font-weight: 300;
  color: #c6c2b3 !important;
  font-size: 1rem;
}
</style>
