import * as React from "react"

import { cn } from "@/lib/utils"

export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, type, value, ...props }, ref) => {
    // Guard against React's "Received NaN for the `value` attribute" error
    const normalizedValue =
      typeof value === "number" && Number.isNaN(value) ? "" : value;

    return (
      <input
        type={type}
        className={cn(
          "flex h-10 w-full rounded-lg border border-white/10 glass-effect px-3 py-2 text-sm text-white font-light ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-light placeholder:text-white/40 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:border-primary/50 disabled:cursor-not-allowed disabled:opacity-50 transition-all",
          className
        )}
        ref={ref}
        {...props}
        {...(normalizedValue !== undefined ? { value: normalizedValue } : {})}
      />
    )
  }
)
Input.displayName = "Input"

export { Input }
