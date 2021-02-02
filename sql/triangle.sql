select x, y, z, (
  case when t.x + t.y > t.z and t.x + t.z > t.y and t.y + t.z > t.x then 'Yes'
       else 'No'
  end
) as 'triangle'
from triangle t