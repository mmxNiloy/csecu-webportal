"use client";

import React from "react";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { PasswordInput } from "@/components/custom/PasswordInput";

export default function StudentLoginPage() {
  return (
    <>
      <div className="flex flex-col gap-2">
        {/* Student ID input */}
        <Label>Student ID</Label>
        <Input
          required
          type="number"
          placeholder="Student ID"
          name="student_id"
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
