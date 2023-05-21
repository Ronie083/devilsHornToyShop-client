import { useContext } from 'react';
import { AuthContext } from '../provider/AuthProvider';
import { Navigate } from 'react-router-dom';

const PrivateRouts = ({children}) => {
    const {user} = useContext(AuthContext);

    if(user?.email){
        return children
    }
    return <Navigate to='/login' replace></Navigate>;
};

export default PrivateRouts;