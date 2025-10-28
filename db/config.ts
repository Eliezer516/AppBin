import { defineDb, defineTable, column } from 'astro:db';
const Bins = defineTable({
  columns: {
    id: column.text(),
    title: column.text(),
    code: column.text()
  }
})
// https://astro.build/db/config
export default defineDb({
  tables: { Bins }
});
