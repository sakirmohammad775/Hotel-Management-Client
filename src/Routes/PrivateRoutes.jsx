import { useContext } from "react";
import { AuthContext } from "../Provider/AuthProvider";
import { Navigate } from "react-router-dom";
import PropTypes from 'prop-types';

const PrivateRoutes = ({children}) => {
    const{user,loading}=useContext(AuthContext)

  if(loading){
    return <progress className="progress w-56"></progress>
  }
    if(user?.email){
        return children
    }
    return <Navigate to='/signIn'></Navigate>
};

export default PrivateRoutes;

PrivateRoutes.propTypes={
    children:PropTypes.node
}