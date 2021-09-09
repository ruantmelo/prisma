import Router from "express";
import { AddressController } from "../controllers/AddressController";

const addressRouter = Router();
const addressController = new AddressController();

addressRouter.get("/", addressController.index);
addressRouter.post("/", addressController.create);
addressRouter.put("/:id", addressController.update);
addressRouter.delete("/:id", addressController.delete);

export { addressRouter };
