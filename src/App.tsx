import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from 'react-router-dom';
import { ApolloProvider } from '@apollo/client';
import client from 'apollo';
import ROUTES from 'config/routes';
import Layout from 'components/Layout';

const App = (): React.ReactElement => (
  <ApolloProvider client={client}>
    <Router>
      <Switch>
        <Route
          exact
          path={[ROUTES.HOME.ROOT, ROUTES.HOME.ID]}
          component={Layout}
        />
        <Redirect to={ROUTES.HOME.ROOT} />
      </Switch>
    </Router>
  </ApolloProvider>
);

export default App;
