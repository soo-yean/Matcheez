"use client";

import { useForm } from "react-hook-form";
import { Button, Card, CardBody, CardHeader, Input } from "@heroui/react";
import { GiSeatedMouse } from "react-icons/gi";

export default function LoginForm() {
  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm();

  //todo: data type
  const onSubmit = (data: any) => {
    console.log(data);
  };

  return (
    <Card className="w-2/5 mx-auto">
      <CardHeader className="flex felx-col items-center justify-center">
        <div className="flex flex-col gap-2 items-center text-yellow-500">
          <div className="flex flex-row items-center gap-3">
            <GiSeatedMouse size={30} />
            <h1 className="text-3xl font-semibold">Login</h1>
          </div>
          <p className="text-neutral-500">Welcome back to Matcheez</p>
        </div>
      </CardHeader>
      <CardBody>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="space-y-4">
            <Input
              label="Email"
              variant="bordered"
              {...register("email", { required: "Email is required" })}
              isInvalid={!!errors.email} //!! for convert object to boolean
              errorMessage={errors.email?.message as string}
            />
            <Input
              label="Password"
              variant="bordered"
              type="password"
              {...register("password", { required: "Password is required" })}
              isInvalid={!!errors.password}
              errorMessage={errors.password?.message as string}
            />
            <Button
              // isDisabled={!isValid}
              fullWidth
              color="warning"
              type="submit"
            >
              Login
            </Button>
          </div>
        </form>
      </CardBody>
    </Card>
  );
}
