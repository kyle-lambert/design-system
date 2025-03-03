import { Switch as $Switch } from '@ark-ui/react/switch';
import React, { useMemo } from 'react';
import type { PropsWithoutChildren } from '~/types';
import { cn, tva, type VariantProps } from '~/utils';

const switchStyles = tva({
  slots: {
    root: 'ark-disabled:pointer-events-none relative inline-flex cursor-pointer items-center justify-center gap-2 select-none',
    control:
      'ark-state-checked:bg-teal-950 ark-focus-visible:ring-2 ark-focus-visible:ring-offset-2 ark-focus-visible:ring-violet-400 ark-disabled:outline ark-disabled:-outline-offset-1 ark-disabled:outline-neutral-300 ark-disabled:bg-neutral-100 ark-hover:bg-neutral-300 flex w-13 shrink-0 items-center rounded-full bg-neutral-200 p-0.5 transition-[color_background-color]',
    thumb:
      'ark-state-checked:translate-x-[100%] ark-disabled:bg-neutral-400 size-6 rounded-full bg-white shadow-sm transition-transform',
    label: 'text-sm font-medium text-neutral-500',
  },
  variants: {
    size: {
      sm: {
        control: 'w-9',
        thumb: 'size-4',
      },
      md: {
        control: 'w-11',
        thumb: 'size-5',
      },
    },
  },
  defaultVariants: {
    size: 'md',
  },
});

export type SwitchProps = PropsWithoutChildren<$Switch.RootProps> &
  VariantProps<typeof switchStyles> & {
    children?: string;
  };

export const Switch = React.forwardRef<HTMLLabelElement, SwitchProps>(
  ({ className, children, size, ...props }, ref) => {
    const styleSlots = useMemo(() => switchStyles({ size }), [size]);
    return (
      <$Switch.Root
        ref={ref}
        className={cn(styleSlots.root(), className)}
        {...props}
      >
        <$Switch.Control className={styleSlots.control()}>
          <$Switch.Thumb className={styleSlots.thumb()} />
        </$Switch.Control>
        {children ? (
          <$Switch.Label className={styleSlots.label()}>
            {children}
          </$Switch.Label>
        ) : null}
        <$Switch.HiddenInput />
      </$Switch.Root>
    );
  },
);
Switch.displayName = 'Switch';
