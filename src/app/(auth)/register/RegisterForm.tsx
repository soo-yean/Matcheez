"use client";

import { useForm } from "react-hook-form";
import { Button, Card, CardBody, CardHeader, Input } from "@heroui/react";
import { GiSeatedMouse } from "react-icons/gi";
import { zodResolver } from "@hookform/resolvers/zod";
import { registerSchema, RegisterSchema } from "@/lib/schemas/registerSchema";
import { registerUser } from "@/app/actions/authActions";

export default function RegisterForm() {
  const {
    register,
    handleSubmit,
    setError,
    formState: { errors, isValid },
  } = useForm<RegisterSchema>({
    resolver: zodResolver(registerSchema),
    mode: "onTouched",
  });

  const onSubmit = async (data: RegisterSchema) => {
    const result = await registerUser(data);
    console.log(result);

    if (result.status === "success") {
      //success
    } else {
      //either string(error msg) or ZodIssue[]
      if (Array.isArray(result.error)) {
        result.error.forEach((e) => {
          const fieldName = e.path.join(",") as "email" | "name" | "password";
          setError(fieldName, { message: e.message });
        });
      } else {
        setError("root.serverError", { message: result.error });
      }
    }
  };

  return (
    <Card className="w-2/5 mx-auto">
      <CardHeader className="flex felx-col items-center justify-center">
        <div className="flex flex-col gap-2 items-center text-yellow-500">
          <div className="flex flex-row items-center gap-3">
            <GiSeatedMouse size={30} />
            <h1 className="text-3xl font-semibold">Register</h1>
          </div>
          <p className="text-neutral-500">Welcome to Matcheez</p>
        </div>
      </CardHeader>
      <CardBody>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="space-y-4">
            <Input
              label="Name"
              variant="bordered"
              {...register("name")}
              isInvalid={!!errors.name}
              errorMessage={errors.name?.message}
            />
            <Input
              label="Email"
              variant="bordered"
              {...register("email")}
              isInvalid={!!errors.email}
              errorMessage={errors.email?.message}
            />
            <Input
              label="Password"
              variant="bordered"
              type="password"
              {...register("password")}
              isInvalid={!!errors.password}
              errorMessage={errors.password?.message}
            />

            {errors.root?.serverError && (
              <p className="text-danger text-sm">
                {errors.root?.serverError.message}
              </p>
            )}

            <Button
              isDisabled={!isValid}
              fullWidth
              color="warning"
              type="submit"
            >
              Register
            </Button>
          </div>
        </form>
      </CardBody>
    </Card>
  );
}
