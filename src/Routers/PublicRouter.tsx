import { Redirect, Route, Switch } from 'react-router-dom';
import { AccountActivationPage } from '../Pages/AccountActivationPage';
import { HomePage } from '../Pages/HomePage/HomePage';
import { PostListPage } from '../Pages/PostListPage/PostListPage';
import { PostDetailPage } from '../Pages/PostDetailPage/PostDetailPage';
import { CompanyCreatePage } from '../Pages/CompanyCreatePage/CompanyCreatePage';
import { CompanyDetailPage } from '../Pages/CompanyDetailPage/CompanyDetailPage';
import { UserDetailPage } from '../Pages/UserDetailPage/UserDetailPage';
import { DashboardPage } from '../Pages/DashboardPage/DashboardPage';
import { TaskDetailPage } from '../Pages/TaskDetailPage/TaskDetailPage';
import { TaskListPage } from '../Pages/TaskListPage/TaskListPage';
import { RecoverPasswordPage } from '../Pages/RecoverPassowrdPage';
import { ApplicationDetailPage } from '../Pages/ApplicationDetailPage/ApplicationDetailPage';
import { PostCreatePage } from '../Pages/PostCreatePage/PostCreatePage';
import { AccountPage } from '../Pages/AccountPage/AccountPage';
import { TaskCreatePage } from '../Pages/TaskCreatePage/TaskCreatePage';
export const PublicRouter = () => {
  return (
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route exact path="/recover-password" component={RecoverPasswordPage} />
        <Route exact path="/account-activation" component={AccountActivationPage} />
        <Route exact path="/posts" component={PostListPage} />
        <Route exact path="/posts/:id" component={PostDetailPage} />
        <Route exact path="/companies/create" component={CompanyCreatePage} />
        <Route exact path="/companies/:id" component={CompanyDetailPage} />
        <Route exact path="/companies/:id/dashboard" component={DashboardPage} />
        <Route exact path="/companies/:id/post" component={PostCreatePage} />
        <Route exact path="/companies/:id/post/task" component={TaskCreatePage} />
        <Route exact path="/users/:id" component={UserDetailPage} />
        <Route exact path="/posts/:id/tasks/" component={TaskListPage} />
        <Route exact path="/posts/:id/tasks/:id" component={TaskDetailPage} />
        <Route exact path="/application-detail" component={ApplicationDetailPage} />
        <Route exact path="/users/:id/account" component={AccountPage} />
        <Redirect from="*" to="/" />
      </Switch>
  );
};
