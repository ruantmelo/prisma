import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
  await prisma.phone.deleteMany({});
  await prisma.adress.deleteMany({});
  await prisma.user.deleteMany({});

  await prisma.user.create({
    data: {
      name: "Ruan",
      email: "ruantmelo@gmail.com",
      password: "123",
    },
  });

  //   await prisma.user.deleteMany({ where: {} });
  //   await prisma.group.deleteMany({ where: {} });
  //   await prisma.group.create({
  //     data: {
  //       name: "Desenvolvimento",
  //       schedule: [],
  //     },
  //   });
}

main()
  .catch((e) => {
    console.log(e);
    throw e;
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
