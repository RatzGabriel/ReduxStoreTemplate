import React, { Component } from 'react';
import { auth } from '../../firebase/Utils';
import AuthWrapper from '../AuthWrapper';
import Button from '../Forms/Buttons';
import FormInput from '../Forms/formInput';

const initialState = {
  email: '',
  errors: [],
};

class EmailPassword extends Component {
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

  handleSubmit = async (e) => {
    e.preventDefault();
    const config = {
      // this is where you will be sent to after click recover pw
      url: 'http://localhost:3000/login',
    };
    try {
      const { email } = this.state;
      const config = {
        // change this later to live environment
        url: 'http://localhost:3000/login',
      };
      await auth
        .sendPasswordResetEmail(email, config)
        .then(() => {
          this.props.history.push('/login');
        })
        .catch(() => {
          const err = ['Email not found. Please try again'];
          this.setState({
            errors: err,
          });
        });
    } catch (error) {
      console.log('ez', error);
    }
  };

  render() {
    const { email, errors } = this.state;
    const configAuthWrapper = {
      headline: 'Email Password',
    };

    return (
      <AuthWrapper {...configAuthWrapper}>
        <div className="formWrap">
          {errors.length > 0 && (
            <ul>
              {errors.map((e, index) => {
                return <li key={index}>{e}</li>;
              })}
            </ul>
          )}

          <form onSubmit={this.handleSubmit}>
            <FormInput
              type="email"
              name="email"
              value={email}
              placeholder="Email"
              onChange={this.handleChange}
            />
            <Button type="submit">Email Password</Button>
          </form>
        </div>
      </AuthWrapper>
    );
  }
}

export default EmailPassword;
