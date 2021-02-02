select rid as 'id', count(aid) as 'num'
from 
(
  select r1.requester_id as rid, r1.accepter_id as aid
  from request_accepted as r1
  union all
  select r2.accepter_id as rid, r2.requester_id as aid
  from request_accepted as r2
) as a
group by rid
order by num desc
limit 1