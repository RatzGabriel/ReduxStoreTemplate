import React, { useState, useEffect } from 'react';
import { signInWithGoogle, auth } from '../../firebase/Utils';
import AuthWrapper from '../AuthWrapper';
import Button from '../Forms/Buttons';
import FormInput from '../Forms/formInput';
import './styles.scss';
import { Link } from 'react-router-dom';

const SignIn = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const resetForm = () => {
    setEmail('');
    setPassword('');
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await auth.signInWithEmailAndPassword(email, password);
      resetForm();
    } catch (err) {
      console.log(err);
    }
  };

  const configAuthWrapper = {
    headline: 'Login',
  };
  return (
    <AuthWrapper {...configAuthWrapper}>
      <div className="formWrap">
        <form onSubmit={handleSubmit}>
          <FormInput
            type="email"
            name="email"
            value={email}
            placeholder="email"
            handleChange={(e) => setEmail(e.target.value)}
          />
          <FormInput
            type="password"
            name="password"
            value={password}
            placeholder="password"
            handleChange={(e) => setPassword(e.target.value)}
          />
          <Button type="submit">Login</Button>

          <div className="socialSignIn">
            <div className="row">
              <Button onClick={signInWithGoogle}>Sign In With Google</Button>
            </div>
          </div>
          <div className="links">
            <Link to="/recovery">Reset Password</Link>
          </div>
        </form>
      </div>
    </AuthWrapper>
  );
};

export default SignIn;
