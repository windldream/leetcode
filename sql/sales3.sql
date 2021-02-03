select product_id, year first_year, quantity, price
from Sales
where (product_id, year) in (
  select product_id, min(year)
  from Sales
  group by product_id
)