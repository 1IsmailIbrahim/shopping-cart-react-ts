import { NavLink, Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { selectCartItems } from "../app/features/cart/cartSlice";
import ShoppingCartIcon from "./ShoppingCartIcon";

const Navbar = () => {
  const { cartItems } = useSelector(selectCartItems);

  return (
    <header className=" bg-indigo-800 text-white rounded-md shadow-lg mb-10">
      <div className="relative flex max-w-screen-xl flex-col overflow-hidden px-6 py-4 md:mx-auto md:flex-row md:items-center md:j">
        <Link
          to="/"
          className="flex items-center whitespace-nowrap text-2xl font-bold"
        >
          <div className="text-white flex items-start">
            <ShoppingCartIcon />
            Elimr
          </div>
        </Link>
        <input type="checkbox" className="peer hidden" id="navbar-open" />
        <label
          className="absolute top-5 right-7 cursor-pointer md:hidden"
          htmlFor="navbar-open"
        >
          <span className="sr-only">Toggle Navigation</span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6 text-white"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth="2"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </label>
        <nav
          aria-label="Header Navigation"
          className="peer-checked:max-h-56 flex max-h-0 w-full flex-col items-center justify-between overflow-hidden transition-all md:ml-24 md:max-h-full md:flex-row md:items-start"
        >
          <ul className="flex flex-col items-center space-y-4 md:ml-auto md:flex-row md:space-y-0">
            <NavLink
              to={"/"}
              className="text-white md:mr-7 hover:text-indigo-600 hover:bg-gray-200 px-2 py-1 rounded-md duration-300"
            >
              Pricing
            </NavLink>
            <NavLink
              to={"/"}
              className="text-white md:mr-7 hover:text-indigo-600 hover:bg-gray-200 px-2 py-1 rounded-md duration-300"
            >
              Features
            </NavLink>
            <NavLink
              to={"/cart"}
              className="text-white md:mr-7 hover:text-indigo-600 hover:bg-gray-200 px-2 py-1 rounded-md duration-300"
            >
              Cart({cartItems.length})
            </NavLink>
            <NavLink
              to={"/"}
              className="text-indigo-400 bg-gray-200 md:mr-12 rounded-md px-6 py-1 font-semibold transition-colors hover:bg-gray-200 hover:text-indigo-600"
            >
              Login
            </NavLink>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
