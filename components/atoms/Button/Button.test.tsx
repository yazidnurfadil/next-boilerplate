import { render, fireEvent } from '@testing-library/react';
import { describe, expect, it, vi } from 'vitest';
import { Button } from './Button';

describe('Button', () => {
  it('renders a button', () => {
    const { getByRole } = render(<Button label="foo" />);
    const button = getByRole('button');
    expect(button).toBeDefined();
    expect(button.innerHTML).equal('foo');
  });

  it('calls onClick when clicked', () => {
    const onClick = vi.fn();
    const { getByRole } = render(<Button label="foo" onClick={onClick} />);
    const button = getByRole('button');
    fireEvent.click(button);
    expect(onClick).toHaveBeenCalledTimes(1);
  });

  it('renders with different sizes', () => {
    const { getByRole } = render(<Button label="foo" size="small" />);
    const button = getByRole('button');
    expect(button.classList).toContain('storybook-button--small');

    const { getByRole: getByRole2 } = render(<Button label="foo" size="large" />);
    const button2 = getByRole2('button');
    expect(button2.classList).toContain('storybook-button--large');
  });

  it('renders with different background colors', () => {
    const { getByRole } = render(<Button label="foo" background="#123456" />);
    const button = getByRole('button');
    expect(button.classList).toContain({ backgroundColor: '#123456' });
  });
});



