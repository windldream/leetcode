with t as (
  select employee_id, name, salary,
    count(1) over(partition by salary) cnt
  from Employees
)
select employee_id, name, salary, dense_rank() over(order by salary) team_id
from t
where cnt > 1
order by team_id, employee_id