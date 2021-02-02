select followee as follower, count(distinct follower) num
from follow
where followee in (select follower from follow)
group by followee