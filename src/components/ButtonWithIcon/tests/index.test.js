import React from 'react';
import { render } from '@testing-library/react';
import { BsEnvelope } from "react-icons/bs";

import ButtonWithIcon from '../index';

describe('<ButtonWithIcon />', () => {
  it('should render a icon', () => {
    const { container } = render(<ButtonWithIcon icon={<BsEnvelope/>}/>);
    expect(container.querySelector('svg')).not.toBeNull();
  });
});
