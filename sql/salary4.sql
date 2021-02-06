select 
  s.company_id, 
  s.employee_id,
  s.employee_name,
  round(
    case 
      when t.max_salary < 1000 then s.salary
      when t.max_salary <= 10000 then s.salary * (1 - 0.24)
      else s.salary * (1 - 0.49)
    end
  ) as salary
from Salaries s
left join
(
  select 
    company_id,
    max(salary) as max_salary
  from Salaries
  group by company_id
) t
on s.company_id = t.company_id