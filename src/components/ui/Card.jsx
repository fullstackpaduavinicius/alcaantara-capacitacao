import React from 'react'

const Card = React.forwardRef(
  ({ className, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={`bg-white rounded-lg shadow-md overflow-hidden border border-gray-200 hover:shadow-lg transition-shadow duration-300 ${className}`}
        {...props}
      />
    )
  }
)

const CardHeader = React.forwardRef(
  ({ className, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={`border-b border-gray-200 px-6 py-4 ${className}`}
        {...props}
      />
    )
  }
)

const CardTitle = React.forwardRef(
  ({ className, ...props }, ref) => {
    return (
      <h3
        ref={ref}
        className={`text-xl font-bold text-gray-900 ${className}`}
        {...props}
      />
    )
  }
)

const CardContent = React.forwardRef(
  ({ className, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={`px-6 py-4 ${className}`}
        {...props}
      />
    )
  }
)

const CardFooter = React.forwardRef(
  ({ className, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={`border-t border-gray-200 px-6 py-4 ${className}`}
        {...props}
      />
    )
  }
)

Card.displayName = 'Card'
CardHeader.displayName = 'CardHeader'
CardTitle.displayName = 'CardTitle'
CardContent.displayName = 'CardContent'
CardFooter.displayName = 'CardFooter'

export { Card, CardHeader, CardTitle, CardContent, CardFooter }