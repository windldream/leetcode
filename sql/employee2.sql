select e.employee_id, t.total as team_size
from Employee e
left join 
(
  select team_id, count(distinct employee_id) as total
  from Employee
  group by team_id
) t
on e.team_id = t.team_id