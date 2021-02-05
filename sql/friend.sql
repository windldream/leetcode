select activity
from Friends
group by activity
having
  count(*) > some(select count(*) from Friends group by activity)
  and
  count(*) < some(select count(*) from Friends group by activity)