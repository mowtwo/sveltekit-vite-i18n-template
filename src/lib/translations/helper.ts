import type { Config } from "sveltekit-i18n"

export type Loader = Required<Config>['loaders'][number]

export function defineLoader<L extends Loader>(loader: Partial<L>): Loader {
  return loader as Loader
}
