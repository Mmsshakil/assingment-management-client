import { Outlet } from "react-router-dom";
import Navbar from "../pages/shared/Navbar/Navbar";

const Root = () => {
    return (
        <div className="conatainer mx-auto max-w-7xl font-roboto">
            <Navbar></Navbar>
            <Outlet></Outlet>
            
        </div>
    );
};

export default Root;