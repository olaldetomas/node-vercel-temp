import { serial, text, timestamp, pgTable } from 'drizzle-orm/pg-core';

export const users = pgTable('users', {
  id: serial('id'),
  name: text('name'),
  createdAt: timestamp('created_at').notNull().defaultNow(),
  updatedAt: timestamp('updated_at').notNull().defaultNow(),
});
