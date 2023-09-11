<script setup lang="ts">
import { onBeforeUnmount, onMounted, ref } from 'vue'
import Ball from './components/Ball.vue'
import { doubleColorsBalls } from './lib/core'

const count = ref(5)

const ballsGroup = ref<any[]>([])

function refresh() {
  ballsGroup.value = []
  for (let i = 0; i < count.value; i++) {
    ballsGroup.value.push(doubleColorsBalls())
  }
}

const time = ref(new Date())

let timer: number

onMounted(() => {
  refresh()

  timer = setInterval(() => {
    time.value = new Date()
  }, 1000)
})

onBeforeUnmount(() => {
  if (timer) {
    clearInterval(timer)
  }
})

</script>

<template>
  <button @click="refresh">换一组</button>

  <p v-for="balls of ballsGroup">
    <Ball v-for="ball of balls.redBalls" :n="ball" style="background-color: red;" />
    <Ball :n="balls.blueBall" style="background-color: rgb(0, 110, 255);" />
  </p>

  <footer>{{ time }}</footer>
</template>

<style scoped>
</style>
