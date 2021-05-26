select 
  employee_id,
  (case when employee_id % 2 = 1 and substring(name, 1, 1) <> 'M' 
    then salary
    else 0 end  
  )  bonus
from Employees