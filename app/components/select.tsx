import {
  Portal as $Portal,
  Select as $Select,
  createListCollection as $createListCollection,
  useSelect as $useSelect,
} from '@ark-ui/react';
import { Check, ChevronDownIcon } from 'lucide-react';
import React, { forwardRef, useMemo } from 'react';
import { cn, tva } from '~/utils';

export type SelectProps = $Select.RootProps<$Select.CollectionItem>;
export const Select = React.forwardRef<HTMLDivElement, SelectProps>(
  ({ className, ...props }, ref) => {
    return (
      <$Select.Root
        ref={ref}
        className={cn('flex min-w-70 flex-col select-none', className)}
        {...props}
      />
    );
  },
);
Select.displayName = 'Select';

const selectTriggerStyles = tva({
  slots: {
    control:
      'ark-focus:ring-2 ark-focus:ring-offset-2 ark-focus:ring-violet-400 transition-[color_background-color]',
    trigger:
      'flex h-11 w-full cursor-pointer items-center justify-between gap-2 border border-neutral-300 px-2 text-neutral-950 transition-[color_background-color] outline-none hover:border-neutral-400',
    indicator: 'size-[1.2em]',
  },
});

export type SelectTriggerProps = $Select.TriggerProps;
export const SelectTrigger = React.forwardRef<
  HTMLButtonElement,
  SelectTriggerProps
>(({ className, children, ...props }, ref) => {
  const styleSlots = useMemo(() => selectTriggerStyles(), []);

  return (
    <$Select.Control className={styleSlots.control()}>
      <$Select.Trigger
        ref={ref}
        className={cn(styleSlots.trigger(), className)}
        {...props}
      >
        {children}
        <$Select.Indicator asChild>
          <ChevronDownIcon className={styleSlots.indicator()} />
        </$Select.Indicator>
      </$Select.Trigger>
    </$Select.Control>
  );
});
SelectTrigger.displayName = 'SelectTrigger';

const selectContentStyles = tva({
  slots: {
    positioner: 'w-[var(--reference-width)]',
    content:
      'flex flex-col border border-neutral-300 transition-[color_background-color] outline-none focus-visible:ring-2 focus-visible:ring-violet-400 focus-visible:ring-offset-2',
  },
});

export type SelectContentProps = Omit<$Select.ContentProps, 'className'>;
export const SelectContent = React.forwardRef<
  HTMLDivElement,
  SelectContentProps
>((props, ref) => {
  const styleSlots = useMemo(() => selectContentStyles(), []);
  return (
    <$Portal>
      <$Select.Positioner className={styleSlots.positioner()}>
        <$Select.Content
          ref={ref}
          className={styleSlots.content()}
          {...props}
        />
      </$Select.Positioner>
    </$Portal>
  );
});
SelectContent.displayName = 'SelectContent';

export type SelectValueProps = $Select.ValueTextProps;
export const SelectValue = React.forwardRef<HTMLSpanElement, SelectValueProps>(
  ({ className, ...props }, ref) => {
    return (
      <$Select.ValueText ref={ref} className={cn('', className)} {...props} />
    );
  },
);
SelectValue.displayName = 'SelectValue';

export type SelectLabelProps = $Select.LabelProps;
export const SelectLabel = React.forwardRef<HTMLLabelElement, SelectLabelProps>(
  ({ className, ...props }, ref) => {
    return (
      <$Select.Label
        ref={ref}
        className={cn('pb-2 text-sm font-medium text-neutral-500', className)}
        {...props}
      />
    );
  },
);
SelectLabel.displayName = 'SelectLabel';

const selectItemStyles = tva({
  slots: {
    item: '',
    text: '',
    indicator: '',
  },
});

export type SelectItemProps = Omit<$Select.ItemProps, 'children' | 'item'> & {
  item: {
    label: string;
    value: string;
  };
};
export const SelectItem = React.forwardRef<HTMLDivElement, SelectItemProps>(
  ({ className, item, ...props }, ref) => {
    const styleSlots = useMemo(() => selectItemStyles(), []);
    return (
      <$Select.Item
        ref={ref}
        item={item}
        className={cn(styleSlots.item(), className)}
        {...props}
      >
        <$Select.ItemText className={styleSlots.text()}>
          {item.label}
        </$Select.ItemText>
        <$Select.ItemIndicator asChild>
          <Check className={styleSlots.indicator()} />
        </$Select.ItemIndicator>
      </$Select.Item>
    );
  },
);
SelectItem.displayName = 'SelectItem';

export type SelectGroupProps = $Select.ItemGroupProps;
export const SelectGroup = React.forwardRef<HTMLDivElement, SelectGroupProps>(
  ({ className, children, ...props }, ref) => {
    return (
      <$Select.ItemGroup ref={ref} className={cn('', className)} {...props} />
    );
  },
);
SelectGroup.displayName = 'SelectGroup';

export type SelectGroupLabelProps = $Select.ItemGroupLabelProps;
export const SelectGroupLabel = React.forwardRef<
  HTMLDivElement,
  SelectGroupLabelProps
>(({ className, ...props }, ref) => {
  return (
    <$Select.ItemGroupLabel
      ref={ref}
      className={cn('', className)}
      {...props}
    />
  );
});
SelectGroupLabel.displayName = 'SelectGroupLabel';

export type SelectHiddenProps = $Select.HiddenSelectProps;
export const SelectHidden = forwardRef<HTMLSelectElement, SelectHiddenProps>(
  (props, ref) => {
    return <$Select.HiddenSelect ref={ref} {...props} />;
  },
);
SelectHidden.displayName = 'SelectHidden';

export const useSelect = $useSelect;
export const createListCollection = $createListCollection;
