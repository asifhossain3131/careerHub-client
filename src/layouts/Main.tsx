import { Outlet } from "react-router-dom";
import Footer from "../components/Footer";
import Header from "../components/Header";

const Main = () => {
    return (
        <>
            <Header></Header>
            <div className="min-h-[calc(100vh-120px)] bg-gray-200">
         <Outlet></Outlet>
            </div>
            <Footer></Footer>
        </>
    );
};

export default Main;