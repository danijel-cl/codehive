import React from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';
import { AccountActivationPage } from '../Pages/AccountActivationPage';
import { HomePage } from '../Pages/HomePage';

import { LoginPage } from '../Pages/LoginPage';
import { PostsPage } from '../Pages/PostsPage';
import { PostDetailPage } from '../Pages/PostDetailPage';
import { CompanyDetailPage } from '../Pages/CompanyDetailPage';
import { RecoverPasswordPage } from '../Pages/RecoverPassowrdPage';
import { RegistrationPage } from '../Pages/RegistrationPage';

export const PublicRouter = () => {
  return (
    <Switch>
      <Route exact path="/" component={HomePage} />
      <Route exact path="/register" component={RegistrationPage} />
      <Route exact path="/login" component={LoginPage} />
      <Route exact path="/recover-password" component={RecoverPasswordPage} />
      <Route exact path="/account-activation" component={AccountActivationPage} />
      <Route exact path="/posts" component={PostsPage} />
      <Route exact path="/posts/:id" component={PostDetailPage} />
      <Route exact path="/companies/:id" component={CompanyDetailPage} />
      <Redirect from="*" to="/" />
    </Switch>
  );
};
