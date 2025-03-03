import { ark, type HTMLArkProps } from '@ark-ui/react';
import React from 'react';
import { cn, tva, type VariantProps } from '~/utils';

const errorTextStyles = tva({ base: 'inline-block' });

export type ErrorTextProps = HTMLArkProps<'span'> &
  VariantProps<typeof errorTextStyles>;

export const ErrorText = React.forwardRef<HTMLSpanElement, ErrorTextProps>(
  ({ className, ...rest }, ref) => {
    return (
      <ark.span
        ref={ref}
        className={cn(errorTextStyles(), className)}
        {...rest}
      />
    );
  },
);
ErrorText.displayName = 'ErrorText';
