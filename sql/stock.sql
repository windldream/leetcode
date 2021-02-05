select 
  stock_name,
  (
    sum(if(operation = 'sell', price, -price))
  ) as capital_gain_loss
from Stocks
group by stock_name