import { defineLoader } from "../helper";

export default defineLoader({
  locale: 'zh',
  key: 'lang',
  async loader() {
    return (await import('./lang.json')).default
  }
})
