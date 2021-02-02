select B.Id as id, B.Month as month,
(
  select sum(e2.Salary)
  from Employee e2
  where e2.Id = B.Id 
    and e2.Month <= B.Month
    and e2.Month > B.Month - 3
  order by e2.Month desc limit 3
) as Salary
from
(
  select e1.Id, e1.Month, e1.Salary from Employee e1,
(
  select e.Id, max(e.Month) as Month
  from Employee e 
  group by e.Id
) A
where e1.Id = A.Id and e1.Month < A.Month
order by e1.Id asc, e1.Month desc
) B