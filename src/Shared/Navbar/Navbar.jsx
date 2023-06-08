import React, { useContext } from 'react';
import logo from '../../../src/assets/logo.webp'
import { Link } from 'react-router-dom';
import { FaMoon } from "react-icons/fa";
import { AuthContext } from '../../Provider/AuthProvider';

const Navbar = () => {
  const { user, logOut } = useContext(AuthContext);

    const handleLogout = () => {
        logOut()
            .then()
            .error(error => console.log(error))
    }
    return (
        <>
            <div className="navbar bg-base-100">
  <div className="navbar-start">
    <div className="dropdown">
      <label tabIndex={0} className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </label>
      <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
      <li><Link to='/'><a>Home</a></Link></li>
      <li><Link to='/instructor'><a>Instructors</a></Link></li>
      <li><Link to='/classes'><a>Classes</a></Link></li>
      <li><Link to='/dashboard'><a>Dashboard</a></Link></li>
      <li><a><FaMoon></FaMoon></a></li>
      </ul>
    </div>
    <Link to='/'><img className='h-10' src={logo} alt="" /></Link>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1 font-semibold text-lg">
      <li><Link to='/'><a>Home</a></Link></li>
      <li><Link to='/instructor'><a>Instructors</a></Link></li>
      <li><Link to='/classes'><a>Classes</a></Link></li>
      <li><Link to='/dashboard'><a>Dashboard</a></Link></li>
      <li><a><FaMoon></FaMoon></a></li>
    </ul>
  </div>
  {/* <div className="navbar-end">
  <div className="w-10 mr-4">
          <img className='rounded-full' src="https://i.ibb.co/8YbGPy6/IMG-20230520-192642.jpg" />
        </div>
    <Link to='login'><a className="btn">Login</a></Link>
  </div> */}
  <div className="navbar-end">
                    {user && <p className='mr-8 '>
                        <div className="tooltip tooltip-bottom" 
                        data-tip={user.displayName ? 
                        user.displayName : 'user name unavailable'}>
                        <button className="btn"><img className='rounded-full h-2/4' src={user?.photoURL} alt="" /></button>
                    </div></p>}
                    {user ?
                        <a onClick={handleLogout} className="btn bg-[#F9A51A] text-black">Logout</a> :
                        <Link to="/login">
                            <a className="btn bg-[#F9A51A] text-black">Login</a>
                        </Link>
                    }

                </div>
</div>
        </>
    );
};

export default Navbar;