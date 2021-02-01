select avg(number) as median
from
(
  select Number, Frequency,
    sum(Frequency) over(order by number asc) as t1,
    sum(Frequency) over(order by number desc) as t2
  from Numbers
  order by number asc
) a,
(
  select sum(Frequency) total from Numbers
) t
where t1 >= total / 2
and t2 >= total / 2