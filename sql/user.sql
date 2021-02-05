select 
  u.name,
  ifnull(t.total_dis, 0) as travelled_distance
from Users u
left join (
  select user_id, sum(distance) as total_dis
  from Rides
  group by user_id
) t
on u.id = t.user_id
order by travelled_distance desc, name
