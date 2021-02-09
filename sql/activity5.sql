select
  machine_id,
  round(
    sum(if(activity_type = 'end', timestamp, -timestamp))
    /
    count(*)
    * 2,
    3
  ) as processing_time
from Activity
group by machine_id
  