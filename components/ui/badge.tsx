import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

const badgeVariants = cva(
  "inline-flex items-center justify-center rounded-md border px-2 py-0.5 text-xs font-light w-fit whitespace-nowrap shrink-0 [&>svg]:size-3 gap-1 [&>svg]:pointer-events-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 aria-invalid:border-destructive transition-all overflow-hidden backdrop-blur-sm",
  {
    variants: {
      variant: {
        default:
          "border-primary/20 bg-primary/10 text-primary shadow-sm [a&]:hover:bg-primary/20 [a&]:hover:shadow-primary/20",
        secondary:
          "border-white/10 bg-white/5 text-white shadow-sm [a&]:hover:bg-white/10",
        destructive:
          "border-destructive/20 bg-destructive/10 text-destructive shadow-sm [a&]:hover:bg-destructive/20 focus-visible:ring-destructive/20",
        outline:
          "text-white border-white/20 bg-transparent [a&]:hover:bg-white/5 [a&]:hover:border-white/30",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
)

function Badge({
  className,
  variant,
  asChild = false,
  ...props
}: React.ComponentProps<"span"> &
  VariantProps<typeof badgeVariants> & { asChild?: boolean }) {
  const Comp = asChild ? Slot : "span"

  return (
    <Comp
      data-slot="badge"
      className={cn(badgeVariants({ variant }), className)}
      {...props}
    />
  )
}

export { Badge, badgeVariants }
