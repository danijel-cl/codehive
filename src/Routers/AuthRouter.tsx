import React from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';

import { PrivateRouter } from './PrivateRouter';
import { PublicRouter } from './PublicRouter';

export const AuthRouter = () => {
  const isLoggedIn = false;

  return (
    <Switch>
      {!isLoggedIn && <Route path="/" component={PublicRouter} />}
      {isLoggedIn && <Route path="/" component={PrivateRouter} />}
      <Redirect to={'/'} />
    </Switch>
  );
};
