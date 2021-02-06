select
  distinct Logins.id,
  Accounts.name
from (
  select
    id,
    diff,
    count(1) as cnt
  from (
    select
      distinct
        id,
        login_date,
        date_sub(login_date, interval dense_rank() over(partition by id order by login_date asc) day) as diff
    from Logins
  ) Logins
  group by id, diff
) Logins
join Accounts
on Logins.id = Accounts.id
where cnt >= 5
order by id