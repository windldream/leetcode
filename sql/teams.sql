select 
  t.team_id, 
  t.team_name,
  ifnull(score, 0) as num_points
from
(
  select team_id, sum(score) as score
  from
  (
    select 
      host_team as team_id,
      sum(
        case when host_goals > guest_goals then 3
            when host_goals < guest_goals then 0
            else 1
        end
      ) as score
    from Matches
    group by host_team
    union all
    select 
      guest_team as team_id,
      sum(
        case when host_goals > guest_goals then 0
            when host_goals < guest_goals then 3
            else 1
        end
      ) as score
    from Matches
    group by guest_team
  ) b
  group by team_id
) a
right join Teams t
on t.team_id = a.team_id
order by num_points desc, t.team_id