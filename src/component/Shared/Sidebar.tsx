import { FaUsers, FaBuilding, FaMapPin } from "react-icons/fa";
import "./Sidebar.css";
import { Link } from "react-router-dom";

const Sidebar  = () => {
    return (
        <div className="sidebar">
            <ul>
                <li>
                    <Link to="/employee">
                        <FaUsers/> 
                        Employee
                    </Link>
                </li>
                <li>
                    <Link to="/">
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