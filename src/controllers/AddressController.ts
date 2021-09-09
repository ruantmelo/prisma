import { Request, Response } from "express";
import { createAddressService } from "../services/address/createAddressService";
import { deleteAddressService } from "../services/address/deleteAddressService";
import { listAddressService } from "../services/address/listAddressService";
import { updateAddressService } from "../services/address/updateAddressService";

export class AddressController {
  async create(req: Request, res: Response): Promise<Response> {
    const { user_id, city, country, state, local, postal_code } = req.body;

    const address = await createAddressService({
      city,
      country,
      state,
      local,
      postal_code,
      user: { connect: { id: user_id } },
    });

    return res.json(address).status(201);
  }

  async update(req: Request, res: Response): Promise<Response> {
    const { id } = req.params;

    const { country, state, city, postal_code, local } = req.body;
    const address = await updateAddressService({
      id: Number(id),
      data: { country, state, city, postal_code, local },
    });

    return res.json(address).status(200);
  }

  async delete(req: Request, res: Response): Promise<Response> {
    const { id } = req.params;

    await deleteAddressService(Number(id));

    return res.status(204);
  }

  async index(req: Request, res: Response): Promise<Response> {
    const addresses = await listAddressService();

    return res.json(addresses).status(200);
  }
}
