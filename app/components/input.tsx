import { ark, type HTMLArkProps } from '@ark-ui/react';
import React, { type ReactNode } from 'react';
import { cn, tva, type VariantProps } from '~/utils';

const inputStyles = tva({
  slots: {
    root: 'relative cursor-text',
    icon: 'absolute top-0 bottom-0 z-10 inline-flex w-9 shrink-0 items-center justify-center text-neutral-600 transition-[color_background-color] peer-hover:text-neutral-800 peer-focus:text-indigo-700 peer-disabled:opacity-50 peer-aria-invalid:text-red-700 peer-aria-invalid:peer-focus:text-red-700 [&_svg]:size-[1.2em] [&_svg]:shrink-0',
    input:
      'peer w-full rounded-lg bg-white text-neutral-950 inset-ring shadow-sm inset-ring-neutral-300 transition-[color_background-color] outline-none placeholder:text-neutral-400 hover:inset-ring-neutral-400 focus:inset-ring-[1.5px] focus:ring-3 focus:ring-indigo-600/15 focus:inset-ring-indigo-600 disabled:pointer-events-none disabled:opacity-50 aria-invalid:inset-ring-[1.5px] aria-invalid:inset-ring-red-600 aria-invalid:focus:ring-3 aria-invalid:focus:ring-red-600/15 aria-invalid:focus:inset-ring-red-600',
  },
  variants: {
    size: {
      sm: {
        input: 'h-10 px-3 text-sm',
      },
      default: {
        input: 'h-12 px-3 text-sm',
      },
      lg: {
        input: 'h-14 px-3 text-base',
      },
    },
    iconPosition: {
      start: '',
      end: '',
    },
  },
  compoundVariants: [
    {
      iconPosition: 'start',
      size: ['sm', 'default', 'lg'],
      class: {
        icon: 'left-0 w-9',
        input: 'pr-3 pl-[calc(theme(spacing.9))]',
      },
    },
    {
      iconPosition: 'end',
      size: ['sm', 'default', 'lg'],
      class: {
        icon: 'right-0 w-9',
        input: 'pr-[calc(theme(spacing.3)+theme(spacing.6))] pl-3',
      },
    },
  ],
  defaultVariants: {
    size: 'default',
  },
});

type DiscriminatedIcon =
  | {
      iconStart?: ReactNode;
      iconEnd?: never;
    }
  | {
      iconStart?: never;
      iconEnd?: ReactNode;
    };

export type InputProps = Omit<HTMLArkProps<'input'>, 'size'> &
  Omit<VariantProps<typeof inputStyles>, 'iconPosition'> &
  DiscriminatedIcon;

export const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, iconStart, iconEnd, size, ...rest }, ref) => {
    const iconPosition = iconStart ? 'start' : iconEnd ? 'end' : undefined;
    const styleSlots = inputStyles({ size, iconPosition });
    return (
      <label className={styleSlots.root()}>
        <ark.input
          ref={ref}
          className={cn(styleSlots.input(), className)}
          {...rest}
        />
        {iconPosition === 'start' ? (
          <div className={styleSlots.icon()}>{iconStart}</div>
        ) : null}
        {iconPosition === 'end' ? (
          <div className={styleSlots.icon()}>{iconEnd}</div>
        ) : null}
      </label>
    );
  },
);
Input.displayName = 'Input';
