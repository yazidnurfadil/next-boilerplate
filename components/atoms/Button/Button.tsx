import { forwardRef } from 'react';

import { ark } from '@ark-ui/react/factory';

import { ButtonProps } from './Button.d';
import styles from './Button.style';

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  (props: ButtonProps, ref) => {
    const {
      size,
      className,
      text,
      background,
      disabled,
      label,
      textColor,
      ...buttonAttrs
    } = props;
    const btnClass = styles({
      size,
      text,
      disabled,
      background,
      textColor,
      className,
    });
    return (
      <ark.button className={btnClass} ref={ref} {...buttonAttrs}>
        {label}
      </ark.button>
    );
  }
);

Button.displayName = 'Button';
