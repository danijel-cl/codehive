import { Redirect, Route, Switch } from 'react-router-dom';
import { AccountActivationPage } from '../Pages/AccountActivationPage';
import { HomePage } from '../Pages/HomePage/HomePage';
import { PostListPage } from '../Pages/PostListPage/PostListPage';
import { PostDetailPage } from '../Pages/PostDetailPage/PostDetailPage';
import { CompanyDetailPage } from '../Pages/CompanyDetailPage/CompanyDetailPage';
import { UserDetailPage } from '../Pages/UserDetailPage/UserDetailPage';
import { UserPostListPage } from '../Pages/UserPostListPage/UserPostListPage';
import { DashboardPage } from '../Pages/DashboardPage/DashboardPage';
import { TaskDetailPage } from '../Pages/TaskDetailPage/TaskDetailPage';
import { TaskListPage } from '../Pages/TaskListPage/TaskListPage';
import { RecoverPasswordPage } from '../Pages/RecoverPassowrdPage';

export const PublicRouter = () => {
  return (
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route exact path="/recover-password" component={RecoverPasswordPage} />
        <Route exact path="/account-activation" component={AccountActivationPage} />
        <Route exact path="/posts" component={PostListPage} />
        <Route exact path="/posts/:id" component={PostDetailPage} />
        <Route exact path="/companies/:id" component={CompanyDetailPage} />
        <Route exact path="/companies/:id/dashboard" component={DashboardPage} />
        <Route exact path="/users/:id" component={UserDetailPage} />
        <Route exact path="/users/:id/jobs" component={UserPostListPage} />
        <Route exact path="/posts/:id/tasks/" component={TaskListPage} />
        <Route exact path="/posts/:id/tasks/:id" component={TaskDetailPage} />
        <Redirect from="*" to="/" />
      </Switch>
  );
};
