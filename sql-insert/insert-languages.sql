insert into "languages" ("name")
  values ('HTML'), ('CSS'), ('JavaScript');
-- -- below will return the rows you want to add (Lines 1-2)
returning *;