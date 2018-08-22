import * as React from "react";
import {
  BrowserRouter as Router,
  Route,
} from 'react-router-dom';

import AccountPage from './Account';
import HomePage from './Home';
import LandingPage from './Landing';
import Navigation from './Navigation';
import PasswordForgetPage from './PasswordForget';
import SignInPage from './SignIn';
import SignUpPage from './SignUp';

import * as routes from '../constants/routers';

const App = () =>
  <Router>
    <div>
      <Navigation />

      <hr />

      <Route
        exact={true} path={routes.LANDING}
        component={LandingPage}
      />
      <Route
        exact={true} path={routes.SIGN_UP}
        component={SignUpPage}
      />
      <Route
        exact={true} path={routes.SIGN_IN}
        component={SignInPage}
      />
      <Route
        exact={true} path={routes.PASSWORD_FORGET}
        component={PasswordForgetPage}
      />
      <Route
        exact={true} path={routes.HOME}
        component={HomePage}
      />
      <Route
        exact={true} path={routes.ACCOUNT}
        component={AccountPage}
      />
    </div>
  </Router>

export default App;