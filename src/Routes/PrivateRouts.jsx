import { useContext } from 'react';
import { AuthContext } from '../provider/AuthProvider';
import { Navigate, useLocation } from 'react-router-dom';
import { toast } from 'react-toastify';

const PrivateRouts = ({children}) => {
    const {user} = useContext(AuthContext);
    const location = useLocation();
    console.log(location);


    if(user?.email){
        return children
    }
    else {
        toast.error('Please login to access this page.');
        return <Navigate state={{from: location}} to="/login" replace />;
      }
};


export default PrivateRouts;