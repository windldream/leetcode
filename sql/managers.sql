select Name 
from Employee
where Id in
(
  select distinct ManagerId
  from Employee
  group by ManagerId
  having count(ManagerId) >= 5
) 