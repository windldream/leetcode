select s.seller_name
from Seller s
where seller_id not in (
  select distinct seller_id from Orders
  where date_format(sale_date, '%Y') = '2020'
)
order by seller_name