select spend_date, platform,
      ifnull(sum(total_am), 0) as total_amount,
      ifnull(sum(total_u), 0) as total_users
from
(
  select p.spend_date, p.platform, t.total_am, t.total_u
  from 
  (
    select distinct spend_date, 'desktop' platform from Spending
    union
    select distinct spend_date, 'mobile' platform from Spending
    union
    select distinct spend_date, 'both' platform from Spending
  ) p
  left join(
    select spend_date,
          if (count(distinct platform) = 1, platform, 'both') as platform,
          sum(amount) as total_am,
          count(distinct user_id) as total_u
    from Spending
    group by spend_date, user_id
  ) t
  on p.platform = t.platform and p.spend_date = t.spend_date
) temp
group by spend_date, platform
