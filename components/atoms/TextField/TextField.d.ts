import { type HTMLArkProps } from '@ark-ui/react/factory';
import { type VariantProps } from 'tailwind-variants';

import { tvStyle } from './TextField.style';

export type TextFieldVariantsProps = VariantProps<typeof tvStyle>;

export interface TextFieldProps
  extends TextFieldVariantsProps,
    HTMLArkProps<'input'> {
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
}
