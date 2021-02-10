select
  (sum(ifnull(c.apple_count, 0)) + sum(b.apple_count)) as apple_count,
  (sum(ifnull(c.orange_count, 0)) + sum(b.orange_count)) as orange_count
from Boxes b
left join Chests c
on b.chest_id = c.chest_id