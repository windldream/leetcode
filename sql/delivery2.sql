select round(
  sum(order_date = customer_pref_delivery_date) * 100
  /
  count(*),
  2
) as immediate_percentage
from Delivery
where (customer_id, order_date) in
(
  select customer_id, min(order_date)
  from Delivery
  group by customer_id
)