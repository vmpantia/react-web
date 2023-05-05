import { FaUsers, FaBuilding, FaMapPin, FaHome } from "react-icons/fa";
import { Link } from "react-router-dom";

const Sidebar  = () => {
    return (
        <div className="sidebar">
            <ul>
                <li>
                    <Link to="/">
                        <FaHome/> 
                        Home
                    </Link>
                </li>
                <li>
                    <Link to="/employee">
                        <FaUsers/> 
                        Employee
                    </Link>
                </li>
                <li>
                    <Link to="/department">
                        <FaBuilding/> 
                        Department
                    </Link>
                </li>
                <li>
                    <Link to="/">
                        <FaMapPin/> 
                        Position
                    </Link>
                </li>
            </ul>
        </div>
    );
}

export default Sidebar;