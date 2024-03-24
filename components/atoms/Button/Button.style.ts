import { clsx } from 'clsx';

import { ButtonProps } from './Button.d';

const btnBase = 'font-bold rounded';
const btnSmallSize = 'text-xs';
const btnMediumSize = 'text-sm';
const btnLargeSize = 'text-lg';
const btnSmallSpace = 'px-2.5 py-2';
const btnMediumSpace = 'px-5 py-3';
const btnLargeSpace = 'px-6 py-3';

const btnStyle = ({ size, background, textColor, text }: ButtonProps) =>
  clsx(
    btnBase,
    textColor,
    !text && background,
    !size && `${btnMediumSize} ${!text && btnMediumSpace}`,
    {
      [`${btnSmallSize} ${!text && btnSmallSpace}`]: size === 'small',
      [`${btnMediumSize} ${!text && btnMediumSpace}`]: size === 'medium',
      [`${btnLargeSize} ${!text && btnLargeSpace}`]: size === 'large',
    }
  );

export default btnStyle;
