import React from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';

import { HomePage } from '../Pages/HomePage';

export const PrivateRouter = () => {
  return (
    <div>
      <div style={{ flexDirection: 'row', display: 'flex' }}>
        <Switch>
          <Route exact path="/home" component={HomePage} />
          <Redirect from="*" to="/home" />
        </Switch>
      </div>
    </div>
  );
};
