with recursive t(task_id, subtask_id) as (
  select distinct task_id, 1
  from tasks
  union all
  select t.task_id, subtask_id + 1
  from t
  join tasks
  on t.task_id = tasks.task_id
  where subtask_id < subtasks_count
)
select task_id, subtask_id
from t
where (task_id, subtask_id) not in (
  select task_id, subtask_id
  from Executed
)