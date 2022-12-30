import { loadTranslations, locale } from '$lib/translations';

import 'uno.css';
import '@unocss/reset/tailwind.css'

export const load = async (options: any) => {
  const { pathname } = options.url;
  const defaultLocale = 'zh';
  const initLocale = locale.get() ?? defaultLocale;
  console.log(initLocale)
  await loadTranslations(initLocale, pathname);
  return {};
};
