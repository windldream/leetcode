select  
  item_category Category,
  sum(if(dayofweek(order_date) = 2, quantity, 0)) Monday,
  sum(if(dayofweek(order_date) = 3, quantity, 0)) Tuesday,
  sum(if(dayofweek(order_date) = 4, quantity, 0)) Wednesday,
  sum(if(dayofweek(order_date) = 5, quantity, 0)) Thursday,
  sum(if(dayofweek(order_date) = 6, quantity, 0)) Friday,
  sum(if(dayofweek(order_date) = 7, quantity, 0)) Saturday,
  sum(if(dayofweek(order_date) = 1, quantity, 0)) Sunday
from Items i
left join Orders o
on i.item_id = o.item_id
group by item_category
order by item_category
