import React from 'react';
import { BrowserRouter, Route, Switch, withRouter } from 'react-router-dom';
import Start from './containers/Start';

import MainContainer from './components/MainContainer';
import Maze from './containers/Maze';

const RouteWithMainContainer = (
  path,
  Comp,
) => ({
  path,
  exact: true,
  main: ({ backgroundColor, ...rest }) => <main style={{ width: '100%' }}><Comp {...rest} /></main>,
});

export const routes = [
  RouteWithMainContainer(
    '/',
    Start,
  ),
  RouteWithMainContainer(
    '/maze/:id',
    Maze,
  ),
];

const Routes = () => (
  <Switch>
    {routes.map((route, index) => (
      <Route
        key={index}
        path={route.path}
        exact={route.exact}
        render={({ ...props }) => (
          <MainContainer route={route} {...props} />
        )}
      />
    ))}
  </Switch>
);

const Router = withRouter(Routes);

export default () => (
  <div>
    <BrowserRouter>
      <Router />
    </BrowserRouter>
  </div>
);
