import { prisma } from "../../database";

export async function deletePhoneService(id: number): Promise<void> {
  await prisma.phone.delete({ where: { id } });
}
