import { Checkbox as $Checkbox } from '@ark-ui/react/checkbox';
import { Check, Minus } from 'lucide-react';
import React, { useMemo } from 'react';
import type { PropsWithoutChildren } from '~/types';
import { cn, tva, type VariantProps } from '~/utils';

const checkboxStyles = tva({
  slots: {
    root: 'ark-disabled:pointer-events-none group inline-flex cursor-pointer items-center justify-center gap-2 select-none',
    control:
      'ark-focus-visible:ring-2 ark-state-checked:bg-teal-950 ark-state-checked:outline-teal-950 ark-state-indeterminate:bg-teal-950 ark-state-indeterminate:outline-teal-950 ark-focus-visible:ring-violet-400 ark-focus-visible:ring-offset-2 ark-disabled:bg-neutral-100 group-ark-state-unchecked:ark-hover:outline-neutral-400 group-ark-state-unchecked:outline-neutral-300 inline-flex items-center justify-center bg-white outline -outline-offset-1 drop-shadow-xs transition-[color_background-color] duration-200',
    indicator: 'shrink-0 text-white',
    label: 'text-sm font-medium text-neutral-500',
  },
  variants: {
    size: {
      sm: {
        control: 'size-5',
        indicator: 'size-4',
      },
      md: {
        control: 'size-6',
        indicator: 'size-5',
      },
    },
  },
});

export type CheckboxProps = PropsWithoutChildren<$Checkbox.RootProps> &
  VariantProps<typeof checkboxStyles> & {
    children?: string;
  };

export const Checkbox = React.forwardRef<HTMLLabelElement, CheckboxProps>(
  ({ className, children, size, ...props }, ref) => {
    const styleSlots = useMemo(() => checkboxStyles({ size }), [size]);
    return (
      <$Checkbox.Root
        ref={ref}
        className={cn(styleSlots.root(), className)}
        {...props}
      >
        <$Checkbox.Control className={styleSlots.control()}>
          <$Checkbox.Indicator asChild>
            <Check className={styleSlots.indicator()} />
          </$Checkbox.Indicator>
          <$Checkbox.Indicator asChild indeterminate>
            <Minus className={styleSlots.indicator()} />
          </$Checkbox.Indicator>
        </$Checkbox.Control>
        {children ? (
          <$Checkbox.Label className={styleSlots.label()}>
            {children}
          </$Checkbox.Label>
        ) : null}
        <$Checkbox.HiddenInput />
      </$Checkbox.Root>
    );
  },
);
Checkbox.displayName = 'Checkbox';
