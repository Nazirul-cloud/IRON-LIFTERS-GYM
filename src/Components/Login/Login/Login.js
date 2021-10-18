import React from 'react';
import '../../../App.css'
import { FaUserCheck } from 'react-icons/fa';
import { FcGoogle } from 'react-icons/fc';


const Login = () => {
    return (
        <form className="w-50 bg-info m-5">
               <div className="p-4">
                <h3 className="text-center"> <FaUserCheck/> Sign In</h3>
                <div className="form-group">
                    <label>Email address</label>
                    <input type="email" className="form-control" placeholder="Enter email" />
                </div>

                <div className="form-group">
                    <label>Password</label>
                    <input type="password" className="form-control" placeholder="Enter password" />
                </div>

                <div className="text-center">
                     <button size="sm" type="submit" className="btn w-100 btn-success btn-block mt-2">Log in</button>
                     <small>OR</small>
                     <button size="sm" type="submit" className="btn w-100 btn-danger btn-block mt-2"><FcGoogle/> Continue with Google</button>

                </div>
                
                <p className="forgot-password text-right">
                    Forgot <a href="#">password?</a>
                </p>
               </div>
            </form>
    );
};

export default Login;