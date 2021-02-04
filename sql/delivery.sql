select round(
  sum(order_date = customer_pref_delivery_date) * 100
  /
  count(*),
  2
) as immediate_percentage
from Delivery