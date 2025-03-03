import { ark, type HTMLArkProps } from '@ark-ui/react';
import React from 'react';
import { cn, tva, type VariantProps } from '~/utils';

const labelStyles = tva({ base: 'text-p' });

export type LabelProps = HTMLArkProps<'label'> &
  VariantProps<typeof labelStyles>;

export const Label = React.forwardRef<HTMLLabelElement, LabelProps>(
  ({ className, ...rest }, ref) => {
    return (
      <ark.label ref={ref} className={cn(labelStyles(), className)} {...rest} />
    );
  },
);
Label.displayName = 'Label';
