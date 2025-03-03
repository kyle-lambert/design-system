import {
  cn as tcn,
  tv as tva,
  type CnOptions,
  type VariantProps,
} from 'tailwind-variants';

function cn(...args: CnOptions) {
  const classes = tcn(args)({
    twMerge: true,
  });
  return tva({ base: classes })();
}

export { cn, tva, type VariantProps };
