select 
  p.product_name,
  sum(unit) as unit
from Products p
left join Orders o
on p.product_id = o.product_id
    and date_format(o.order_date, '%Y-%m') = '2020-02'
group by p.product_id
having unit >= 100