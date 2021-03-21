import React from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';

import { Header } from '../Components/Header';
import { Sidebar } from '../Components/Sidebar';
import { HomePage } from '../Pages/HomePage';

export const PrivateRouter = () => {
  return (
    <div>
      <Header />
      <div style={{ flexDirection: 'row', display: 'flex' }}>
        <Sidebar />
        <Switch>
          <Route exact path="/home" component={HomePage} />
          <Redirect from="*" to="/home" />
        </Switch>
      </div>
    </div>
  );
};
