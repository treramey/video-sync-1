create table if not exists users(
  user_id serial primary key,
  first_name varchar(20),
  last_name varchar(20),
  email varchar(150),
  password varchar(250)

);

create table if not exists messages(
    message_id serial primary key,
    message_text varchar(140),
    user_id int references users(user_id),
    room_id int references rooms(room_id)
);

create table if not exists rooms(
    room_id serial primary key,
    room_name varchar(20),
    user_id int references users(user_id)
)