import { Outlet } from "react-router-dom";
import Footer from "../components/Shared/Footer/Footer";
import Navbar from "../components/Shared/Navbar/Navbar";


const Main = () => {
    return (
        <div className="dark:bg-slate-700">
            <Navbar></Navbar>
            <Outlet></Outlet>
            <Footer></Footer> 
        </div>
    );
};

export default Main;