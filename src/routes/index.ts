import Router from "express";
import { addressRouter } from "./addressRouter";
import { phoneRouter } from "./phoneRouter";
import { userRouter } from "./userRouter";

const router = Router();

router.use("/address", addressRouter);
router.use("/phones", phoneRouter);
router.use("/users", userRouter);

export { router };
