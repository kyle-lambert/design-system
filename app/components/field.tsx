import { Field as ArkField } from '@ark-ui/react';
import React from 'react';

import {
  ErrorText as BaseErrorText,
  type ErrorTextProps as BaseErrorTextProps,
} from '~/components/error-text';
import {
  HelperText as BaseHelperText,
  type HelperTextProps as BaseHelperTextProps,
} from '~/components/helper-text';
import {
  Input as BaseInput,
  type InputProps as BaseInputProps,
} from '~/components/input';
import {
  Label as BaseLabel,
  type LabelProps as BaseLabelProps,
} from '~/components/label';
import {
  TextArea as BaseTextArea,
  type TextAreaProps as BaseTextAreaProps,
} from '~/components/text-area';
import { cn, tva, type VariantProps } from '~/utils';

export const RootProvider = ArkField.RootProvider;

const rootStyles = tva({ base: 'flex flex-col gap-y-1' });

export type RootProps = ArkField.RootProps & VariantProps<typeof rootStyles>;

export const Root = React.forwardRef<HTMLDivElement, RootProps>(
  ({ children, className, ...props }, ref) => {
    return (
      <ArkField.Root
        ref={ref}
        className={cn(rootStyles(), className)}
        {...props}
      >
        {children}
      </ArkField.Root>
    );
  },
);

export const Input = React.forwardRef<
  HTMLInputElement,
  Omit<BaseInputProps, 'asChild'>
>((props, ref) => {
  return (
    <ArkField.Input ref={ref} asChild {...props}>
      <BaseInput />
    </ArkField.Input>
  );
});

export const TextArea = React.forwardRef<
  HTMLTextAreaElement,
  Omit<BaseTextAreaProps, 'asChild'>
>((props, ref) => {
  return (
    <ArkField.Textarea ref={ref} asChild {...props}>
      <BaseTextArea />
    </ArkField.Textarea>
  );
});

export const Label = React.forwardRef<
  HTMLLabelElement,
  Omit<BaseLabelProps, 'asChild'>
>(({ children, ...props }, ref) => {
  return (
    <ArkField.Label ref={ref} asChild {...props}>
      <BaseLabel>{children}</BaseLabel>
    </ArkField.Label>
  );
});

export const HelperText = React.forwardRef<
  HTMLSpanElement,
  Omit<BaseHelperTextProps, 'asChild'>
>(({ children, ...props }, ref) => {
  return (
    <ArkField.HelperText ref={ref} asChild {...props}>
      <BaseHelperText>{children}</BaseHelperText>
    </ArkField.HelperText>
  );
});

export const ErrorText = React.forwardRef<
  HTMLSpanElement,
  Omit<BaseErrorTextProps, 'asChild'>
>(({ children, ...props }, ref) => {
  return (
    <ArkField.ErrorText ref={ref} asChild {...props}>
      <BaseErrorText>{children}</BaseErrorText>
    </ArkField.ErrorText>
  );
});
