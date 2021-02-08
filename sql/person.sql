select c2.name as country
from Calls c1, Country c2, Person p
where (p.id = c1.caller_id or p.id = c1.callee_id)
  and c2.country_code = left(p.phone_number, 3)
group by c2.name
having avg(duration) > (select avg(duration) from Calls)