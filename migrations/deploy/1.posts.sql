-- Deploy oblog:posts to pg

BEGIN;

CREATE DOMAIN url AS TEXT CHECK (VALUE ~ '^\/[a-z]*$');

CREATE TABLE category (
    id integer GENERATED ALWAYS AS IDENTITY PRIMARY KEY, route url NOT NULL UNIQUE, label text NOT NULL UNIQUE
);

CREATE TABLE post (
    id integer GENERATED ALWAYS AS IDENTITY PRIMARY KEY, slug text NOT NULL, title text NOT NULL, excerpt text NOT NULL, content text NOT NULL, category_id int REFERENCES category (id)
);

COMMIT;