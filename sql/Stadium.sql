select distinct a.*
from Stadium a, Stadium b, Stadium c
where ((a.id = b.id - 1 and b.id = c.id - 1)
    or (a.id - 1 = b.id and a.id + 1 = c.id)
    or (a.id - 1 = c.id and c.id - 1 = b.id))
    and (a.people >= 100 and b.people >= 100 and c.people >= 100)
order by a.id