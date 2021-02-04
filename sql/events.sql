select e.business_id
from Events e
join (
  select event_type, avg(occurences) as avg_occ
  from Events
  group by event_type
) t
on e.event_type = t.event_type and e.occurences > t.avg_occ
group by e.business_id
having count(*) >= 2
