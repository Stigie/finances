import { auth } from '../firebase';


import * as React from "react";
import { withRouter } from 'react-router-dom';



import { SignUpLink } from './SignUp';

import * as routes from '../constants/routers';

const SignInPage = ({ history } : any) =>
  <div>
    <h1>SignIn</h1>
    <SignInForm history={history} />
    <SignUpLink />
  </div>

const byPropKey = (propertyName : any, value : any) => () => ({
  [propertyName]: value,
});

const INITIAL_STATE = {
  email: '',
  error: null,
  password: '',

};

class SignInForm extends React.Component<any, any> {
  constructor(props : any) {
    super(props);

    this.state = { ...INITIAL_STATE };
  }

  public onSubmit = (event : any) => {
    const {
      email,
      password,
    } = this.state;

    const {
      history,
    } = this.props;

    auth.doSignInWithEmailAndPassword(email, password)
      .then(() => {
        this.setState({ ...INITIAL_STATE });
        history.push(routes.HOME);
      })
      .catch((error : any) => {
        this.setState(byPropKey('error', error));
      });

    event.preventDefault();
  }

  public render() {
    const {
      email,
      password,
      error,
    } = this.state;

    const isInvalid =
      password === '' ||
      email === '';

    return (
      <form onSubmit={this.onSubmit}>
        <input
          value={email}
          onChange={
            // tslint:disable-next-line jsx-no-lambda
            event => this.setState(byPropKey('email', event.target.value))
          }
          type="text"
          placeholder="Email Address"
        />
        <input
          value={password}
          onChange={
            // tslint:disable-next-line jsx-no-lambda
            event => this.setState(byPropKey('password', event.target.value))
          }
          type="password"
          placeholder="Password"
        />
        <button disabled={isInvalid} type="submit">
          Sign In
        </button>

        { error && <p>{error.message}</p> }
      </form>
    );
  }
}

export default withRouter(SignInPage);

export {
  SignInForm,
};