import React from 'react';
import '../../../App.css'
import { FaUserCheck } from 'react-icons/fa';
import { FcGoogle } from 'react-icons/fc';
import { Link } from 'react-router-dom';
import useFirebase from '../../../hooks/useFirebase';
import useAuth from '../../../hooks/useAuth';



const Login = () => {
    const { signInUsingGoogle } = useAuth();
    return (
        <div className="w-50 bg-info m-5">
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
                     <button onClick={signInUsingGoogle} size="sm" type="submit" className="btn w-100 btn-danger mt-2"><FcGoogle/> Continue with Google</button>

                </div>
                
                <Link to="/SignUp">New User?</Link>
             
               </div>
            </div>
    );
};

export default Login;