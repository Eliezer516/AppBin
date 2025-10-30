import "dotenv/config";
import { defineAction } from "astro:actions";
import { z } from "astro:schema";
import { drizzle } from "drizzle-orm/libsql";
import { eq } from "drizzle-orm";
import { bincraft } from "../db/schema";
import { uid } from "uid";

const db = drizzle(process.env.DB_FILE_NAME!);

export const server = {
  createNewBin: defineAction({
    input: z.object({
      title: z.string(),
      code: z.string(),
    }),
    handler: async (input) => {
      try {

      
      const result = await db
        .insert(bincraft)
        .values({
          id: uid(),
          title: input.title,
          code: input.code,
        })
        .returning();
      return result[0];
     } catch (err) {
      console.log(err)
     }
    },
  }),
  getAllBins: defineAction({
    handler: async () => {
      const result = db.select().from(bincraft);
      return result;
    },
  }),
  getBin: defineAction({
    input: z.object({
      id: z.string(),
    }),
    handler: async (input) => {
      const result = db
        .select()
        .from(bincraft)
        .where(eq(bincraft.id, input.id));
      return result;
    },
  }),
};
