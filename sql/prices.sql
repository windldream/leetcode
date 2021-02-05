select 
  u.product_id,
  round(
    sum(u.units * p.price) / sum(u.units),
    2
  ) as average_price
from UnitsSold u
left join Prices p
on u.purchase_date >= p.start_date and u.purchase_date <= p.end_date and u.product_id = p.product_id
group by u.product_id