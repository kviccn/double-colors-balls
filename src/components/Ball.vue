<script setup lang="ts">

defineProps<{ n: number }>()

</script>

<template>
  <span class="ball">{{ n < 10 ? `0${n}` : n }}</span>
</template>

<style scoped>
.ball {
  display: inline-flex;
  justify-content: center;
  align-items: center;

  height: 32px;
  width: 32px;
  border-radius: 50%;
  margin: 4px;
  font-weight: bold;
}
</style>
