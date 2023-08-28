<template>
  <div class="page">
    <div class="card">
      <div>
        <img
            v-inline-svg="qr"
            alt="qr"
            class="qr"
        >
        <img
            v-inline-svg="logo"
            alt="logo"
            class="logo"
        >
      </div>
      <div class="phone">
        <a href="https://bit.ly/PendaftaranPelayanIbadahKOMPAK" target="_blank">
          0896 8550 1043
        </a>
      </div>
    </div>
  </div>
</template>

<script setup>
import { vInlineSvg } from '@/directives/inline-svg'
import { useAppStore } from '@/stores/app'
import { onMounted, onUnmounted } from 'vue'
import { RouterLink } from 'vue-router'
import qr from '@/assets/images/registration-qr.svg'
import logo from '@/assets/images/icon.svg'
import page from '@/constants/page'

const { setBackground } = useAppStore()

onMounted(() => {
  setBackground('var(--sp-c-purple)')
  setBackground('var(--sp-grad-purple-circle)')
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
  border-radius: 15px;
}

.qr {
  max-width: 500px;
  height: auto;
  display: block;
  margin: 140px auto auto;
  //box-shadow: var(--sp-shadow--m);

  :deep(*) {
    fill: #fffcdb;
    filter: drop-shadow(var(--sp-shadow--l));
  }

  :deep .bit-ly-logo {
    opacity: 0;
  }
}

.logo {
  height: 25%;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  overflow: visible;

  :deep(*) {
    filter: drop-shadow(0 0 5px rgba(180, 41, 41, 0.2));
    //filter: drop-shadow(var(--sp-shadow--l));
  }
}

.phone {
  font-size: 40px;
  margin: 24px auto;
  text-align: center;
  font-weight: 600;
  color: #fefac4;
}

a {
  text-decoration: none;
  color: #fefac4;
}
</style>
