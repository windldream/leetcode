select 
  t.product_id,
  product_name,
  report_year,
  sum(total_amount) as total_amount 
from (
  select 
    product_id, 
    "2020" report_year,
    ((
      datediff(
        if(period_end < "2021-01-01", period_end, date("2020-12-31")),
        if(period_start > "2020-01-01", period_start, date("2020-01-01")))
      + 1
    ) * average_daily_sales) as total_amount 
  from Sales 
  having total_amount > 0 
  union all
  select 
    product_id,
    "2019" report_year,
    ((
      datediff(
        if(period_end < "2020-01-01", period_end, date("2019-12-31")),
        if(period_start > "2019-01-01", period_start, date("2019-01-01")))
      + 1
    ) * average_daily_sales) as total_amount 
  from Sales 
  having total_amount > 0  
  union all
  select 
    product_id,
    "2018" report_year,
    ((
      datediff(
        if(period_end < "2019-01-01", period_end, date("2018-12-31")),
        if(period_start > "2018-01-01", period_start, date("2018-01-01")))
      +1
    ) * average_daily_sales) as total_amount 
  from Sales 
  having total_amount > 0  
) t 
left join product p 
on p.product_id = t.product_id                               
group by product_id, report_year 
order by product_id, report_year