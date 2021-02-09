select
  lower(trim(product_name)) as product_name,
  date_format(sale_date, '%Y-%m') as sale_date,
  count(*) as total
from Sales
group by product_name, sale_date
order by product_name, sale_date