import { IconProps } from './Icon.d';

export default function iconStyle(props: IconProps): string {
  const size = props.size;
  const color = props.color;
  return [props.className, color, size].filter(Boolean).join(' ');
}
