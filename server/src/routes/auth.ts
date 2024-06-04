import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import { User } from "../entity/User";
import express, { Request, Response } from "express";
import { guestMiddleware } from "../utils/middleware";
import { AppDataSource } from "../data-source";

const router = express.Router();
const userRepository = AppDataSource.getRepository(User);

router.post(
  "/register",
  guestMiddleware,
  async (req: Request, res: Response) => {
    try {
      const { name, email, password } = req.body;

      const existingUser = await userRepository.findOneBy({ email });
      if (existingUser) {
        res.status(400).json({ message: "User already exists" });
        return;
      }

      const hashedPassword = await bcrypt.hash(password, 10);

      const newUser = new User();
      newUser.name = name;
      newUser.email = email;
      newUser.password = hashedPassword;

      await AppDataSource.manager.save(newUser);

      res.status(201).json({ message: "User registered successfully" });
    } catch (error) {
      console.error("Error registering user:", error);
      res.status(500).json({ message: "Internal server error" });
    }
  }
);

router.post("/login", guestMiddleware, async (req: Request, res: Response) => {
  try {
    const { email, password } = req.body;

    const user = await userRepository.findOneBy({ email });
    if (!user) {
      res.status(401).json({ message: "Invalid credentials" });
      return;
    }

    const passwordMatch = await bcrypt.compare(password, user.password);
    if (!passwordMatch) {
      res.status(401).json({ message: "Invalid credentials" });
      return;
    }

    const token = jwt.sign({ userId: user.id }, "your_secret_key", {
      expiresIn: "1h",
    });

    res.status(200).json({ token });
  } catch (error) {
    console.error("Error logging in:", error);
    res.status(500).json({ message: "Internal server error" });
  }
});

export default router;
