select user_id, name, mail
from Users
where mail regexp '^[a-zA-Z][a-zA-Z0-9_\.\/\-]*@leetcode.com$'