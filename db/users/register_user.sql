insert into users (
    first_name,
    last_name,
    email
    
) values (
    $1,
    $2,
    $3
);

insert into password(
    user_id ,
    password
)values(
    (select max(user_id) from users),
    $4
);

select email, user_id, first_name, last_name from users
where email = $3

