import { Link, NavLink } from "react-router-dom";
import logo from "../../assets/logo.png";

const NavBar = () => {
  const links = (
    <>
      <li>
        <NavLink to="/">Home</NavLink>
      </li>
      <li>
        <NavLink to="/education">My-Education</NavLink>
      </li>
      <li>
        <NavLink to="/contact">Contact</NavLink>
      </li>
      <li>
        <NavLink to="/aboutMe">About-Me</NavLink>
      </li>
    </>
  );
  return (
    <div className="navbar fixed z-30 border-b-2 bg-[#f5f5f5] bg-opacity-75">
      <div className="navbar-start ">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-gray-200  rounded-box z-[1] mt-3 w-52 p-2 shadow"
          >
            {links}
          </ul>
        </div>
        <div className="btn bg-[#e4e4e4]">
          <img className="w-20" src={logo} alt="" />
        </div>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1 text-xl ">{links}</ul>
      </div>
      <div className="navbar-end">
        <a href="https://drive.google.com/uc?export=download&id=1KdBb38A4nbH6cIGRUOdo_Gp1UErX8j7e">
          <button className="btn btn-outline border-0 border-l-2 border-b-8 border-r-4 border-t-2 md:w-48">
            Download Resume
          </button>
        </a>
      </div>
    </div>
  );
};

export default NavBar;
