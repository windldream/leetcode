select 
  customer_id,
  count(*) as count_no_trans
from Visits v
where visit_id not in (
  select visit_id from Transactions
)
group by customer_id