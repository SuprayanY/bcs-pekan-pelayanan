import { computed, ref } from 'vue'
import { defineStore } from 'pinia'
import { i18n, setLocale } from '@/i18n'

export const useAppStore = defineStore('main', () => {
  const locale = computed({
    get: () => i18n.global.locale.value,
    set: locale => setLocale(locale)
  })

  return {
    locale,
    setBackground: (background) => {
      document.body.style.background = background
    }
  }
})
