select p.project_id, p.employee_id
from Project p
join Employee e
on p.employee_id = e.employee_id
where (p.project_id, e.experience_years) in 
(
  select p.project_id, max(e.experience_years)
  from Project p
  join Employee e
  on p.employee_id = e.employee_id
  group by p.project_id
)