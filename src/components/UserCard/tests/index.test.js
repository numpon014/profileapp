import React from 'react';
import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import { ConnectedRouter } from 'connected-react-router';
import { createMemoryHistory } from 'history';
import configureStore from '../../../configureStore';
import UserCard from '../index';
import users from "./users.json";

describe('<UserCard />', () => {
  const history = createMemoryHistory();
  const store = configureStore({}, history);

  it('should render className parameter', () => {
    const className = "user-card"
    const { container } = render(
      <Provider store={store}>
        <ConnectedRouter history={history}>
          <UserCard className={className} user={users[0]}/>
        </ConnectedRouter>
      </Provider>,
    );

    expect(container.querySelector(`div.${className}`)).not.toBeNull();
  });

  it('should render user address information', () => {
    const { container } = render(
      <Provider store={store}>
        <ConnectedRouter history={history}>
          <UserCard user={users[0]}/>
        </ConnectedRouter>
      </Provider>,
    );

    expect(container.querySelectorAll(`div.email span`)[1].textContent).toEqual(users[0].email);
    expect(container.querySelectorAll(`div.phone span`)[1].textContent).toEqual(users[0].phone);
    expect(container.querySelectorAll(`div.website span`)[1].textContent).toEqual(users[0].website);
  });

  it('should render user buttons', () => {
    const { container } = render(
      <Provider store={store}>
        <ConnectedRouter history={history}>
          <UserCard user={users[0]}/>
        </ConnectedRouter>
      </Provider>,
    );

    expect(container.querySelectorAll(`button.like-btn`)).not.toBeNull();
    expect(container.querySelectorAll(`button.edit-btn`)).not.toBeNull();
    expect(container.querySelectorAll(`button.website`)).not.toBeNull();
  });

  it('should render a div', () => {
    const { container } = render(
      <Provider store={store}>
        <ConnectedRouter history={history}>
          <UserCard user={users[0]}/>
        </ConnectedRouter>
      </Provider>,
    );
    expect(container.firstChild).toMatchSnapshot();
  });
});
