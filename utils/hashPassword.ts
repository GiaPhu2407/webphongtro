import { compare, compareSync, genSalt, hash } from "bcryptjs";

export const hashPassword = async (password: string) => {
  const salt = await genSalt(10);
  const hashedPassword = await hash(password, salt as string);
  return hashedPassword;
};

export const comparePassword = async (
  plainTextPassword: string,
  hashedPassword: string
) => {
  return await compare(plainTextPassword, hashedPassword);
};
