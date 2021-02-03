select project_id
from Project
group by project_id
having count(*) >= all(
  select count(*) amount
  from Project
  group by project_id
)
