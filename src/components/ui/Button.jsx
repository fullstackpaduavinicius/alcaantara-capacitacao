import React from 'react'
import { cva } from 'class-variance-authority'

const buttonVariants = cva(
  'inline-flex items-center justify-center rounded-md font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-500 disabled:opacity-50 disabled:pointer-events-none',
  {
    variants: {
      variant: {
        primary: 'bg-primary-600 text-white hover:bg-primary-700 shadow-md hover:shadow-lg',
        secondary: 'bg-white text-primary-700 border border-primary-600 hover:bg-primary-50',
        ghost: 'hover:bg-primary-50 text-primary-700',
      },
      size: {
        sm: 'py-2 px-4 text-sm',
        md: 'py-3 px-6 text-base',
        lg: 'py-4 px-8 text-lg',
      },
    },
    defaultVariants: {
      variant: 'primary',
      size: 'md',
    },
  }
)

const Button = React.forwardRef(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? 'span' : 'button' // Troquei React.Fragment por 'span' (ou outro elemento válido)
    return (
      <Comp
        className={buttonVariants({ variant, size, className })}
        ref={ref}
        {...props}
      />
    )
  }
)

Button.displayName = 'Button'

export { Button }