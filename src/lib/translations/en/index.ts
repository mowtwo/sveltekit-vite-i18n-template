import { defineLoader } from "../helper";

export default defineLoader({
  locale: 'en',
  key: 'lang',
  async loader() {
    return (await import('./lang.json')).default
  }
})
