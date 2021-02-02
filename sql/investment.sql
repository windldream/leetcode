select sum(insurance.TIV_2016) as TIV_2016
from insurance
where insurance.TIV_2015
  in
  (
    select TIV_2015
    from insurance
    group by TIV_2015
    having count(*) > 1
  )
  and
  concat(LAT, LON)
  in
  (
    select concat(LAT, LON)
    from insurance
    group by LAT, LON
    having count(*) = 1
  )