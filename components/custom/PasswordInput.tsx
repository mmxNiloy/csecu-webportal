"use client";
import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "../ui/input";
import { cn } from "@/lib/utils";
import Icons from "../ui/icons";

const PasswordInput = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => {
  const [visible, setVisible] = useState<boolean>(false);
  return (
    <div
      className={cn(className, "flex w-full flex-row gap-1")}
      ref={ref}
      data-state={visible ? "visible" : "invisible"}
      {...props}
    >
      <Input
        required
        type={visible ? "text" : "password"}
        id="student-password-input"
        placeholder="Password"
        name="password"
      />
      <Button
        type="button"
        variant={"outline"}
        onClick={() => setVisible(!visible)}
        size="icon"
      >
        {visible ? <Icons.hidden /> : <Icons.visible />}
      </Button>
    </div>
  );
});
PasswordInput.displayName = "PasswordInput";

export { PasswordInput };
