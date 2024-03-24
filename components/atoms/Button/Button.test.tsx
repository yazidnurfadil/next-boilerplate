import { fireEvent, render } from '@testing-library/react';
import { describe, expect, it, vi } from 'vitest';

import { Button } from './Button';

describe('Button', () => {
  it('renders a button', () => {
    const { getByRole } = render(<Button label="render" />);
    const button = getByRole('button');
    expect(button).toBeDefined();
    expect(button.innerHTML).equal('render');
  });

  it('calls onClick when clicked', () => {
    const onClick = vi.fn();
    const { getByText } = render(<Button label="onClick" onClick={onClick} />);
    const button = getByText('onClick');
    fireEvent.click(button);
    expect(onClick).toHaveBeenCalledTimes(1);
  });

  it('renders with different sizes', () => {
    const { getByText } = render(
      <>
        <Button label="button small" size="small" />
        <Button label="button large" size="large" />
      </>
    );

    const button = getByText('button small');
    expect(button.classList).toContain('text-xs');

    const button2 = getByText('button large');
    expect(button2.classList).toContain('text-lg');
  });

  it('renders with different background colors', () => {
    const color = 'bg-blue-500';
    const { getByText } = render(
      <Button label="button bg" background={color} />
    );
    const button = getByText('button bg');
    expect(button.classList).toContain(color);
  });
});
