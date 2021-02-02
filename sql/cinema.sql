select distinct a.seat_id as seat_id
from cinema a, cinema b
where 
  (
    a.seat_id = b.seat_id - 1 
    or a.seat_id = b.seat_id + 1
  )
  and 
  (a.free != 0 and b.free != 0)
order by seat_id