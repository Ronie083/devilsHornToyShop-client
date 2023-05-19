import { Link } from "react-router-dom";
import logo from "../../../assets/logo.png"

const NavBar = () => {
    return (
        <div className="container mx-auto navbar bg-base-100 h-20">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost btn-circle">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h7" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                        <li><Link to="/">Homepage</Link></li>
                        <li><a>All Toys</a></li>
                        <li><Link to="/blogs">Blogs</Link></li>
                    </ul>
                </div>
            </div>
            <div className="navbar-center">
                <Link to="/" className="flex items-center font-bold text-2xl">
                    <img className="h-24 " src={logo} alt="" />
                    <span className="text-red-600">DEVILS</span> HORN</Link>
            </div>
            <div className="navbar-end">
                <div className="dropdown dropdown-end">
                    <label tabIndex={0} className="btn btn-ghost avatar">
                        Log-In
                        {/* <div className="w-10 rounded-full">
                            <img src="/images/stock/photo-1534528741775-53994a69daeb.jpg" />
                        </div> */}
                    </label>
                    <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                        <li>
                            <a className="justify-between">
                                My Toys
                            </a>
                        </li>
                        <li><a>Add a Toy</a></li>
                        <li><a>Logout</a></li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default NavBar;