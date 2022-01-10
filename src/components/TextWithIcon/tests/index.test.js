import React from 'react';
import { render } from '@testing-library/react';
import { BsEnvelope } from "react-icons/bs";

import TextWithIcon from '../index';

describe('<TextWithIcon />', () => {
  it('should render its icon', () => {
    const { container } = render(<TextWithIcon icon={<BsEnvelope/>} text="email" />);
    expect(container.querySelector('svg')).not.toBeNull();
  });

  it('should render its text', () => {
    const text = 'email';
    const { container, queryByText } = render(<TextWithIcon icon={<BsEnvelope/>} text={text} />);
    const childNodes = container.querySelectorAll('span');
    expect(childNodes).toHaveLength(2);
    expect(queryByText(text)).not.toBeNull();
  });
});
