select b.book_id, b.name
from Books b
left join Orders o
on b.book_id = o.book_id
where b.available_from < '2019-05-23'
group by b.book_id
having ifnull(sum(if(o.dispatch_date < '2018-06-23', 0, quantity)), 0) < 10
order by b.book_id
