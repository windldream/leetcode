with tempData as (
  select order_id, avg(quantity) as avg_quantity, max(quantity) as max_quantity
  from OrdersDetails
  group by order_id
)
select order_id
from tempData
where max_quantity > (select max(avg_quantity) from tempData)
order by order_id