import { Address, Prisma } from "@prisma/client";
import { prisma } from "../../database";

interface UpdateAddressParams {
  id: number;
  data: Prisma.AddressUpdateInput;
}

export async function updateAddressService({
  id,
  data,
}: UpdateAddressParams): Promise<Address> {
  const address = await prisma.address.update({ where: { id }, data });
  return address;
}
