import { prisma } from "../../database";
import { UserWithoutPassword } from "../../@types";
import { Prisma } from "@prisma/client";

export async function createUserService({
  name,
  email,
  password,
  phones,
  adresses,
}: Prisma.UserCreateInput): Promise<UserWithoutPassword> {
  const user = await prisma.user.create({
    data: {
      name,
      email,
      password,
      phones,
      adresses,
    },
    select: {
      password: false,
    },
  });

  return user;
}
