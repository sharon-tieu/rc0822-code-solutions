SELECT "a"."line1" AS "address",
       "c"."name" AS "city",
       "a"."district",
       "co"."name" AS "country"
FROM "addresses" AS "a"
JOIN "cities" AS "c" USING ("cityId")
JOIN "countries" AS "co" USING ("countryId");
