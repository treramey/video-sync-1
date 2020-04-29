update users 
set email = $1 , first_name = $2 , last_name = $3
where user_id = $4;

select user_id, first_name , last_name ,email from users
where user_id =$4;