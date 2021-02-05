select 
  invoice_id,
  customer_name,
  price,
  count(c1.user_id) as contacts_cnt,
  count(
    case when c1.contact_name in (select customer_name from Customers) then 1
         else null
    end
  ) as trusted_contacts_cnt
from Invoices i
join Customers c 
on c.customer_id = i.user_id
left join Contacts c1
on c1.user_id = i.user_id
group by invoice_id
order by invoice_id