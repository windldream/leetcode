select dept_name, count(student_id) as student_number
from department
  left join student
  on department.dept_id = student.dept_id
group by dept_name
order by student_number desc, dept_name
