<template>

</template>

<script setup>
import { ref, onMounted } from 'vue'

const count = ref(0)
onMounted(() => {
  count.value++
})
</script>

<style lang="scss" scoped>

</style>
