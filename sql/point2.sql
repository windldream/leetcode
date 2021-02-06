select 
  p1.id p1,
  p2.id p2,
  (abs(p1.x_value - p2.x_value) * abs(p1.y_value - p2.y_value)) as area
from Points p1, Points p2
where p1.id < p2.id
group by p1, p2
having area > 0
order by area desc, p1, p2