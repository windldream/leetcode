select
  c.name as customer_name,
  a.customer_id,
  a.order_id,
  a.order_date
from (
  select 
    order_id,
    customer_id,
    row_number() over(partition by customer_id order by order_date desc) as count,
    order_date
  from Orders
) a
left join Customers c
on a.customer_id = c.customer_id
where a.count < 4
order by customer_name, customer_id, order_date desc
