import { Address, Prisma } from "@prisma/client";
import { prisma } from "../../database";

export async function listAddressService(): Promise<Address[]> {
  const addresses = prisma.address.findMany({});
  return addresses;
}
