with recursive t as (
  select 1 as n
  union all
  select n + 1 from t
  where n < 12
)
select
  t.n as month,
  round(
    ifnull(s.accepted_drivers / count(distinct d.driver_id), 0) * 100,
    2
  ) as working_percentage
from t
left join
Drivers d
on concat('2020-', if(length(t.n) = 1, concat('0', t.n), t.n)) >= substr(d.join_date, 1, 7)
  and d.join_date < '2021-01-01'
left join
(
  select
    month(r.requested_at) as month,
    count(distinct a.driver_id) as accepted_drivers
  from Rides r
  join
  AcceptedRides a
  on r.ride_id = a.ride_id
  where r.requested_at between '2020-01-01' and '2020-12-31'
  group by month(r.requested_at)
) s
on t.n = s.month
group by t.n, s.accepted_drivers