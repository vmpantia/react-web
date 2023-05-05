import { Outlet } from "react-router-dom";
import Sidebar from "../component/Shared/Sidebar";

const Layout = () => {
    return (
        <div>
            <section className='main-header'>
            </section>
            <section className='main-content'>
                <Sidebar />
                <Outlet />
            </section>
        </div>
    );
}

export default Layout;