"use server";
import { prisma } from "@/lib/prisma";
import { registerSchema, RegisterSchema } from "@/lib/schemas/registerSchema";
import bcrypt from "bcryptjs";

//these codes will be executed on the server side:3

export async function registerUser(data: RegisterSchema) {
  //server side validation
  const validated = registerSchema.safeParse(data);

  if (!validated.success) {
    return { error: validated.error.errors };
  }

  const { name, email, password } = validated.data;

  const hashedpassword = await bcrypt.hash(password, 10);

  const existingUser = await prisma.user.findUnique({ where: { email } });

  if (existingUser) return { error: "User already exists" };

  return prisma.user.create({
    data: {
      name,
      email,
      passwordHash: hashedpassword,
    },
  }); //no await needed when returning function itself because it's async anyways! The clients are gonna receive promise regardless:D
}
