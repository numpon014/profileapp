import React from 'react';
import { render } from '@testing-library/react';

import Circle from '../circle';

describe('<Circle />', () => {
  it('should render an <div> tag', () => {
    const { container } = render(<Circle />);
    expect(container.firstChild.tagName).toEqual('DIV');
  });

  it('should have a class attribute', () => {
    const { container } = render(<Circle />);
    expect(container.firstChild.hasAttribute('class')).toBe(true);
  });

  it('should not adopt attributes', () => {
    const id = 'test';
    const { container } = render(<Circle id={id} />);
    expect(container.firstChild.hasAttribute('id')).toBe(false);
  });
});
