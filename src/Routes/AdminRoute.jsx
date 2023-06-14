
import { Navigate, useLocation } from "react-router-dom";
import Loader from "../components/Shared/Loader";
// import Loader from "../components/Shared/Loader";
import useAdmin from "../hooks/useAdmin";
import useAuth from "../hooks/useAuth";




const AdminRoute = ({ children }) => {
    const { user, loading } = useAuth();
    const [isAdmin, isAdminLoading] = useAdmin();
    const location = useLocation();

    if (loading || isAdminLoading) {
        return <Loader></Loader>

    }

    if (user && isAdmin) {
        return children;
    } else {
        return <Navigate to="/" state={{ from: location }} replace></Navigate>
    }


};

export default AdminRoute;