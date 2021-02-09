select 
  t.customer_id,
  t.product_id,
  p.product_name
from (
  select 
    customer_id, product_id, 
    rank() over(partition by customer_id order by cnt desc) as rk
  from (
    select 
      customer_id, product_id,
      count(customer_id) as cnt
      from Orders
      group by customer_id, product_id
  ) t
) t
left join Products p
on t.product_id = p.product_id
where t.rk = 1