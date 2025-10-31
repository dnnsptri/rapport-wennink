import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded text-lg font-medium transition-all disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 shrink-0 [&_svg]:shrink-0 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] self-start",
  {
    variants: {
      variant: {
        // Primary: normal #026B89 with white text, hover #1B3647 with white text
        default: "bg-primary !text-white hover:bg-[#1B3647] hover:!text-white no-underline [&]:!text-white [&:hover]:!text-white",
        // Outline: white background with border #026B89 → #1B3647 on hover
        outline:
          "border border-[#026B89] bg-white text-[#1B3647] shadow-xs hover:bg-white hover:border-[#1B3647] no-underline",
      },
      size: {
        default: "h-12 px-6 has-[>svg]:px-6 text-lg",
        sm: "h-12 rounded gap-1.5 px-6 has-[>svg]:px-6",
        lg: "h-12 rounded px-6 has-[>svg]:px-6 text-lg",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
)

function Button({
  className,
  variant,
  size,
  asChild = false,
  ...props
}: React.ComponentProps<"button"> &
  VariantProps<typeof buttonVariants> & {
    asChild?: boolean
  }) {
  const Comp = asChild ? Slot : "button"

  return (
    <Comp
      data-slot="button"
      className={cn(buttonVariants({ variant, size, className }))}
      {...props}
    />
  )
}

export { Button, buttonVariants }
