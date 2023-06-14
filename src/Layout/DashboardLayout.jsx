import { Helmet } from 'react-helmet-async';
import { Outlet } from 'react-router-dom'
import Sidebar from '../components/Dashboard/Sidebar';


const DashboardLayout = () => {
    return (
        <div className='relative min-h-screen md:flex'>
               <Helmet>
                <title>Sporty | Dashboard</title>
            </Helmet>
            <Sidebar />
            <div className='flex-1  md:ml-64'>
                <div className='p-5'>
                    <Outlet />
                </div>
            </div>
        </div>
    )
}

export default DashboardLayout;