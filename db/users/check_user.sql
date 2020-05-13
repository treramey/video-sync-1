select * from users u
join password p on u.user_id = p.user_id
where email = $1