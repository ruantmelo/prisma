import { Phone, Prisma, User } from "@prisma/client";
import { UserWithoutPassword } from "../../@types";
import { prisma } from "../../database";

interface UpdateUserParams {
  id: string;
  data: Prisma.UserUpdateInput;
}

export async function updateUserService({
  id,
  data,
}: UpdateUserParams): Promise<UserWithoutPassword> {
  const user = await prisma.user.update({
    where: { id },
    data,
    select: { password: false },
  });

  return user;
}
