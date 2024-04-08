import { Router } from "express";
import { create, deleteUserById, getAllUser, getUserById, updateUserById } from "../controllers/user";

const router = Router();
router.get("/users", getAllUser);
router.get("/users/:id", getUserById);
router.delete("/users/:id", deleteUserById);
router.put("/users/:id", updateUserById);
router.post("/users", create);

export default router;
