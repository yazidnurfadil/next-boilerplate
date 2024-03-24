import React from 'react';

import { ButtonProps } from './Button.d';
import btnStyle from './Button.style';

/**
 * Primary UI component for user interaction
 */
export const Button = (props: ButtonProps) => {
  const { label, ...restProps } = props;
  return (
    <button type="button" className={btnStyle(props)} {...restProps}>
      {label}
    </button>
  );
};
