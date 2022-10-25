update
  "actors"
set
  "firstName" = 'baby',
  "lastName" = 'yoda'
WHERE
  "actorId" = 15
  returning *;
