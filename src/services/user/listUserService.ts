import { prisma } from "../../database";
import { UserWithoutPassword } from "../../@types";

export async function listUserService(): Promise<UserWithoutPassword[]> {
  const users = await prisma.user.findMany({ select: { password: false } });

  return users;
}
