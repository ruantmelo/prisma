import { Request, Response } from "express";
import { createPhoneService } from "../services/phone/createPhoneService";
import { deletePhoneService } from "../services/phone/deletePhoneService";
import { listPhoneService } from "../services/phone/listPhoneService";
import { updatePhoneService } from "../services/phone/updatePhoneService";

export class PhoneController {
  async create(req: Request, res: Response): Promise<Response> {
    const { number, user_id } = req.body;
    const phone = await createPhoneService({
      number,
      user: { connect: { id: user_id } },
    });
    return res.json(phone).status(201);
  }

  async delete(req: Request, res: Response): Promise<Response> {
    const { id } = req.params;
    await deletePhoneService(Number(id));

    return res.status(204);
  }

  async index(req: Request, res: Response): Promise<Response> {
    const phones = await listPhoneService();

    return res.json(phones).status(200);
  }

  async update(req: Request, res: Response): Promise<Response> {
    const { id } = req.params;
    const { number } = req.body;

    const phone = await updatePhoneService({
      id: Number(id),
      data: { number },
    });

    return res.json(phone).status(200);
  }
}
