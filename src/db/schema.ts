import { int, sqliteTable, text } from "drizzle-orm/sqlite-core";

export const apps = sqliteTable("apps", {
  id: text().notNull(),
  title: text().notNull(),
  code: text().notNull(),
});
