with recursive t as (
  select 1 as n
  union all
  select n + 1
  from t
  where n < 12
)
select 
  t.n as month,
  sum(ifnull(d.num_driver, 0)) over(order by t.n) as active_drivers,
  ifnull(num_rides, 0) as accepted_rides
from t
left join
(
  select 
    if(year(join_date) < '2020', 1, month(join_date)) as month_driver,
    count(driver_id) as num_driver
  from Drivers
  where year(join_date) <= '2020'
  group by month_driver
) d
on t.n = d.month_driver
left join
(
  select 
    month(requested_at) as month_rides,
    count(ride_id) as num_rides
  from Rides
  where ride_id in (select ride_id from AcceptedRides)
    and year(requested_at) = '2020'
  group by month_rides
) r
on t.n = month_rides
group by t.n
order by t.n