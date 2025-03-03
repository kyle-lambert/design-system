import { ark, type HTMLArkProps } from '@ark-ui/react';
import React from 'react';
import { cn, tva, type VariantProps } from '~/utils';

const helperTextStyles = tva({
  base: 'inline-block',
});

export type HelperTextProps = HTMLArkProps<'span'> &
  VariantProps<typeof helperTextStyles>;

export const HelperText = React.forwardRef<HTMLSpanElement, HelperTextProps>(
  ({ className, ...rest }, ref) => {
    return (
      <ark.span
        ref={ref}
        className={cn(helperTextStyles(), className)}
        {...rest}
      />
    );
  },
);
HelperText.displayName = 'HelperText';
