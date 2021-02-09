select 
  t.user_id, u.user_name, 
  sum(t.credit) as credit, 
  if (sum(t.credit) < 0, 'Yes', 'No') as credit_limit_breached
from
(
  select paid_by as user_id, -amount credit from Transactions
  union all
  select paid_to as user_id, amount credit from Transactions
  union all
  select user_id, credit from Users
) t 
left join Users u
on t.user_id = u.user_id
group by t.user_id
