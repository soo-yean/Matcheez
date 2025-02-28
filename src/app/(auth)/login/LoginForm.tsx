"use client";

import { Button, Card, CardBody, CardHeader, Input } from "@heroui/react";
import { GiSeatedMouse } from "react-icons/gi";

export default function LoginForm() {
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
        <form>
          <div className="space-y-4">
            <Input label="Email" variant="bordered" />
            <Input label="Password" variant="bordered" type="password" />
            <Button fullWidth color="warning" type="submit">
              Login
            </Button>
          </div>
        </form>
      </CardBody>
    </Card>
  );
}
