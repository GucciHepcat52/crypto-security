const bcrypt = require("bcryptjs");
const users = [];

module.exports = {
  login: (req, res) => {
    console.log("Logging In User");
    const { username, password } = req.body;

    for (let i = 0; i < users.length; i++) {
      const existingPassword = bcrypt.compareSync(
        password,
        users[i].passwordHash
      );
      if (users[i].username === username && existingPassword) {
        const copyUserObj = { ...users[i] };
        delete copyUserObj.passwordHash;
        console.log(copyUserObj);
        res.status(200).send(users[i]);
        return;
      }
    }
    res.status(400).send("User not found.");
  },
  register: (req, res) => {
    console.log("Registering User");
    const { username, email, firstName, lastName, password } = req.body;
    let salt = bcrypt.genSaltSync(5);
    const passwordHash = bcrypt.hashSync(password, salt);

    const newUser = {
      username,
      email,
      firstName,
      lastName,
      passwordHash,
    };
    users.push(newUser);
    console.log(users);
    res.status(200).send(newUser);
  },
};
