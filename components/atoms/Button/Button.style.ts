import { tv } from 'tailwind-variants';

import { ButtonProps } from './Button.d';

// const variants = ;
// interface VariantExtended {
//   size: {
//     sm: string;
//     md: string;
//     lg: string;
//   };
//   disabled: {
//     true: string;
//   };
//   text: {
//     true: null;
//   };
//   requiredBg: { any: string };
// }
export const tvStyle = tv(
  {
    base: ['rounded font-bold'],
    defaultVariants: {
      size: 'md',
      text: false,
      disabled: false,
    },
    variants: {
      size: {
        sm: 'text-xs',
        md: 'text-sm',
        lg: 'text-lg',
      },
      disabled: {
        true: 'pointer-events-none bg-gray-500 opacity-50',
      },
      text: {
        true: null,
      },
    },
    compoundVariants: [
      {
        size: 'sm',
        text: false,
        class: 'px-2.5 py-2',
      },
      {
        size: 'md',
        text: false,
        class: 'px-5 py-3',
      },
      {
        size: 'lg',
        text: false,
        class: 'px-6 py-3',
      },
    ],
  },
  { twMerge: false }
);

export default function btnStyle(props: ButtonProps): string {
  props.className = [props.className, props.background, props.textColor]
    .filter(Boolean)
    .join(' ');
  return tvStyle(props);
}
