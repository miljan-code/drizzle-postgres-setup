import { pgTable, serial, text } from 'drizzle-orm/pg-core';
import { InferModel } from 'drizzle-orm';

export const todos = pgTable('todos', {
  id: serial('id').primaryKey(),
  todo: text('todo').notNull(),
});

export type Todo = InferModel<typeof todos>;
