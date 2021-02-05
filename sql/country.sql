select 
  country_name,
  (
    case when avg_w <= 15 then 'Cold'
         when avg_w >= 25 then 'Hot'
         else 'Warm'
    end 
  ) as weather_type
from Countries c
right join 
(
  select country_id, avg(weather_state) as avg_w
  from Weather
  where date_format(day, '%Y-%m') = '2019-11'
  group by country_id, date_format(day, '%Y-%m')
) t
on t.country_id = c.country_id