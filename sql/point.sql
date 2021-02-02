select round
  (
    min(abs(p1.x - p2.x))
  ) as shortest
from point p1
join point p2
on p1.x != p2.x