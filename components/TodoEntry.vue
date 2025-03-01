<template>
  <li
    :class="isEven ? 'even' : 'uneven'"
    tabindex="0"
    @keydown.enter="removeEntry"
  >
    <slot />
    <svg
      width="100%"
      height="100%"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      @click="removeEntry"
    >
      <path
        d="M20 6L9 17L4 12"
        stroke="currentColor"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  </li>
</template>
<script setup lang="ts">
defineProps<{ isEven: boolean }>();
const emit = defineEmits(["removeEntry"]);

const removeEntry = () => {
  emit("removeEntry");
};
</script>
<style>
li {
  list-style: none;
  margin: 0;
  padding: 0;
  font-size: 1.2rem;
  line-height: 2rem;
  padding: 20px;
  font-weight: 600;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: background-color 0.2s linear;
}
li:focus {
  background: #aaa69436;
  outline: none;
}
li:hover {
  background: #aaa69436;
}
.even {
  background: #cac6b836;
}
svg {
  position: absolute;
  right: 0;
  height: 24px;
  width: 24px;
  margin: 0 1rem;
  opacity: 0.5;
  color: #a5a58d;
  transition: opacity 0.2s linear;
}
svg:hover {
  cursor: pointer;
  opacity: 1;
}
</style>
