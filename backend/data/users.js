import bcrypt from "bcryptjs";

const users = [
  {
    name: "Amin User",
    email: "admin@example.com",
    password: bcrypt.hashSync("12345", 10),
    isAdmin: true,
  },
  {
    name: "Alpha",
    email: "alpha@example.com",
    password: bcrypt.hashSync("12345", 10),
  },
  {
    name: "Rugiatu",
    email: "ru@example.com",
    password: bcrypt.hashSync("12345", 10),
  },
];
export default users;
