import React, { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';

import Swal from 'sweetalert2';
import { AuthContext } from '../Provider/AuthProvider';




const PrivateRoutes = ({ children }) => {
    const { user, loading } = useContext(AuthContext);
    const location = useLocation();
    console.log('user imn private router', user);
    if (loading) {
        return <div className="flex justify-center items-center">
            <div class="spinner border-4 border-gray-300 rounded-full w-12 h-12"></div>
        </div>

    }
    if (user) {
        return children;
    }
    else {
        Swal.fire({
            position: 'center',
            icon: 'success',
            title: 'Please Login First',
            showConfirmButton: false,
            timer: 1500
        })
    }
    return <Navigate state={{ from: location }} to="/login" replace></Navigate>
};

export default PrivateRoutes;