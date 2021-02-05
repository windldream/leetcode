select 
  min(log_id) as start_id,
  max(log_id) as end_id
from (
  select
    log_id,
    log_id - row_number() over(order by log_id) as diff
  from Logs
) a
group by diff
order by start_id