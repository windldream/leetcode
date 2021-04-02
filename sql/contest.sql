select name, mail 
from Users
where user_id in (select distinct user_id
from Contests c
join Users u
on c.gold_medal = u.user_id
group by u.user_id
having count(*) >= 3
union 
select distinct user_id
from (
  select user_id,
    contest_id - dense_rank() over(partition by user_id order by user_id, contest_id) as dense
  from Contests c
  join Users u
  on gold_medal = user_id or silver_medal = user_id or bronze_medal = user_id
) as all_mdeal
group by user_id, dense
having count(dense) >= 3)