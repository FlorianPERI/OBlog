-- Revert oblog:posts from pg

BEGIN;

DROP TABLE post, category;

DROP DOMAIN url;

COMMIT;