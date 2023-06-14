import { SiGoogleclassroom } from "react-icons/si";
import { MdOutlineClass } from "react-icons/md";
import { NavLink } from "react-router-dom";


const UserOptions = () => {
    return (
        <div>
            <NavLink
                to='my-classes'
                className={({ isActive }) =>
                    `flex items-center px-4 py-2 mt-5  transition-colors duration-300 transform  hover:bg-gray-300   hover:text-gray-700 ${isActive ? 'bg-gray-300  text-gray-700' : 'text-gray-600'
                    }`
                }
            >
                <SiGoogleclassroom className='w-5 h-5' />

                <span className='mx-4 font-medium'>My Selected Class</span>
            </NavLink>
            <NavLink
                to='enrolled-classes'
                className={({ isActive }) =>
                    `flex items-center px-4 py-2 mt-5  transition-colors duration-300 transform  hover:bg-gray-300   hover:text-gray-700 ${isActive ? 'bg-gray-300  text-gray-700' : 'text-gray-600'
                    }`
                }
            >
                <MdOutlineClass className='w-5 h-5' />

                <span className='mx-4 font-medium'>Enrolled Class</span>
            </NavLink>
            <NavLink
                to='payment-history'
                className={({ isActive }) =>
                    `flex items-center px-4 py-2 mt-5  transition-colors duration-300 transform  hover:bg-gray-300   hover:text-gray-700 ${isActive ? 'bg-gray-300  text-gray-700' : 'text-gray-600'
                    }`
                }
            >
                <MdOutlineClass className='w-5 h-5' />

                <span className='mx-4 font-medium'>Payment History</span>
            </NavLink>
        </div>
    );
};

export default UserOptions;