import './styles.scss';
import React from 'react';
import FormInput from '../Forms/formInput';
import Button from '../Forms/Buttons';
import { auth, handleUserProfile } from '../../firebase/Utils';

const initialState = {
  displayName: '',
  email: '',
  password: '',
  confirmPassword: '',
  errors: [],
};

class SignUp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      ...initialState,
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e) {
    const { name, value } = e.target;

    this.setState({
      [name]: value,
    });
  }

  handleFormSubmit = async (event) => {
    event.preventDefault();
    const { displayName, email, password, confirmPassword, errors } =
      this.state;

    if (password !== confirmPassword) {
      const err = ["Passwords don't match"];
      this.setState({
        errors: err,
      });
      return;
    }
    try {
      const { user } = await auth.createUserWithEmailAndPassword(
        email,
        password
      );
      await handleUserProfile(user, { displayName });

      this.setState({
        ...initialState,
      });
    } catch (err) {
      console.log(err);
    }
  };

  render() {
    const { displayName, email, password, confirmPassword, errors } =
      this.state;
    return (
      <div className="signup">
        <div className="wrap">
          <h2>Signup</h2>
          {errors.length > 0 && (
            <ul>
              {errors.map((err, index) => {
                return <li key={index}>{err}</li>;
              })}
            </ul>
          )}
          <div className="formWrap">
            <form onSubmit={this.handleFormSubmit}>
              <FormInput
                type="text"
                name="displayName"
                value={displayName}
                placeholder="Full Name"
                onChange={this.handleChange}
              />
              <FormInput
                type="email"
                name="email"
                value={email}
                placeholder="Email"
                onChange={this.handleChange}
              />
              <FormInput
                type="password"
                name="password"
                value={password}
                placeholder="Password"
                onChange={this.handleChange}
              />
              <FormInput
                type="password"
                name="confirmPassword"
                value={confirmPassword}
                placeholder="confirm Password"
                onChange={this.handleChange}
              />
              <Button type="submit">Register</Button>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default SignUp;
