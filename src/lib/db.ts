import { db, Bins } from 'astro:db'
import { uid } from 'uid'

export const getAllBins = async () => {
  const result = await db.select().from(Bins)
  return result
}

export const createNewBin = async (title: string, code: string) => {
  const result = await db.insert(Bins).values({
    id: uid(),
    title,
    code
  })
}