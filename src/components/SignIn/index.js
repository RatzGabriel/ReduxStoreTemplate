import React, { Component } from 'react';
import { signInWithGoogle, auth } from '../../firebase/Utils';
import Button from '../Forms/Buttons';
import FormInput from '../Forms/formInput';
import './styles.scss';

const initialState = {
  email: '',
  password: '',
};

class SignIn extends Component {
  constructor(props) {
    super(props);
    this.state = {
      ...initialState,
    };
    this.handleChange = this.handleChange.bind(this);
  }
  handleSubmit = async (e) => {
    e.preventDefault();
    const { email, password } = this.state;
    try {
      await auth.signInWithEmailAndPassword(email, password);
      this.setState({
        ...initialState,
      });
    } catch (err) {
      console.log(err);
    }
  };

  handleChange(e) {
    const { name, value } = e.target;
    this.setState({
      [name]: value,
    });
  }
  render() {
    const { email, password } = this.state;
    return (
      <div className="signin">
        <div className="wrap">
          <h2>Login</h2>
          <div className="formWrap">
            <form onSubmit={this.handleSubmit}>
              <FormInput
                type="email"
                name="email"
                value={email}
                placeholder="email"
                handleChange={this.handleChange}
              />
              <FormInput
                type="password"
                name="password"
                value={password}
                placeholder="password"
                handleChange={this.handleChange}
              />
              <Button type="submit">Login</Button>

              <div className="socialSignIn">
                <div className="row">
                  <Button onClick={signInWithGoogle}>
                    Sign In With Google
                  </Button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default SignIn;
