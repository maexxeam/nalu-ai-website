import { de } from './de'
import { en } from './en'
import type { Content, Lang } from './types'

export const content: Record<Lang, Content> = { de, en }

export function getContent(lang: Lang): Content {
  return content[lang]
}

export type { Content, Lang } from './types'
