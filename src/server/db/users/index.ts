import bcrypt from "bcrypt";
import crypto from "crypto";

import db from "../connection";

const register = async (email: string, password: string) => {
  const sql =
    "INSERT INTO users (email, password, gravatar) VALUES ($1, $2, $3) RETURNING id, gravatar";

  const hashedPassword = await bcrypt.hash(password, 10);

  const { id, gravatar } = await db.one(sql, [
    email,
    hashedPassword,
    crypto.createHash("sha256").update(email).digest("hex"),
  ]);

  return { id, gravatar, email };
};

const login = async (email: string, password: string) => {
  const sql = "SELECT * FROM users WHERE email = $1";

  const {
    id,
    gravatar,
    password: encryptedPassword,
  } = await db.one(sql, [email]);

  const isValidPassword = await bcrypt.compare(password, encryptedPassword);

  if (!isValidPassword) {
    throw new Error("Invalid credentials");
  }

  return { id, gravatar, email };
};

export default { register, login };
