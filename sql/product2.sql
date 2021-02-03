select buyer_id
from Sales
left join Product
on Sales.product_id = Product.product_id
group by buyer_id
having sum(product_name = 'S8') > 0 and sum(product_name = 'iPhone') = 0
