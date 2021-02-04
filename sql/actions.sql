select extra as report_reason, count(distinct post_id) as report_count
from Actions a
where a.extra is not null and a.action = 'report' and datediff('2019-07-05', a.action_date) = 1
group by extra