import { useEffect, useState } from "react";
import initializeAuthentication from "../Firebase/firebase.init";
import { GoogleAuthProvider, getAuth, signInWithPopup, onAuthStateChanged, signOut   } from "firebase/auth";



initializeAuthentication();

const useFirebase = () => {
    const [user, setUser] = useState({});
    const [error, setError] = useState('');

    
    const auth = getAuth();
    const googleProvider = new GoogleAuthProvider();


    const signInUsingGoogle = () => {
        signInWithPopup(auth, googleProvider)
            .then(result => {
                console.log(result.user);
                setUser(result.user);
            })
            .catch(error => {
                setError(error.message);
            })
    }

    const logOut = () =>{
        signOut(auth)
            .then(() => {
                 setUser({});
          })
     }

     useEffect( () =>{
        onAuthStateChanged ( auth, (user) =>{
            if(user){
                console.log('state change', user);
                setUser(user);
            }
        })
     }, []);

    return {
        signInUsingGoogle,
        user,
        logOut
    }
    
}

export default useFirebase;