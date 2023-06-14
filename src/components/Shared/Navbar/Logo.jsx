import { Link } from "react-router-dom";
import logo from "../../../assets/logo.png";

const Logo = () => {
    return (
      <Link to="/"><img className="hidden md:block" src={logo} alt="logo" width="200"/></Link>
    );
};

export default Logo;