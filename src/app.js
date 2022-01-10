import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import { useTranslation } from 'react-i18next';

import 'bootstrap/dist/css/bootstrap.min.css';
import GlobalStyle from './globalStyle';
import Layout from './containers/layouts/CommonLayout';
import UserListPage from './containers/pages/UserListPage';
import NotFoundPage from './containers/pages/NotFoundPage';

export default function App() {
  const { t } = useTranslation();

  return (
    <div id="app">
      <Helmet titleTemplate="%s - Profile App" defaultTitle={t('app.name')}>
        <meta name="description" content={t('app.description')} />
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
