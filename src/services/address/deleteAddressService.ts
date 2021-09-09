import { prisma } from "../../database";

export async function deleteAddressService(id: number): Promise<void> {
  await prisma.address.delete({ where: { id } });
}
