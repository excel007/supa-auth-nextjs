import { pgTable, text, uuid, timestamp, primaryKey } from 'drizzle-orm/pg-core';

export const useraccount = pgTable('useraccount', {
   id : uuid('id').defaultRandom().primaryKey(),
   created_at : timestamp('created_at').defaultNow(),
   username : text('username'),
   email : text ('email'),
});