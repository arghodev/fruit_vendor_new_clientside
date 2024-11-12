import { Link, NavLink } from "react-router-dom";
import img from "../../../assets/logo.png";
import { AlignRight, ShoppingCart, X } from "lucide-react";
import { useState } from "react";

const Nav = () => {
  const [openMenu, setOpenMenu] = useState(false)

  const navLink = (
    <>
      <li className="text-base lg:text-lg hover:bg-light-green hover:text-neutral rounded-lg ">
        <NavLink className={({ isActive }) => (isActive ? "text-deep-green font-bold" : "")} to="/">Home</NavLink>
      </li>
      <li  className="text-base lg:text-lg hover:bg-light-green hover:text-neutral rounded-lg">
        <NavLink className={({ isActive }) => (isActive ? "text-deep-green font-bold" : "")} to="/products">Products</NavLink>
      </li>
      <li className="text-base lg:text-lg hover:bg-light-green hover:text-neutral rounded-lg">
        <NavLink className={({ isActive }) => (isActive ? "text-deep-green font-bold" : "")} to="/about">About</NavLink>
      </li>
    </>
  );
  function Logo() {
    return <Link to="/" className=" text-xl">
      <img className="" src={img} alt="" />
    </Link>;
  }

  return (
    <>
      <div className="navbar  h-24 fixed bg-[#f9fffd] text-light-green flex justify-between container">
        <div className="navbar-start">
          <div className=" w-28 lg:w-auto ">
          <Logo/>
          </div>
          
        </div>
        <div className="">
            <div tabIndex={0} role="button" className="btn btn-ghost md:hidden" onClick={() => {
              setOpenMenu(!openMenu)
            }}>
            <AlignRight />
            </div>
            
          </div>
        <div className="navbar-center hidden md:flex">
          <ul className="menu menu-horizontal px-1">{navLink}</ul>
        </div>
        <div className="navbar-end gap-3 hidden md:flex">
          <ShoppingCart />
          <Link
            to="/login"
            className="btn btn-sm lg:btn-md btn-outline text-light-green hover:bg-light-green hover:border-transparent "
          >
            Login
          </Link>
          <Link
            to="/"
            className="btn btn-sm lg:btn-md  bg-light-green  font-bold hover:bg-transparent hover:text-light-green hover:border hover:border-light-green border-transparent text-deep-green"
          >
            Get Started
          </Link>
        </div>
      </div>


      {/* mobile menu */}
      <div className= {`md:hidden fixed top-0 text-light-green w-full z-10 min-h-[400px] bg-white flex flex-col items-center justify-center gap-5 shadow-lg ${!openMenu && "hidden"}`} id="mobile-menu">
        <div role="button" onClick={() => setOpenMenu(!openMenu)} className="absolute top-3 right-3 cursor-pointer font-bold ">
        <X size={28} />
        </div>
        <Logo/>
        <ul className="flex flex-col justify-center items-center">
          {navLink}
        </ul>
        <div className="gap-3  md:hidden flex flex-col items-center w-full px-6">
          <ShoppingCart />
          <Link
            to="/login"
            className="btn  btn-outline text-light-green hover:bg-light-green hover:border-transparent w-full"
          >
            Login
          </Link>
          <Link
            to="/"
            className="btn   bg-light-green font-bold hover:bg-transparent hover:text-light-green hover:border hover:border-light-green border-transparent text-deep-green w-full"
          >
            Get Started
          </Link>
        </div>
      </div>
    </>
  );

  
};
export default Nav;
