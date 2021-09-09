import { Address, Phone } from "@prisma/client";
import { Request, Response } from "express";
import { createUserService } from "../services/user/createUserService";
import { deleteUserService } from "../services/user/deleteUserService";
import { listUserService } from "../services/user/listUserService";
import { updateUserService } from "../services/user/updateUserService";

interface UpdateUserServiceParams {
  email: string;
  name: string;
  password: string;
  addresses: Address[];
  phones: Phone[];
}

export class UserController {
  async create(req: Request, res: Response): Promise<Response> {
    const { email, name, password, addresses, phones } = req.body;
    const user = await createUserService({
      email,
      name,
      password,
      addresses,
      phones,
    });

    return res.json(user).status(201);
  }

  async index(req: Request, res: Response): Promise<Response> {
    const users = await listUserService();

    return res.json(users).status(200);
  }

  async update(req: Request, res: Response): Promise<Response> {
    //Criar rota para dar update de senha
    const { id } = req.params;
    const { email, name, addresses, phones }: UpdateUserServiceParams =
      req.body;
    const user = updateUserService({
      id,
      data: {
        email,
        name,
        addresses: addresses
          ? {
              connectOrCreate: addresses.map(({ id, ...others }) => {
                return {
                  where: { id },
                  create: others,
                };
              }),
            }
          : undefined,
        phones: phones
          ? {
              connectOrCreate: phones.map(({ id, ...others }) => {
                return {
                  where: { id },
                  create: others,
                };
              }),
            }
          : undefined,
      },
    });
    return res.json(user).status(200);
  }

  async delete(req: Request, res: Response): Promise<Response> {
    const { id } = req.params;
    await deleteUserService(id);

    return res.status(204);
  }
}
