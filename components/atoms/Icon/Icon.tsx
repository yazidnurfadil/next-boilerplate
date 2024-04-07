import { ark } from '@ark-ui/react/factory';

import { IconProps } from './Icon.d';
import styles from './Icon.style';

export const Icon = (props: IconProps) => {
  const { size, color, className, ...IconAttrs } = props;
  const textFieldClass = styles({ size, color, className });
  return (
    <ark.svg
      asChild
      className={textFieldClass}
      width="1em"
      height="1em"
      {...IconAttrs}
    />
  );
};

Icon.displayName = 'Icon';
