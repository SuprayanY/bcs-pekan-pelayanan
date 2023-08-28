<template>
  <div class="page">
    <div class="card">
      <img
          v-inline-svg="icon"
          alt="icon"
          class="icon"
      >
      <nav class="nav">
        <RouterLink :to="page.path.registerKompak">Daftar Kompak</RouterLink>
      </nav>
    </div>
  </div>
</template>

<script setup>
import { vInlineSvg } from '@/directives/inline-svg'
import { useAppStore } from '@/stores/app'
import { onMounted, onUnmounted } from 'vue'
import { RouterLink } from 'vue-router'
import icon from '@/assets/images/icon.svg'
import page from '@/constants/page'

const { setBackground } = useAppStore()

onMounted(() => {
  setBackground('var(--sp-c-purple)')
})
onUnmounted(() => {
  setBackground('var(--color-background)')
})
</script>

<style lang="scss" scoped>
$margin: 40px;
$padding: 40px;
$width: calc(100vw - (2 * #{$margin}));
$height: calc(100vh - (2 * #{$margin}));

.page {
  width: 100vw;
  height: 100vh;
  display: block;
  padding: $padding;
}

.card {
  width: $width;
  height: $height;
  margin: auto;
  padding: $padding;
  //box-shadow: var(--sp-shadow--s);
  border-radius: 15px;
}

.icon {
  max-width: 600px;
  display: block;
  margin: auto;
}

nav {
  width: 100%;
  font-size: 24px;
  text-align: center;
  margin-top: 16px;
}

nav a.router-link-exact-active {
  color: var(--sp-c-white);
}

nav a.router-link-exact-active:hover {
  background: var(--sp-c-purple-light-2);
}

nav a {
  padding: 8px;
  display: inline-block;
  text-decoration: none;
  color: var(--sp-c-white);

  :hover {
    background: var(--sp-c-purple-light-2);
  }
}
</style>
