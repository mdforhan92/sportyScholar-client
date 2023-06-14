import { SiGoogleclassroom } from "react-icons/si";
import {GrTableAdd} from 'react-icons/gr'
import { NavLink } from "react-router-dom";


const InstructorOptions = () => {
    return (
        <>
            <NavLink
                to='add-class'
                className={({ isActive }) =>
                    `flex items-center px-4 py-2 mt-5  transition-colors duration-300 transform  hover:bg-gray-300   hover:text-gray-700 ${isActive ? 'bg-gray-300  text-gray-700' : 'text-gray-600'
                    }`
                }
            >
                <GrTableAdd className='w-5 h-5' />

                <span className='mx-4 font-medium'>Add a Class</span>
            </NavLink>
            <NavLink
                to='my-classroom'
                className={({ isActive }) =>
                    `flex items-center px-4 py-2 mt-5  transition-colors duration-300 transform  hover:bg-gray-300   hover:text-gray-700 ${isActive ? 'bg-gray-300  text-gray-700' : 'text-gray-600'
                    }`
                }
            >
                <SiGoogleclassroom className='w-5 h-5' />

                <span className='mx-4 font-medium'>My Classrooms</span>
            </NavLink>
        </>
    );
};

export default InstructorOptions;