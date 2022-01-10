import React from 'react';
import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import { ConnectedRouter } from 'connected-react-router';
import { createMemoryHistory } from 'history';

import Header from '../index';
import configureStore from '../../../configureStore';

jest.mock('react-i18next', () => ({
  useTranslation: () => ({t: key => key})
}));

describe('<Header />', () => {
  const history = createMemoryHistory();
  const store = configureStore({}, history);

  it('should render className parameter', () => {
    const className = "main-header"
    const { container } = render(
      <Provider store={store}>
        <ConnectedRouter history={history}>
          <Header className={className} />
        </ConnectedRouter>
      </Provider>,
    );
    expect(container.querySelector(`div.${className}`)).not.toBeNull();
  });

  it('should render logo and home link in nav', () => {
    const { container } = render(
      <Provider store={store}>
        <ConnectedRouter history={history}>
          <Header />
        </ConnectedRouter>
      </Provider>,
    );

    expect(container.querySelector(`a.home-link`)).not.toBeNull();
    expect(container.querySelector(`img.logo`)).not.toBeNull();
  });
});
