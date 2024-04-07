import { type HTMLArkProps } from '@ark-ui/react/factory';

export interface IconProps extends HTMLArkProps<'svg'> {
  /**
   * What icon color to use
   */
  color?: string;
  /**
   * How large should the text field be?
   */
  size?: string;
  /**
   * Optional click handler
   */
  onClick?: () => void;
}
