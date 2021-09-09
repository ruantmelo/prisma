import { Phone, Prisma } from "@prisma/client";
import { prisma } from "../../database";

export async function createPhoneService({
  number,
  user,
}: Prisma.PhoneCreateInput): Promise<Phone> {
  const phone = await prisma.phone.create({ data: { number, user } });

  return phone;
}
