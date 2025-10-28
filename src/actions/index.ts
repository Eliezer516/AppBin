import {defineAction} from 'astro:actions'
import { z } from 'astro:schema'
import { db, Bins } from 'astro:db'
import { uid } from 'uid'

export const server = {
  createNewBin: defineAction({
    input: z.object({
      title: z.string(),
      code: z.string()
    }),
    handler: async (input) => {
      await db.insert(Bins).values({
        id: uid(),
        title: input.title,
        code: input.code
      })
    }
  })
}