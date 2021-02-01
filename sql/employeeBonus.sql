select e.name, b.bonus
from Employee e
left join Bonus b
on e.empId = b.empId
where ifnull(bonus, 0) < 1000