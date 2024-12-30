import { useEffect, useState } from 'react';
import AuthContext from './AuthContext';
import { createUserWithEmailAndPassword, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import auth from '../../firebase/firebase.init';
import axios from 'axios';

const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);


    const createUser = (email, password) => {
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password);
    }
    const signInUser = (email, password) => {
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password);
    }

    const manageProfile = (name, image) => {
        return updateProfile(auth.currentUser, {
            displayName: name,
            photoURL: image
        })
    }
    const handleLogout = () => {
        return signOut(auth)
    };

    const handleGoogleLogin = () => {
        setLoading(true);
        const provider = new GoogleAuthProvider();

        return signInWithPopup(auth, provider)
            .then(result => {
                const loggedInUser = result.user;
                setUser({
                    displayName: loggedInUser.displayName,
                    email: loggedInUser.email,
                    photoURL: loggedInUser.photoURL || null,
                });
                setLoading(false);
                return result; 
            })
            .catch(error => {
                setLoading(false);
                console.error('Google login error:', error); 
                throw error; 
            });
    };



    const authInfo = {
        user,
        setUser,
        loading,
        createUser,
        signInUser,
        handleGoogleLogin,
        manageProfile,
        handleLogout
    }

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
            if (currentUser) {
                setUser({
                    displayName: currentUser.displayName || "Google User",
                    email: currentUser.email,
                    photoURL: currentUser.photoURL || null,
                });
            } else {
                setUser(null);
            }
            console.log('state captured', currentUser?.email)
            if (currentUser?.email) {
                const user = { email: currentUser.email };

                axios.post('http://localhost:3000/jwt', user, { withCredentials: true })
                    .then(res => {
                        console.log('login token', res.data)
                        setLoading(false);
                    })
            }
            else {
                axios.post('http://localhost:3000/logout', {}, {
                    withCredentials: true
                })
                    .then(res => {
                        console.log('logout', res.data);
                        setLoading(false)
                    })
            }
        });

        return () => unsubscribe();
    }, []);

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;