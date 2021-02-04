select 
  query_name,
  round(
    avg(rating / position),
    2
  ) as quality,
  round(
    sum(if(rating < 3, 1, 0)) / count(rating) * 100,
    2
  ) as poor_query_percentage
from Queries
group by query_name