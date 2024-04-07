import type { NumberInputRootProps } from '@ark-ui/react/number-input';

// import { type TV } from 'tailwind-variants';
import { tvStyle } from './NumberField.style';

export type NumberFieldVariantsProps = VariantProps<typeof tvStyle>;

export type NumberFieldTV<T> = typeof tvStyle<T>;

export interface NumberFieldProps
  extends NumberFieldVariantsProps,
    NumberInputRootProps {
  /**
   * What background color to use
   */
  background?: string;
  /**
   * What text color to use
   */
  textColor?: string;
  /**
   * How large should the text field be?
   */
  size?: 'sm' | 'md' | 'lg';

  children?: React.ReactNode;
}
