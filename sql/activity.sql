select a1.install_dt, count(a1.player_id) as installs, 
round(
  count(a2.player_id) / count(a1.player_id),
  2
) as Day1_retention
from
(
  select player_id, min(event_date) as install_dt
  from Activity
  group by player_id
) a1
left join Activity a2
  on datediff(a2.event_date, a1.install_dt) = 1 and a2.player_id = a1.player_id
group by a1.install_dt