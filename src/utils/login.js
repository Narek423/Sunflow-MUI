import users from "../data/users";

const login = (username, password) => {
  for (let user of users) {
    if (user.username === username.toLowerCase() && user.password === password)
      return;
  }
  throw Error("Incorrect username or password!");
};

export default login;
