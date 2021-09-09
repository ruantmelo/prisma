import { Phone } from "@prisma/client";
import { prisma } from "../../database";

export async function listPhoneService(): Promise<Phone[]> {
  const phones = await prisma.phone.findMany({});

  return phones;
}
