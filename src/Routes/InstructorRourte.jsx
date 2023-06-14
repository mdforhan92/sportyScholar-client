
import { Navigate, useLocation } from "react-router-dom";
import Loader from "../components/Shared/Loader";
import useAuth from "../hooks/useAuth";
import useInstructor from "../hooks/useInstructor";







const InstructorRoute = ({ children }) => {
    const { user, loading } = useAuth();
    const [isAdmin, isAdminLoading] = useInstructor();
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

export default InstructorRoute;