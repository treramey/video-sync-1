const users = [];

const addUser = ({ id, name, avatar, room }) => {
  room = room.trim().toLowerCase();

  // const existingUser = users.find(
  //   user => user.room === room && user.name === name
  // );

  // console.log("user line 8", users);

  // if (existingUser) return { error: "Already in room" };

  const user = { id, name, avatar, room };

  users.push(user);

  return { user };
};

const removeUser = id => {
  const index = users.findIndex(user => user.id === id);
  // console.log("line 21 use.js", id);
  // console.log(index);

  if (index)
    return () => {
      // console.log("user.js splice");
      users.splice(index, 1);
    };
};

const getUser = id => users.find(user => user.id === id);

const getUsersInRoom = room => users.filter(user => user.room === room);

module.exports = { addUser, removeUser, getUser, getUsersInRoom };
