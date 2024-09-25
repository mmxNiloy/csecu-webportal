import { PasswordInput } from "@/components/custom/PasswordInput";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import React from "react";

export default function TeacherLoginPage() {
  return (
    <>
      <div className="flex flex-col gap-2">
        <Label>Teacher ID</Label>
        <Input
          required
          type="number"
          placeholder="Teacher ID"
          name="teacher_id"
        />
      </div>

      <div className="flex flex-col gap-2">
        {/* Password input */}
        <Label>Password</Label>
        <PasswordInput />
      </div>
    </>
  );
}
