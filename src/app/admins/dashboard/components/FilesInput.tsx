"use client";

import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import React from "react";

export default function FilesInput({
  field,
  name,
  required = false,
}: {
  field: string;
  name: string;
  required?: boolean;
}) {
  return (
    <div className="my-2">
      <Label htmlFor={name} className="text-md capitalize mb-2 block">
        {field}
      </Label>
      <Input
        type="file"
        id={name}
        name={name}
        required={required}
        className="cursor-pointer"
        accept="image/*"
      />
    </div>
  );
}
