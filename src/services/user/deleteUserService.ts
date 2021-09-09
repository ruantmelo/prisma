import { prisma } from "../../database";

export async function deleteUserService(id: string): Promise<void> {
  await prisma.user.delete({ where: { id: id } });
}
