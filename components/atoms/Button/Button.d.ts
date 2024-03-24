export interface ButtonProps {
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
  size?: 'small' | 'medium' | 'large';
  /**
   * Button contents
   */
  label: string;
  /**
   * Optional click handler
   */
  onClick?: () => void;
}
