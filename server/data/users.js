import bcrypt from "bcryptjs";

const users = [
  {
    name: "Admin",
    email: "admin@gmail.com",
    password: bcrypt.hashSync("123456", 10),
    isAdmin: true,
  },
  {
    name: "Quoc Nguyen",
    email: "quoc@gmail.com",
    password: bcrypt.hashSync("123456", 10),
  },
];

export default users;
