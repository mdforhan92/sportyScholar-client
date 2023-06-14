import { NavLink, useLocation } from "react-router-dom";
import useAuth from "../../../hooks/useAuth";
import Dropdown from "./DropDown";

const NavLinks = () => {
    const { user, role } = useAuth();
    const admin = role === "admin";
    const instructor = role === "instructor";
    const location = useLocation();

    return (
        <div className="flex flex-row items-center justify-center md:justify-between text-white dark:text-yellow-600">
            <NavLink exact to="/" className={location.pathname === "/" ? "active" : ""}>
                <div className="hidden md:block dark font-semibold px-0 md:px-6">
                    Home
                </div>
            </NavLink>
            <NavLink to="/instructors" className={location.pathname === "/instructors" ? "active" : ""}>
                <div className="font-semibold px-0 md:px-6">Instructor</div>
            </NavLink>
            <NavLink to="/classes" className={location.pathname === "/classes" ? "active" : ""}>
                <div className="font-semibold px-6">Classes</div>
            </NavLink>
            {user && (
                <NavLink
                    to={
                        admin
                            ? "/dashboard/manage-class"
                            : instructor
                                ? "/dashboard/add-class"
                                : "/dashboard/my-classes"
                    }
                    className={
                        location.pathname === "/dashboard/manage-class" ||
                            location.pathname === "/dashboard/add-class" ||
                            location.pathname === "/dashboard/my-classes"
                            ? "active"
                            : ""
                    }
                >
                    <div className="font-semibold px-6">Dashboard</div>
                </NavLink>
            )}
            <Dropdown></Dropdown>
        </div>
    );
};

export default NavLinks;
