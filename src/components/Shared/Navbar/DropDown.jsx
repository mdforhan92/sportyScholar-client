import { AiOutlineMenu } from 'react-icons/ai'
// import Avatar from './Avatar'
import { useCallback,  useEffect,  useState } from 'react'

import { Link } from 'react-router-dom'
import useAuth from '../../../hooks/useAuth';
import Avatar from './Avatar';



const Dropdown = () => {
    const [theme, setTheme] = useState(localStorage.getItem("theme") || "light");
    const [isOpen, setIsOpen] = useState(false)
    useEffect(() => {
        document.documentElement.classList.toggle("dark", theme === "dark");
        localStorage.setItem("theme", theme);
      }, [theme]);
    const handleTheme = () => {
        setTheme(theme === "dark" ? "light" : "dark");
      };


    const { user, logout } = useAuth();
    const handleLogout = () => {
        logout()
            .then(() => {
                console.log('user logged out')
            })
            .catch(error => console.log(error))
    }
    
    
    const toggleOpen = useCallback(() => {
        setIsOpen(value => !value)
    }, [])
    return (
        <div className='relative'>
            <div className='flex flex-row items-center gap-3'>
                <div className='hidden md:block text-sm font-semibold py-3 px-4 rounded-full hover:bg-neutral-100 transition cursor-pointer'>
                    {/*TODO:make toggle button that toggle dark and light mode */}
                    <input 
                     onClick={handleTheme}
                    type="checkbox" className="toggle toggle-xl"  />
                </div>
                <div
                    onClick={toggleOpen}
                    className='p-4 md:py-1 md:px-2 border-[1px] border-neutral-200 flex flex-row items-center gap-3 rounded-full cursor-pointer hover:shadow-md transition'
                >
                    <AiOutlineMenu />
                    <div className='hidden md:block tooltip tooltip-bottom tooltip-warning' data-tip={user?.displayName}>
                        <Avatar></Avatar>
                    </div>
                </div>
            </div>
            {isOpen && (
                <div className='absolute rounded-xl shadow-md w-[40vw] md:w-3/4  overflow-hidden right-0 top-12 text-sm'>
                    <div className='flex flex-col cursor-pointer'>
                        <Link
                            to='/'
                            className='block md:hidden px-4 py-3 hover:bg-neutral-100 transition font-semibold'
                        >
                            Home
                        </Link>
                        {user ? (
                            <div
                               onClick={handleLogout}
                                className='px-4 py-3 dark:text-yellow-400 dark:bg-red-500 dark:hover:bg-slate-700 hover:bg-neutral-100 transition hover:text-black font-semibold cursor-pointer'
                            >
                                Logout
                            </div>
                        ) : (
                            <>
                                <Link
                                    to='/login'
                                    className='px-4 py-3  dark:text-yellow-400 dark:bg-red-500 dark:hover:bg-slate-700 hover:bg-neutral-100 hover:text-black transition font-semibold'
                                >
                                    Login
                                </Link>
                                <Link
                                    to='/signup'
                                    className='px-4 py-3  dark:text-yellow-400 dark:bg-red-500 dark:hover:bg-slate-700 hover:bg-neutral-100 hover:text-black transition font-semibold'
                                >
                                    Sign Up
                                </Link>
                            </>
                        )}
                    </div>
                </div>
            )}
        </div>
    )
}

export default Dropdown