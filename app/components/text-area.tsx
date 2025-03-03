import { ark, type HTMLArkProps } from '@ark-ui/react';
import React from 'react';
import { cn, tva, type VariantProps } from '~/utils';

const textAreaStyles = tva({
  base: 'bg-slate-400',
  variants: {
    appearance: {
      primary: '',
      secondary: '',
    },
    size: {
      sm: '',
      base: '',
      large: '',
    },
  },
  defaultVariants: {
    appearance: 'primary',
    size: 'sm',
  },
});

export type TextAreaProps = HTMLArkProps<'textarea'> &
  VariantProps<typeof textAreaStyles>;

export const TextArea = React.forwardRef<HTMLTextAreaElement, TextAreaProps>(
  ({ appearance, size, className, ...rest }, ref) => {
    return (
      <ark.textarea
        ref={ref}
        className={cn(textAreaStyles({ appearance, size }), className)}
        {...rest}
      />
    );
  },
);
TextArea.displayName = 'TextArea';
