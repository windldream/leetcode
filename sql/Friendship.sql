with t as(
    select user1_id u1, user2_id u2 from Friendship
    union all
    select user2_id u1, user1_id u2 from Friendship
)
select
    u2 user_id,l1.page_id page_id,count(1) friends_likes
from
    Likes l1
left join
    t on l1.user_id = t.u1
left join
    Likes l2 on t.u2 = l2.user_id and l2.page_id = l1.page_id
where
    l2.page_id is null
group by 1, 2
