
import React, { createContext } from 'react';
import useFirebase from '../hooks/useFirebase';


const AuthContext = createContext();
export {AuthContext};
const AuthProvider = ({ children }) => {
    const allContext = useFirebase();
    console.log(allContext);
    return (
        <AuthContext.Provider value={allContext}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;