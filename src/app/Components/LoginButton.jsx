"use client";
import React from "react";
import { signIn } from "next-auth/react";
import { Button } from "@/components/ui/button";

const LoginButton = () => {
  return (
    <div>
      <Button onClick={() => signIn()}>Login</Button>
    </div>
  );
};

export default LoginButton;
