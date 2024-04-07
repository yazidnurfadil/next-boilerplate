import { type TV, tv } from 'tailwind-variants';

import { NumberFieldProps } from './NumberField.d';

export const tvStyle = tv(
  {
    base: 'numberInput',
    defaultVariants: { size: 'md' },
    slots: {
      root: 'numberInput__root',
      label: 'numberInput__label',
      input: 'numberInput__input',
      control: 'numberInput__control',
      incrementTrigger: 'numberInput__incrementTrigger text-inherit',
      decrementTrigger: 'numberInput__decrementTrigger text-inherit',
      scrubber: 'numberInput__scrubber',
    },
    variants: {
      size: {
        sm: {
          root: 'numberInput__root--size_md',
          label: 'numberInput__label--size_md',
          input: 'numberInput__input--size_md',
          control: 'numberInput__control--size_md',
          incrementTrigger: 'numberInput__incrementTrigger--size_md',
          decrementTrigger: 'numberInput__decrementTrigger--size_md',
          scrubber: 'numberInput__scrubber--size_md',
        },
        md: {
          root: 'numberInput__root--size_lg',
          label: 'numberInput__label--size_lg',
          input: 'numberInput__input--size_lg',
          control: 'numberInput__control--size_lg',
          incrementTrigger: 'numberInput__incrementTrigger--size_lg',
          decrementTrigger: 'numberInput__decrementTrigger--size_lg',
          scrubber: 'numberInput__scrubber--size_lg',
        },
        lg: {
          root: 'numberInput__root--size_xl',
          label: 'numberInput__label--size_xl',
          input: 'numberInput__input--size_xl',
          control: 'numberInput__control--size_xl',
          incrementTrigger: 'numberInput__incrementTrigger--size_xl',
          decrementTrigger: 'numberInput__decrementTrigger--size_xl',
          scrubber: 'numberInput__scrubber--size_xl',
        },
      },
    },
  },
  { twMerge: false }
);

// export default tvStyle;

export default function numberFieldStyle(props: NumberFieldProps) {
  type ControlFn = typeof fixedTvStyle.control;

  const fixedTvStyle = tvStyle(props) as {
    customControl: ControlFn;
  } & ReturnType<typeof tvStyle>;
  const fixedControl: ControlFn = () => {
    const rootClass = fixedTvStyle.control();
    const bgColor = props.background || 'bg-white';
    const textColor = props.textColor || 'text-black';
    const fixedClass = [rootClass, bgColor, textColor]
      .filter(Boolean)
      .join(' ');
    return fixedClass;
  };
  fixedTvStyle.customControl = fixedControl;
  return fixedTvStyle;
}
