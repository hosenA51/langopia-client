import { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import AuthContext from '../context/AuthContext/AuthContext';

const PrivateRoute = ({children}) => {
    const {user, loading} = useContext(AuthContext);
    const location = useLocation();
    
    if(loading){
        return <div className='flex justify-center items-center h-screen'>
            <span className="loading loading-bars loading-lg"></span>
        </div>
    }
    if(!user){
        return <Navigate state={{from:location.pathname}} to="/login"></Navigate>
    }
    return children
};

export default PrivateRoute;