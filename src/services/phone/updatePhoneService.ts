import { Phone, Prisma } from "@prisma/client";
import { prisma } from "../../database";

interface UpdatePhoneParams {
  id: number;
  data: Prisma.PhoneUpdateInput;
}

export async function updatePhoneService({ id, data }: UpdatePhoneParams) {
  const phone = prisma.phone.update({ where: { id }, data });

  return phone;
}
