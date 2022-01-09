import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { Helmet } from 'react-helmet';

import 'bootstrap/dist/css/bootstrap.min.css';
import GlobalStyle from './globalStyle';
import Layout from './containers/layouts/commonLayout';
import UserListPage from './containers/pages/userListPage';
import NotFoundPage from './containers/pages/notFoundPage';

export default function App() {
  return (
    <div id="app">
      <Helmet titleTemplate="%s - Profile App" defaultTitle="Profile App">
        <meta name="description" content="Profile App by Numpon M." />
      </Helmet>
      <Switch>
        <Route exact path="/">
          <Layout component={UserListPage} />
        </Route>
        <Route exact path="">
          <Layout component={NotFoundPage} />
        </Route>
      </Switch>
      <GlobalStyle />
    </div>
  );
}
