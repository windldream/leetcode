select 
  student_id, 
  student_name
from Student
where student_id not in
(
  select student_id
  from Exam e 
  where score >= all(select score from Exam where exam_id = e.exam_id)
    or score <= all(select score from Exam where exam_id = e.exam_id)
) and student_id in (select student_id from Exam)