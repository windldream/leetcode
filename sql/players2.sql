select p.player_id, p.player_name, count(*) as grand_slams_count
from Players p
inner join
(
  select Wimbledon as player_id
  from Championships
  union all
  select Fr_open as player_id
  from Championships
  union all
  select US_open as player_id
  from Championships
  union all
  select Au_open as player_id
  from Championships
) as t
on p.player_id = t.player_id
group by p.player_id