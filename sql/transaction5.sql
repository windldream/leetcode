select 
  u.name,
  sum(t.amount) as balance
from Users u
left join Transactions t
on u.account = t.account
group by t.account
having balance > 10000