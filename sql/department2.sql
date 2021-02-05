select id, name
from Students
where department_id not in (
  select id as department_id
  from Departments
)