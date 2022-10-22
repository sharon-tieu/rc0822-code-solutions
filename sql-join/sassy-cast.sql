SELECT "a"."lastName",
       "a"."firstName"
FROM "actors" AS "a"
JOIN "castMembers" AS "cm" USING ("actorId")
JOIN "films" AS "f" USING ("filmId")
WHERE "f"."title" = 'Jersey Sassy';
