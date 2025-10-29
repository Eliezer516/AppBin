import {defineAction} from 'astro:actions'
import { z } from 'astro:schema'
import { db, Bins, eq } from 'astro:db'
import { uid } from 'uid'

export const server = {
  createNewBin: defineAction({
    input: z.object({
      title: z.string(),
      code: z.string()
    }),
    handler: async (input) => {
      const result = await db.insert(Bins).values({
        id: uid(),
        title: input.title,
        code: input.code
      }).returning()
      console.log(result)
      return result
    }
  }),
  getAllBins: defineAction({
    handler: async () => {
      const result = db.select().from(Bins)
      return result
    }
  }),
  getBin: defineAction({
    input: z.object({
      id: z.string()
    }),
    handler: async (input) => {
      const result = db.select().from(Bins).where(eq(Bins.id, input.id))
      return result
    }
  })
}