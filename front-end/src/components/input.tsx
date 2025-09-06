import type React from "react";
import { useTheme } from "../context/theme";
import type { comumValues } from "../types";

export function Input({
  className,
  placeholder,
  type,
  onChange,
}: {
  className?: string;
  placeholder?: string;
  type?: string;
  onChange?: React.ChangeEventHandler<HTMLInputElement>;
}) {
  const theme: comumValues = useTheme();
  return (
    <input
      className={`${className} ${theme.input} p-2`}
      placeholder={placeholder}
      type={type}
      onChange={onChange}
    />
  );
}
