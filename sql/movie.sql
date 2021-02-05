(
  select u.name as results
  from Movie_Rating m
  left join Users u
  on m.user_id = u.user_id
  group by m.user_id
  order by count(*) desc, u.name
  limit 1
)
union
(
  select m1.title
  from Movie_Rating m
  left join Movies m1
  on m.movie_id = m1.movie_id
  where m.created_at like '2020-02%'
  group by m1.movie_id
  order by avg(m.rating) desc, m1.title
  limit 1
)