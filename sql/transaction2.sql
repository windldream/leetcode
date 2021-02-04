select 
  date_format(trans_date, '%Y-%m') as month,
  country,
  sum(state = 'approved') as approved_count,
  sum(if(state = 'approved', amount, 0)) as approved_amount,
  sum(state = 'chargeback') as chargeback_count,
  sum(if(state = 'chargeback', amount, 0)) as chargeback_amount
from
(
  select * from Transactions
  union all
  select id, country, 'chargeback' state, amount, c.trans_date
  from Chargebacks c
  left join Transactions t
  on c.trans_id = t.id
) t
group by month, country
having approved_amount or chargeback_amount