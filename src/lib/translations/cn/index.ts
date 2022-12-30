import { defineLoader } from "../helper";

export default defineLoader({
  locale: 'cn',
  key: 'lang',
  async loader() {
    return (await import('./lang.json')).default
  }
})
