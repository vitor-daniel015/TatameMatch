import Footer from "./Footer";
import Navbar from "./Navbar";
import { Outlet } from "react-router-dom";

function Layout() {
    return (
        <div className="min-h-screen flex flex-col">
            <Navbar />
            <main className="grow">
                <Outlet />
            </main>
            <Footer />
        </div>

    );

}

export default Layout