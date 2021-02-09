select 
  p.name,
  sum(i.rest),
  sum(i.paid),
  sum(i.canceled),
  sum(i.refunded)
from Product p
join Invoice i
on p.product_id = i.product_id
group by i.product_id
order by p.name