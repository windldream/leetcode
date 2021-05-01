select
  team_name,
  sum(matches_played) matches_played,
  sum(points) points,
  sum(goal_for) goal_for,
  sum(goal_against) goal_against,
  sum(goal_for) - sum(goal_against) goal_diff
from (
  select
    home_team_id team_id,
    count(home_team_id) matches_played,
    sum(
      case
      when home_team_goals > away_team_goals then 3
      when home_team_goals = away_team_goals then 1
      else 0
      end
    ) points,
    sum(home_team_goals) goal_for,
    sum(away_team_goals) goal_against
  from
    Matches
  group by
    home_team_id

  union all

  select
    away_team_id team_id,
    count(away_team_id) matches_played,
    sum(
      case
      when away_team_goals > home_team_goals then 3
      when away_team_goals = home_team_goals then 1
      else 0
      end 
    ) points,
    sum(away_team_goals) goal_for,
    sum(home_team_goals) goal_against
  from 
    Matches
  group by
    away_team_id
) rs
join Teams t on rs.team_id = t.team_id
group by 
  rs.team_id
order by
  points desc,
  goal_diff desc,
  team_name
  