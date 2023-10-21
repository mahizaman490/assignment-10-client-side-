import { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../providers/AuthProvider";
import Swal from "sweetalert2";

const Navbar = () => {


  const { user, logOut } = useContext(AuthContext);
  const handleLogOut = () => {
    logOut()
      .then(() => Swal.fire("your logout is successfull!"))
      .catch(error => console.error(error))
  }
  
  const navLinks = <>
    <li ><NavLink to='/'>Home</NavLink></li>
    <li><NavLink to='/addproduct'>Add Product</NavLink></li>
    <li><NavLink to='/mycart'>My Cart</NavLink></li>
    <li><NavLink to='/login'>Login</NavLink></li>
  </>
  return (
    <div className="navbar bg-orange-200">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
          </label>
          <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
            {navLinks}
          </ul>
        </div>
        <img className="w-10" src="./images/logo.png" alt="" />
        <a className="btn btn-ghost normal-case text-orange-600 text-xl">Electronics</a>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          {navLinks}
        </ul>
      </div>
      <div className="navbar-end">
        {
          user ? <>
            <div className="avatar online ">
              <div className="w-8 rounded-full">
                <img src={user.photoURL
                } />
              </div>
            </div>
            <span> <small>{user.displayName
            }</small></span>

            <a onClick={handleLogOut} className="btn btn-sm bg-orange-400">Logout</a>
          </>
            : <Link to='/login'>
              <button className="btn btn-sm hidden">Login</button>
            </Link>
        }
      </div>
    </div>
  );
};

export default Navbar;