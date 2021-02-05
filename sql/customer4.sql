select 
  customer_id,
  customer_name
from Customers c
where customer_id in
(
  select customer_id 
  from Orders
  group by customer_id
  having sum(product_name = 'C') = 0 
    and sum(product_name = 'A') > 0
    and sum(product_name = 'B') > 0
)