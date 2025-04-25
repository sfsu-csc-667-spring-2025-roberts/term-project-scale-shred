import bcrypt from "bcrypt";
import crypto from "crypto";

import db from "../connection";

const register = async (email: string, username: string, password: string) => {
  const sql = `INSERT INTO users (email, username, password, gravatar) 
    VALUES ($1, $2, $3, $4) RETURNING id, username, gravatar`;

  const hashedPassword = await bcrypt.hash(password, 10);

  const {
    id,
    username: registeredUsername,
    gravatar,
  } = await db.one(sql, [
    email,
    username,
    hashedPassword,
    crypto.createHash("sha256").update(email).digest("hex"),
  ]);

  return { id, username: registeredUsername, gravatar, email };
};

const login = async (identifier: string, password: string) => {
  const sql = `
    SELECT * FROM users 
    WHERE email = $1
    OR username = $1`;

  const {
    id,
    username,
    gravatar,
    password: encryptedPassword,
  } = await db.oneOrNone(sql, [identifier]);

  const isValidPassword = await bcrypt.compare(password, encryptedPassword);

  if (!isValidPassword) {
    throw new Error("Invalid credentials");
  }

  return { id, username, gravatar, identifier };
};

export default { register, login };
