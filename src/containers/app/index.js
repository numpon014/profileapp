import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { Helmet } from 'react-helmet';

import 'bootstrap/dist/css/bootstrap.min.css';
import GlobalStyle from './global-style';
import Layout from '../layouts/commonLayout';
import ProfileListPage from '../pages/profileListPage';

export default function App() {
  return (
    <>
      <Helmet titleTemplate="%s - Profile App" defaultTitle="Profile App">
        <meta name="description" content="Profile App by Numpon M." />
      </Helmet>
      <Switch>
        <Route path="/" exact>
          <Layout component={ProfileListPage} />
        </Route>
      </Switch>
      <GlobalStyle />
    </>
  );
}
