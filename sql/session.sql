select '[0-5>' bin, count(*) as total
from Sessions
where duration >= 0 and duration < 5 * 60
union all
select '[5-10>' bin, count(*) as total
from Sessions
where duration >= 5 * 60 and duration < 10 * 60
union all
select '[10-15>' bin, count(*) as total
from Sessions
where duration >= 10 * 60 and duration < 15 * 60
union all
select '15 or more' bin, count(*) as total
from Sessions
where duration >= 15 * 60