select round(avg(a.event_date is not null), 2) as fraction
from 
(
  select player_id, min(event_date) as login
  from Activity 
  group by player_id
) p
left join Activity a
on p.player_id = a.player_id and datediff(a.event_date, p.login) = 1
