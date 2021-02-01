select Name 
from 
(
  select CandidateId as id
  from vote
  group by CandidateId
  order by count(id) desc
  limit 1
) as Winner join Candidate
on Winner.id = Candidate.id