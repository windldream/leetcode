select 
  ad_id,
  round(
    ifnull(sum(if(action = 'Clicked', 1, 0)) / sum(if(action != 'Ignored', 1, 0)) * 100, 0),
    2
  ) as ctr 
from Ads
group by ad_id
order by ctr desc, ad_id