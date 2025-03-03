import { ark, type HTMLArkProps } from '@ark-ui/react';
import React from 'react';
import { cn, tva, type VariantProps } from '~/utils';

const inputStyles = tva({
  base: 'rounded-lg text-sm text-gray-950 inset-ring shadow-xs inset-ring-gray-200 transition-[color_background-color] outline-none placeholder:text-gray-400 focus:inset-ring-[1.5px] focus:inset-ring-blue-600 disabled:pointer-events-none disabled:opacity-50 aria-invalid:inset-ring-[1.5px] aria-invalid:inset-ring-red-600 aria-invalid:focus:inset-ring-red-600',
  variants: {
    icon: {
      start: '',
      end: '',
    },
    size: {
      sm: 'h-10 px-3',
      lg: 'h-12 px-3',
    },
  },
  compoundVariants: [
    {
      icon: 'start',
      size: ['sm', 'lg'],
      class: 'pr-3 pl-[calc(var(--spacing(3))+var(--spacing(4)))]',
    },
    {
      icon: 'end',
      size: ['sm', 'lg'],
      class: 'pr-[calc(var(--spacing(3))+var(--spacing(4)))] pl-3',
    },
  ],
  defaultVariants: {
    size: 'sm',
  },
});

export type InputProps = Omit<HTMLArkProps<'input'>, 'size'> &
  VariantProps<typeof inputStyles>;

export const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, icon, size, ...rest }, ref) => {
    return (
      <ark.input
        ref={ref}
        className={cn(inputStyles({ icon, size }), className)}
        {...rest}
      />
    );
  },
);
Input.displayName = 'Input';
