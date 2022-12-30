import i18n from "sveltekit-i18n"
import zh from "./zh"
import en from "./en"

export const {
  t, locale, locales, loading, loadTranslations
} = new i18n({
  loaders: [
    zh, en
  ]
})
