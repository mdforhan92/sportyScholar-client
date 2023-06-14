import {FiUsers} from 'react-icons/fi'
import {SiGoogleclassroom} from 'react-icons/si'
import { NavLink } from "react-router-dom";


const AdminOptions = () => {
    return (
        <>
            <NavLink
                to='manage-class'
                className={({ isActive }) =>
                    `flex items-center px-4 py-2 mt-5  transition-colors duration-300 transform  hover:bg-gray-300   hover:text-gray-700 ${isActive ? 'bg-gray-300  text-gray-700' : 'text-gray-600'
                    }`
                }
            >
                <SiGoogleclassroom className='w-5 h-5' />

                <span className='mx-4 font-medium'>Manage Classes</span>
            </NavLink>
            <NavLink
                to='manage-user'
                className={({ isActive }) =>
                    `flex items-center px-4 py-2 mt-5  transition-colors duration-300 transform  hover:bg-gray-300   hover:text-gray-700 ${isActive ? 'bg-gray-300  text-gray-700' : 'text-gray-600'
                    }`
                }
            >
                <FiUsers className='w-5 h-5' />

                <span className='mx-4 font-medium'>Manage Users</span>
            </NavLink>
        </>
    );
};

export default AdminOptions;