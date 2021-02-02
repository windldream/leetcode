select America, Asia, Europe
from
(
  select row_number() over(order by name) as rn, name as America 
  from student
  where continent = 'America'
) a
left join
(
  select row_number() over(order by name) as rn, name as Asia 
  from student
  where continent = 'Asia'
) b
on a.rn = b.rn
left join
(
  select row_number() over(order by name) as rn, name as Europe 
  from student
  where continent = 'Europe'
) c
on a.rn = c.rn