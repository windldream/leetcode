select 
  e1.employee_id,
  e1.name,
  count(*) as reports_count,
  round(avg(e2.age)) as average_age
from Employees e1
join Employees e2
on e1.employee_id = e2.reports_to
group by e2.reports_to
having count(*) > 0
order by employee_id