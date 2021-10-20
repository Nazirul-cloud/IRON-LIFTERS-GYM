import React from 'react';
import { FcGoogle } from 'react-icons/fc';
import useAuth from '../../../hooks/useAuth';

const SignUp = () => {
    const { signInUsingGoogle, handleNameChange, handleRegistration, isLogin, handleEmailChange, handlePasswordChange, toggleLogin, error } = useAuth();
    return (
        <div className="m-5 d-flex justify-content-center">
              <div className="w-50 p-4">
                
              <form onSubmit={handleRegistration}>
        <h3 className="text-primary mb-4"> {isLogin ?  'Login' : 'Sign Up'}</h3>
        {!isLogin && <div className="row mb-3">
          <label htmlFor="inputName" className="col-sm-2 col-form-label">Name</label>
          <div className="col-sm-10">
            <input type="text" onBlur={handleNameChange} className="form-control" id="inputName" placeholder="Your Name" />
          </div>
        </div>}
        <div className="row mb-3">
          <label htmlFor="inputEmail3" className="col-sm-2 col-form-label">Email</label>
          <div className="col-sm-10">
            <input onBlur={handleEmailChange} type="email" className="form-control" id="inputEmail3" required />
          </div>
        </div>
        <div className="row mb-3">
          <label htmlFor="inputPassword3" className="col-sm-2 col-form-label">Password</label>
          <div className="col-sm-10">
            <input type="password" onBlur={handlePasswordChange} className="form-control" id="inputPassword3" required />
          </div>
        </div>
        <div className="mb-3">
          <div className="col-sm-10 offset-sm-2">
            <div className="form-check">
              <input onChange={toggleLogin} className="form-check-input" type="checkbox" id="gridCheck1" />
              <small>Already user?</small>
            </div>
          </div>
        </div>
        <div className="row mb-3 text-danger">{error}</div>
        <button type="submit" className="btn w-50 btn-success btn-block">
          {isLogin ? 'Login' : 'Register'}
        </button>
      </form>

      <button onClick={signInUsingGoogle} size="sm" type="submit" className="btn w-50 btn-danger mt-2 mb-2"><FcGoogle/> Continue with Google</button>
            </div>
        </div>
    );
};

export default SignUp;