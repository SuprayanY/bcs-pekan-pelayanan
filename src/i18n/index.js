import { createI18n } from 'vue-i18n'
import { nextTick } from 'vue'

import localeConstants from '@/constants/locale'

let loadedLocales = new Set()

async function loadLocaleMessage(i18n, locale) {
  if (!localeConstants.supportedLocales.includes(locale)) {
    throw new Error(`Locale "${locale} is not supported.`)
  }
  if (!loadedLocales.has(locale)) {
    const messages = await import(`@/i18n/locales/${locale}/index.js`)
    i18n.global.setLocaleMessage(locale, messages.default)
    loadedLocales.add(locale)
  }
  return await nextTick()
}

export let i18n = {}

export async function useI18n (app) {
  const locale = localeConstants.supportedLocales[0]
  i18n = createI18n({
    legacy: false,
    locale: locale,
    fallbackLocale: locale
  })
  await setLocale(i18n, locale)
  app.use(i18n)
}

export async function setLocale(i18n, locale) {
  await loadLocaleMessage(i18n, locale)
  if (i18n.mode === 'legacy') {
    i18n.global.locale = locale
  } else {
    i18n.global.locale.value = locale
  }
  document.querySelector('html').setAttribute('lang', locale)
}
