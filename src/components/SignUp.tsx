import * as React from "react";
import { Link, withRouter } from 'react-router-dom';
import { auth } from '../firebase';

import * as routes from '../constants/routers';


export const SignUpPage = ({history} : any) =>
  <div>
    <h1>SignUp</h1>
    { // tslint:disable-next-line:no-console 
      console.log(history)
    }
    <SignUpForm history={history} />
  </div>

const INITIAL_STATE = {
  email: '',
  error: null,
  passwordOne: '',
  passwordTwo: '',
  username: '',
};

export interface ISignUpFormState{
  email: string,
  error: any,
  passwordOne: string,
  passwordTwo: string,
  username: string
}

const byPropKey = (propertyName: string, value: any) => () => ({
  [propertyName]: value,
});

class SignUpForm extends React.Component<any, any> {
  constructor(props : any) {
    super(props);
    this.state = { ...INITIAL_STATE };
  }

  public onSubmit = (event : any) => {
    const {
      email,
      passwordOne,
    } = this.state;

    const {
      history,
    } = this.props;

    auth.doCreateUserWithEmailAndPassword(email, passwordOne)
      .then((authUser : any) => {
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
      username,
      email,
      passwordOne,
      passwordTwo,
      error,
    } = this.state;

    const isInvalid =
      passwordOne !== passwordTwo ||
      passwordOne === '' ||
      email === '' ||
      username === '';

    return (
      <form onSubmit={this.onSubmit}>
        <input
          value={username}
          onChange={
            // tslint:disable-next-line jsx-no-lambda
            event => this.setState(byPropKey('username', event.target.value))
          }
          type="text"
          placeholder="Full Name"
        />
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
          value={passwordOne}
          onChange={
            // tslint:disable-next-line jsx-no-lambda
            event => this.setState(byPropKey('passwordOne', event.target.value))
          }
          type="password"
          placeholder="Password"
        />
        <input
          value={passwordTwo}
          onChange={
            // tslint:disable-next-line jsx-no-lambda
            event => this.setState(byPropKey('passwordTwo', event.target.value))
          }
          type="password"
          placeholder="Confirm Password"
        />
        <button disabled={isInvalid} type="submit">
          Sign Up
        </button>

        {error && <p>{error.message}</p>}
      </form>
    );
  }
}

const SignUpLink = () =>
  <p>
    Don't have an account?
    {' '}
    <Link to={routes.SIGN_UP}>Sign Up</Link>
  </p>


export default withRouter(SignUpPage);

export {
  SignUpForm,
  SignUpLink,
};