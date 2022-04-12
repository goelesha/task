import { Outlet } from "react-router-dom";
import Header from "../Header/Header";
import Sidebar from "../sidebar/Sidebar";

const AppLayout = () => {
    return <div>
        <Header/>
        <Sidebar />
        <Outlet />
    </div>;
};

export default AppLayout;
