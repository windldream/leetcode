select u1.*
from UserActivity u1
join UserActivity u2
on u1.username = u2.username
group by u1.username, u1.startDate
having sum(u2.startDate > u1.startDate) = 1 or count(u1.username) = 1