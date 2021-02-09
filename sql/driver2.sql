with recursive t as (
  select 1 as n
  union all
  select n + 1 from t
  where n < 12
)
select 
  month,
  round(
    avg(ride_distance) over(order by month rows between current row and 2 following),
    2
  ) as average_ride_distance,
  round(
    avg(ride_duration) over(order by month rows between current row and 2 following),
    2
  ) as average_ride_duration
from (
  select
    t.n as month,
    ifnull(sum(ride_distance), 0) as ride_distance,
    ifnull(sum(ride_duration), 0) as ride_duration
  from AcceptedRides a
  join Rides r
  on a.ride_id = r.ride_id
    and year(requested_at) = '2020'
  right join t
  on t.n = month(r.requested_at)
  group by t.n
) t 
limit 10