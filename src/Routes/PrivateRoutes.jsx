import { useContext } from "react";
import { AuthContext } from "../Provider/AuthProvider";
import { Navigate } from "react-router-dom";
import PropTypes from 'prop-types';

const PrivateRoutes = ({children}) => {
    const{user,loading}=useContext(AuthContext)

    if(user){
        return loading
    }
    if(user){
        return children
    }
    return <Navigate to='/signIn'></Navigate>
};

export default PrivateRoutes;

PrivateRoutes.propTypes={
    children:PropTypes.node
}