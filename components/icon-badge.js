import React from 'react'
import { LucideIcon } from 'lucide-react'
import { cva, VariantProps } from 'class-variance-authority'
import { cn } from '../lib/utils'

const backgroundVariants = cva(
    'rounded-full flex items-center justify-center',
    {
        variants: {
            variant: {
                default: 'bg-sky-100',
                success: 'bg-emerald-100',
            },
            size: {
                default: 'p-2',
                sm: 'p-1'
            }
        },
        defaultVariants: {
            variant: 'default',
            size: 'default'
        },
    },
)

const iconVariants = cva(
    '',
    {
        variants: {
            variant: {
                default: 'text-sky-700',
                success: 'text-emerald-700',
            },
            size: {
                default: 'h-8 w-8',
                sm: 'h-4 w-4'
            }
        },
        defaultVariants: {
            variant: 'default',
            size: 'default'
        },
    }
)

export const IconBadge = ({
    icon: Icon,
    variants,
    size
}) => {
    return (
        <div className={cn(backgroundVariants({ variants, size }))}>
            <Icon className={cn(iconVariants({ variants, size }))} />
        </div>
    )
}