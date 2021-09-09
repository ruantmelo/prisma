import { Address, Prisma } from "@prisma/client";
import { prisma } from "../../database";

export async function createAddressService({
  city,
  country,
  state,
  local,
  postal_code,
  user,
}: Prisma.AddressCreateInput): Promise<Address> {
  const address = prisma.address.create({
    data: { user, city, country, state, postal_code, local },
  });

  return address;
}
