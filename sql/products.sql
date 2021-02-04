select *
from
(
  select product_id, new_price as price
  from Products
  where (product_id, change_date) in
  (
    select product_id, max(change_date)
    from Products
    where change_date <= '2019-08-16'
    group by product_id
  )
  union
  select distinct product_id, 10 as price
  from Products
  where product_id not in (
    select product_id
    from Products
    where change_date <= '2019-08-16'
  )
) t