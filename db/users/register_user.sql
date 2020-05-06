insert into users (
    first_name,
    last_name,
    email,
    password
) values (
    $1,
    $2,
    $3,
    $4
);

select email, user_id, first_name, last_name from users
where email = $3

