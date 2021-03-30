import React, {Fragment} from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';

import ScrollToTop from "../Components/ScrollToTop"
import Navbar from "../Components/Navbar"
import Footer from "../Components/Footer"

import { PrivateRouter } from './PrivateRouter';
import { PublicRouter } from './PublicRouter';

export const AuthRouter = () => {
  const isLoggedIn = false;
  var path = window.location.pathname;
  const renderFooter = () => {
    if(
      path.includes("tasks")
      || path.includes("dashboard")
    ){
      return null;
    } else {
      return <Footer />
    }
  }
  return (
    <Fragment>
      <ScrollToTop />
      <Navbar isLoggedIn={isLoggedIn} />
      <Switch>
        {!isLoggedIn && <Route path="/" component={PublicRouter} />}
        {isLoggedIn && <Route path="/" component={PrivateRouter} />}
        <Redirect to={'/'} />
      </Switch>
      { renderFooter() }
    </Fragment>
  );
};
