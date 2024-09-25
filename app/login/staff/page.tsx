import { PasswordInput } from "@/components/custom/PasswordInput";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import React from "react";

export default function StaffLoginPage() {
  return (
    <>
      <div className="flex flex-col gap-2">
        <Label>Email</Label>
        <Input required type="email" placeholder="Email" name="email" />
      </div>

      <div className="flex flex-col gap-2">
        {/* Password input */}
        <Label>Password</Label>
        <PasswordInput />
      </div>
    </>
  );
}
