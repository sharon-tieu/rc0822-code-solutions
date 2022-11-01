update
  "countries"
SET
  "name" = 'Murica'
WHERE
  "name" = 'United States'
  returning *;
