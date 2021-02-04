select group_id, player_id
from(
  select group_id, player_id, sum(score) as score
  from(
    select p.group_id, p.player_id, sum(m.first_score) as score
    from Players p
    join Matches m
    on p.player_id = m.first_player
    group by p.player_id
    union all
    select p1.group_id, p1.player_id, sum(m1.second_score) as score
    from Players p1
    join Matches m1
    on p1.player_id = m1.second_player
    group by p1.player_id
  ) s
  group by player_id
  order by score desc, player_id
) t
group by group_id