import { tv } from 'tailwind-variants';

import { TextFieldProps } from './TextField.d';

export const tvStyle = tv(
  {
    base: 'rounded border',
    defaultVariants: { size: 'md' },
    variants: {
      size: {
        sm: 'h-9 px-2.5 text-sm',
        md: 'text-md h-10 px-3',
        lg: 'text-md h-11 px-3.5',
      },
    },
    compoundVariants: [
      // {
      //   textColor: '',
      //   class: 'text-black',
      // },
    ],
  },
  { twMerge: false }
);

export default function textFieldStyle(props: TextFieldProps): string {
  const bgColor = props.background || 'bg-white';
  const textColor = props.textColor || 'text-black';
  props.className = [props.className, bgColor, textColor]
    .filter(Boolean)
    .join(' ');
  return tvStyle(props);
}
