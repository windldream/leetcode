select tmp.transaction_id as transaction_id
from (
  select transaction_id,
    rank() over(partition by date_format(day, '%Y-%m-%d') order by amount desc) as r
  from Transactions 
) tmp
where tmp.r = 1
order by tmp.transaction_id