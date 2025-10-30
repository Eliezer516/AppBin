import { sqliteTable, text } from 'drizzle-orm/sqlite-core'

export const bincraft = sqliteTable("bincraft", {
    id: text(),
    title: text(),
    code: text()
})