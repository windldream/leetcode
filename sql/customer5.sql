select 
  c.customer_id,
  c.name
from Customers c
join Orders o
on c.customer_id = o.customer_id
join Product p
on p.product_id = o.product_id
group by c.customer_id
having sum(
  case 
    when date_format(o.order_date, '%Y-%m') = '2020-06' then p.price * o.quantity
    else 0
  end
) >= 100
and
  sum(
    case 
      when date_format(o.order_date, '%Y-%m') = '2020-07' then p.price * o.quantity
      else 0
    end
  ) >= 100

