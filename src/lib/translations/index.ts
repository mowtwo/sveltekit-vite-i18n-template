import i18n from "sveltekit-i18n"
import cn from "./cn"
import en from "./en"

export const {
  t, locale, locales, loading, loadTranslations
} = new i18n({
  loaders: [
    cn, en
  ]
})
