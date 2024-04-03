import { forwardRef } from 'react';

import { ark } from '@ark-ui/react/factory';

import { TextFieldProps } from './TextField.d';
import styles from './TextField.style';

export const TextField = forwardRef<HTMLInputElement, TextFieldProps>(
  (props: TextFieldProps, ref) => {
    const { size, background, textColor, className, ...textFieldAttrs } = props;
    const textFieldClass = styles({ size, background, textColor, className });
    return (
      <ark.input className={textFieldClass} ref={ref} {...textFieldAttrs} />
    );
  }
);

TextField.displayName = 'TextField';
