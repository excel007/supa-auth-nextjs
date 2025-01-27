CREATE TABLE "useraccount" (
	"id" uuid PRIMARY KEY NOT NULL,
	"created_at" timestamp DEFAULT now(),
	"username" text,
	"email" text
);
