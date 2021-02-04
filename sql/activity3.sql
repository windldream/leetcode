select round(ifnull(avg(a.total_s), 0), 2) as average_sessions_per_user
from
(
  select count(distinct session_id) as total_s
  from Activity
  where datediff('2019-07-27', activity_date) < 30
  group by user_id
) a