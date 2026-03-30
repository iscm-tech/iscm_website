"use client";

import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import React, { ReactElement } from "react";

export default function ComboBox({
  field,
  name,
  valueArr,
  defaultVal,
}: {
  field: string;
  name: string;
  valueArr: { value: string; icon?: ReactElement }[];
  defaultVal?: string;
}) {
  return (
    <div className="my-2">
      <Label htmlFor={name} className="text-md capitalize mb-2 block">
        {field}
      </Label>
      <Select defaultValue={defaultVal} name={name}>
        <SelectTrigger className="w-full capitalize h-fit">
          <SelectValue />
        </SelectTrigger>
        <SelectContent>
          {valueArr.map((value) => (
            <SelectItem value={value.value} key={value.value}>
              <span className="capitalize cursor-pointer flex gap-2 items-center">
                {value.value} {value.icon}
              </span>
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
    </div>
  );
}
