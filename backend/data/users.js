// In-memory user storage (for demo purposes)
// In a real app, this would be stored in a database
const users = [];

const findUserByEmail = (email) => {
  return users.find(user => user.email === email);
};

const createUser = (name, email, hashedPassword) => {
  const newUser = {
    id: users.length + 1,
    name,
    email,
    password: hashedPassword
  };
  users.push(newUser);
  return { id: newUser.id, name: newUser.name, email: newUser.email };
};

const getAllUsers = () => {
  return users.map(({ id, name, email }) => ({ id, name, email }));
};

module.exports = {
  findUserByEmail,
  createUser,
  getAllUsers
};
