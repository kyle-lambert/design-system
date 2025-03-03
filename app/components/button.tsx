import { ark, type HTMLArkProps } from '@ark-ui/react';
import { LoaderCircle } from 'lucide-react';
import React from 'react';
import { cn, tva, type VariantProps } from '~/utils';

const buttonStyles = tva({
  base: 'relative inline-flex cursor-pointer items-center justify-center gap-1.5 bg-white align-middle font-medium whitespace-nowrap text-teal-950 transition-[color_background-color] duration-200 select-none focus-visible:ring-2 focus-visible:ring-violet-400 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:size-[1.2em] [&_svg]:shrink-0',
  variants: {
    appearance: {
      button: 'rounded-md',
      icon: 'rounded-md',
    },
    variant: {
      solid: 'bg-teal-950 text-white outline-none focus-visible:ring-2',
      subtle: 'bg-neutral-100 text-teal-950 outline-none hover:bg-neutral-200',
      vibrant: 'bg-lime-100 text-teal-950 outline-none hover:bg-lime-200',
      outline:
        'outline -outline-offset-1 outline-neutral-300 hover:outline-neutral-400',
    },
    size: {
      sm: 'text-sm',
      md: 'text-base',
      lg: 'text-lg',
    },
  },
  compoundVariants: [
    {
      appearance: 'button',
      size: 'sm',
      class: 'h-9 px-4',
    },
    {
      appearance: 'button',
      size: 'md',
      class: 'h-11 px-5',
    },
    {
      appearance: 'button',
      size: 'lg',
      class: 'h-13 px-6',
    },
    {
      appearance: 'icon',
      size: 'sm',
      class: 'size-9',
    },
    {
      appearance: 'icon',
      size: 'md',
      class: 'size-11',
    },
    {
      appearance: 'icon',
      size: 'lg',
      class: 'size-13',
    },
  ],
  defaultVariants: {
    appearance: 'button',
    variant: 'solid',
    size: 'md',
  },
});

export type ButtonProps = HTMLArkProps<'button'> &
  VariantProps<typeof buttonStyles> & {
    isLoading?: boolean;
  };

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    { appearance, variant, size, className, children, isLoading, ...rest },
    ref,
  ) => {
    return (
      <ark.button
        ref={ref}
        tabIndex={isLoading ? -1 : undefined}
        className={cn(
          buttonStyles({ appearance, variant, size }),
          isLoading && 'pointer-events-none',
          className,
        )}
        {...rest}
      >
        {isLoading ? (
          <>
            <LoaderCircle className="absolute animate-[spin_600ms_linear_infinite]" />
            <span className="invisible" role="alert" aria-busy="true">
              {children}
            </span>
          </>
        ) : (
          children
        )}
      </ark.button>
    );
  },
);
Button.displayName = 'Button';
