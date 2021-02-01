select Id, Company, Salary
from 
(
  select Id, Company, Salary,
  row_number() over(partition by Company order by Salary) as ranking,
  count(Id) over(partition by Company) as cnt
  from Employee
) a
where ranking >= cnt / 2 and ranking <= cnt / 2 + 1