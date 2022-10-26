SELECT "genres"."name",
  COUNT(*) AS "totalMovies"
FROM "genres"
JOIN "actors" USING ("actorId")
GROUP BY "lastName" = 'Monroe',
"firstName" = 'Lisa';
SELECT "genres"."name",
      COUNT("genres"."name")
FROM "genres"
JOIN "filmGenre" AS "fg" USING ("genreId")
JOIN "castMembers" AS "cm" USING ("filmId")
JOIN "actors" USING ("actorId")
WHERE "actors"."firstName" = 'Lisa' AND "actors"."lastName" = 'Monroe'
GROUP BY "genres"."name"
