with tmp as
(
  select sum(amt > 0) as cnt
  from (
    select user_id, visit_date as dt, 0 amt
    from Visits
    union all
    select user_id, transaction_date as dt, amount as amt
    from Transactions
  ) all_data
  group by user_id, dt
)
select 
  floor(n) transactions_count, count(cnt) as visits_count
from (
  select 0 as n
  union all
  select (@x :=@x + 1) as n from Transactions, (select @x := 0) num
) nums
left join
  tmp on nums.n = tmp.cnt
where n <= (select max(cnt) from tmp)
group by n