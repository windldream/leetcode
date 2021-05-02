with A as (
  select B.account_id, yearmonth
  from Accounts B
  join (
    select account_id, date_format(day, '%Y%m') yearmonth, sum(amount) total_income
    from Transactions
    where type = 'Creditor'
    group by account_id, date_format(day, '%Y%m')
  ) C
  using(account_id)
  where total_income > max_income
)
select distinct A1.account_id
from A A1
join A A2
on A1.account_id = A2.account_id
  and period_diff(A2.yearmonth, A1.yearmonth) = 1
order by A1.account_id