select 
  contest_id,
  round(
    count(*) / (select count(*) as total from Users) * 100,
    2
  ) as percentage
from Register
group by contest_id
order by percentage desc, contest_id