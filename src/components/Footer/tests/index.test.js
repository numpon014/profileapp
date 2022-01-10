import React from 'react';
import { render } from '@testing-library/react';
import Footer from '../index';

jest.mock('react-i18next', () => ({
  useTranslation: () => ({t: key => key})
}));

describe('<Footer />', () => {
  it('should render a text', () => {
    const { container } = render(<Footer />);
    expect(container.querySelector('span')).not.toBeNull();
  });
});