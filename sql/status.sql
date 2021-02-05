select 
  type as period_state,
  min(date) as start_date,
  max(date) as end_date
from (
  select 
    type, 
    date,
    subdate(date, row_number() over(partition by type order by date)) as diff
  from(
    select 'failed' as type, fail_date as date from Failed
    union all
    select 'succeeded' as type, success_date as date from Succeeded
  ) a
) b
where date between '2019-01-01' and '2019-12-31'
group by type, diff
order by start_date