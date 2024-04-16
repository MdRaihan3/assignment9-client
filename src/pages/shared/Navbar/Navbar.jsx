import { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../../../providers/AuthProvider";
import './Navbar.css'

const Navbar = () => {
    const { user, logOut } = useContext(AuthContext)

    const handleSignOut = () => {
        logOut()
            .then()
            .catch()
    }
    return (
        <div className="navbar bg-base-100 text-black font-bold">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </div>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                        <li><NavLink to='/'>Home</NavLink></li>
                        <li><NavLink to='/contact'>Contact Us</NavLink></li>
                        <li><NavLink to='/about'>About Us</NavLink></li>
                        {
                            user ?
                                <>
                                    <li><NavLink to='/register'>Update Profile</NavLink></li>
                                    <li><NavLink to='/userProfile'>User Profile</NavLink></li>
                                    <li><NavLink to='/agent'>Our Agents</NavLink></li>
                                </> :
                                <li><NavLink to='/login'>Login</NavLink></li>
                        }
                    </ul>
                </div>
                <a className="btn btn-ghost text-3xl font-bold gap-0">
                    <img className=" w-8 h-8" src="public/home-icon.png" alt="" />
                    <span className=" text-orange-500">R</span>Home</a>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    <li><NavLink to='/'>Home</NavLink></li>
                    <li><NavLink to='/contact'>Contact Us</NavLink></li>
                    <li><NavLink to='/about'>About Us</NavLink></li>
                    {
                        user && <>
                            <li><NavLink to='/userProfile'>User Profile</NavLink></li>
                            <li><NavLink to='/update'>Update Profile</NavLink></li>
                            <li><NavLink to='/agent'>Our Agents</NavLink></li>
                        </>
                    }


                </ul>
            </div>
            <div className="navbar-end">
                <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                    <div className=" w-14 rounded-full group/item hover:bg-slate-100 
                     hover:min-w-32 hover:h-20 hover:rounded-lg hover:pb-8 ">
                        {
                            user && <img src={user?.photoURL} />
                        }
                        <a className="group/edit invisible hover:bg-slate-200 group-hover/item:visible w-full pb-8">
                            <span className="group-hover/edit:text-gray-700 w-full p-4">{user?.displayName}</span>
                        </a>
                    </div>
                </label>
                <div className="ml-6">
                    {
                        user ?
                            <button onClick={handleSignOut} className="btn">LogOut</button> :
                            <Link to='/login'>
                                <button className="btn">Login</button>
                            </Link>
                    }
                </div>

            </div>
        </div>
    );
};

export default Navbar;