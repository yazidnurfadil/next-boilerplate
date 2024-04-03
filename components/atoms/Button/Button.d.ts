import { type HTMLArkProps } from '@ark-ui/react/factory';
import { type VariantProps } from 'tailwind-variants';

import { tvStyle } from './Button.style';

export type ButtonVariantProps = VariantProps<typeof tvStyle>;

export interface ButtonProps
  extends ButtonVariantProps,
    HTMLArkProps<'button'> {
  /**
   * What background color to use
   */
  background?: string;
  /**
   * What text color to use
   */
  textColor?: string;
  /**
   * Render the button in a text (ignore background & size)
   */
  text?: boolean;
  /**
   * How large should the button be?
   */
  size?: 'sm' | 'md' | 'lg';
  /**
   * Button contents
   */
  label?: string;
  /**
   * Optional click handler
   */
  onClick?: () => void;
}
