select session_id
from Playback
where session_id not in(
  select distinct session_id 
  from Playback a
  join Ads b
  on a.customer_id = b.customer_id
  where timestamp between start_time and end_time
)