import Router from "express";
import { PhoneController } from "../controllers/PhoneController";

const phoneRouter = Router();
const phoneController = new PhoneController();

phoneRouter.get("/", phoneController.index);
phoneRouter.post("/", phoneController.create);
phoneRouter.put("/:id", phoneController.update);
phoneRouter.delete("/:id", phoneController.delete);

export { phoneRouter };
