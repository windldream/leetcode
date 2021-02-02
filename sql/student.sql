select dept_name, count(student_id) as student_number
from department
  left join student
  on department.dept_id = student.dept_id
group by department.dept_name
order by student_number desc, department.dept_name
