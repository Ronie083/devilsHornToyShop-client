import { Link } from "react-router-dom";
import logo from "../../../assets/logo.png"
import { useContext } from "react";
import { AuthContext } from "../../../provider/AuthProvider";

const NavBar = () => {

    const { user, logOut } = useContext(AuthContext);
    console.log(user)

    const handleLogOut = () => {
        logOut()
            .then(() => { })
            .catch(error => console.log(error))
    }

    return (
        <div className="container mx-auto navbar bg-base-100 h-20">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost btn-circle">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h7" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                        <li><Link to="/">Homepage</Link></li>
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
                        {user?.email ? (
                            <div className="flex items-center">
                                <div className="w-10 rounded-full mr-3">
                                    <img src={user.photoURL} alt="User Avatar" />
                                </div>
                                <span className="hover:text-gray-800">{user.displayName}</span>
                            </div>
                        ) : (
                            "Log-In"
                        )}
                    </label>
                    <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                        {user?.email ? (
                            <>
                                <li><Link className="text-sm" to="">My Toys</Link></li>
                                <li><Link className="text-sm" to="addtoy">Add a Toy</Link></li>
                                <li><Link className="text-sm" to="alltoys">All Toys</Link></li>
                                <li><button onClick={handleLogOut} className="text-sm">LogOut</button></li>
                            </>
                        ) : (
                            <li><Link className="text-sm" to="login">LogIn</Link></li>
                        )}
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default NavBar;