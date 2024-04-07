import { forwardRef } from 'react';

import { NumberInput } from '@ark-ui/react/number-input';
import ChevronDown from '~/assets/icons/chevron-down.svg';
import ChevronUp from '~/assets/icons/chevron-up.svg';

import { Icon } from '../Icon';
import { NumberFieldProps, NumberFieldTV } from './NumberField.d';
import styles from './NumberField.style';

export const NumberField = forwardRef<HTMLDivElement, NumberFieldProps>(
  (props: NumberFieldProps, ref) => {
    const {
      size,
      background,
      textColor,
      children,
      className,
      ...numberFieldAttrs
    } = props;
    const {
      root,
      customControl,
      label,
      input,
      incrementTrigger,
      decrementTrigger,
    } = styles({ size, background, textColor });
    return (
      <NumberInput.Root
        ref={ref}
        className={root({ className })}
        {...numberFieldAttrs}
      >
        {children && (
          <NumberInput.Label className={label()}>{children}</NumberInput.Label>
        )}
        <NumberInput.Control className={customControl()}>
          <NumberInput.Input className={input()} />
          <NumberInput.IncrementTrigger className={incrementTrigger()}>
            <Icon>
              <ChevronUp />
            </Icon>
          </NumberInput.IncrementTrigger>
          <NumberInput.DecrementTrigger className={decrementTrigger()}>
            <Icon>
              <ChevronDown />
            </Icon>
          </NumberInput.DecrementTrigger>
        </NumberInput.Control>
      </NumberInput.Root>
    );
  }
);

NumberField.displayName = 'NumberField';
