import { Link } from "react-router-dom";
import img from "../../../assets/logo.png";
import { ShoppingCart } from "lucide-react";

const Nav = () => {
  const navLink = (
    <>
      <li className="text-lg hover:bg-light-green hover:text-neutral rounded-lg">
        <Link to="/">Home</Link>
      </li>
      <li className="text-lg hover:bg-light-green hover:text-neutral rounded-lg">
        <Link to="/products">Products</Link>
      </li>
      <li className="text-lg hover:bg-light-green hover:text-neutral rounded-lg">
        <Link to="/about">About</Link>
      </li>
    </>
  );
  return (
    <section>
      <div className="navbar bg-[#f9fffd] text-[#82d577]">
        <div className="navbar-start">
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
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
            >
              <li>
                <a>Item 1</a>
              </li>
              <li>
                <a>Parent</a>
                <ul className="p-2">
                  <li>
                    <a>Submenu 1</a>
                  </li>
                  <li>
                    <a>Submenu 2</a>
                  </li>
                </ul>
              </li>
              <li>
                <a>Item 3</a>
              </li>
            </ul>
          </div>
          <Link to="/" className=" text-xl">
            <img src={img} alt="" />
          </Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">{navLink}</ul>
        </div>
        <div className="navbar-end flex gap-3">
          <ShoppingCart />
          <Link
            to="/login"
            className="btn btn-outline text-light-green hover:bg-light-green hover:border-transparent"
          >
            Login
          </Link>
          <Link
            to="/"
            className="btn text-neutral bg-light-green  font-bold hover:bg-transparent hover:text-light-green hover:border hover:border-light-green border-transparent"
          >
            Get Started
          </Link>
        </div>
      </div>
    </section>
  );
};
export default Nav;
