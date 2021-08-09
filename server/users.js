const users = []

  const addUser = ({ id, name, room, color }) => {
      name = name.trim()
      room = room.toLowerCase();
      color = color
      const user = { id, name, room, color };

      users.push(user);
      console.log(users)
      return { user };
    }
  
  const removeUser = (id) => {
    const index = users.findIndex((user) => user.id === id);

    if(index !== -1){
      users.splice(index, 1)[0];
    } 
  }
  
  const getUser = (id) => {
    return users.find((user) => user.id === id)
  };

  const getNames = (name) => {
    return users.find((user) => user.name === name.trim())
  }

  const getRooms = (room) => {
    return users.find((user) => user.room === room.trim().toLowerCase())
  }
  
  const getUsersInRoom = (room) => {
    return users.filter((user) => user.room === room)
  }

  
  module.exports = { users, addUser, removeUser, getUser, getUsersInRoom, getNames, getRooms };