import { Prisma, User } from "@prisma/client";

const userWithoutPassword = Prisma.validator<Prisma.UserArgs>()({
  select: {
    password: false,
  },
});

export type UserWithoutPassword = Prisma.UserGetPayload<
  typeof userWithoutPassword
>;
