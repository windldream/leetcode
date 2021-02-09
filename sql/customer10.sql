with recursive t1 as
(
  select 1 as n
  union all
  select n + 1 from t1
  where n < 100
)
select n as ids
from t1
where n <= (select max(customer_id) from Customers) 
  and n not in (select customer_id from Customers)
