import { Route, Switch } from 'react-router-dom';

import { route } from '@quacker/navigation/utility';
import { PageNotFound } from '@quacker/navigation/ui';
import { SignInPage, SignUpPage } from '@quacker/auth/feature';

import { AboutPage } from 'src/pages/AboutPage';
import { HomePage, UserDetailPage } from '@quacker/quack/feature';

export function Routes() {
  return (
    <Switch>
      <Route path={route.home()} exact component={HomePage} />
      <Route path={route.about()} exact component={AboutPage} />
      <Route path={route.signIn()} exact component={SignInPage} />
      <Route path={route.signUp()} exact component={SignUpPage} />
      <Route
        path={route.userDetail(':userName')}
        exact
        component={UserDetailPage}
      />
      <Route path="*" component={PageNotFound} />
    </Switch>
  );
}
