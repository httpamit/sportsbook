import React from "react";
import Button from "@/components/ui/Button";

export default function AuthButtons() {
  return (
    <>
      <Button size="sm" variant="outline">
        Login
      </Button>
      <Button size="sm" variant="green">
        Sign up
      </Button>
    </>
  );
}
