select 
  if ( 
    id % 2 = 0,
    id - 1,
    if (
      id = (select count(distinct id) from seat),
      id,
      id + 1
    )
  ) as id, student
from seat
order by id
