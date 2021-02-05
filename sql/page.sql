select distinct page_id as recommended_page
from Likes
where user_id in
(
  select user1_id 
  from Friendship
  where user2_id = 1
  union all
  select user2_id
  from Friendship
  where user1_id = 1
) and page_id not in (
  select page_id 
  from Likes 
  where user_id = 1
)