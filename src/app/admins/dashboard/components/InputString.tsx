"use client";

import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import React from "react";

export default function InputString({
  field,
  name,
  state,
  readonly = false,
  setState,
  onBlur,
}: {
  field: string;
  name: string;
  state?: string;
  setState?: (value: string) => void;
  readonly?: boolean;
  onBlur?: (val: string) => void;
}) {
  return (
    <div className="my-2">
      <Label htmlFor={name} className="text-md capitalize mb-2 block">
        {field}
      </Label>
      <Input
        id={name}
        className="w-full placeholder:italic placeholder:capitalize"
        placeholder={`Enter ${field}...`}
        value={readonly ? state || "" : state || undefined}
        onChange={(e) => setState && setState(e.target.value)}
        name={name}
        disabled={readonly}
        onBlur={(e) => onBlur && onBlur(e.target.value)}
      />
    </div>
  );
}
