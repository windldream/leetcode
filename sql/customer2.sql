select 
  distinct visited_on,
  sum_amount as amount,
  round(avg_amount, 2) as average_amount
from
(
  select 
    visited_on,
    sum(amount) over(order by visited_on rows 6 preceding) as sum_amount,
    avg(amount) over(order by visited_on rows 6 preceding) as avg_amount
  from (
    select 
      visited_on,
      sum(amount) as amount
      from Customer
      group by visited_on
  ) t1
) t2
where datediff(visited_on, (select min(visited_on) from Customer)) >= 6