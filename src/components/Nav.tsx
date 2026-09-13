import { text } from "stream/consumers";


const Nav = () => {
  return (
    <div className="navbar bg-base-100 border-b border-gray-100 px-4 md:px-8 lg:px-16">

      {/* LEFT: Mobile Menu + Logo */}
      <div className="navbar-start">

        {/* Mobile Hamburger */}
        <div className="dropdown">
          <div
            tabIndex={0}
            role="button"
            className="btn btn-ghost lg:hidden"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </div>

          {/* Mobile Dropdown */}
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-50 mt-3 w-56 p-3 shadow-lg"
          >
            <li>
              <a className="text-pink-600 font-semibold">Home</a>
            </li>

            <li>
              <a>Technologies</a>
            </li>

            <li>
              <a>Projects</a>
            </li>

            <li>
              <a>About</a>
            </li>

            <li>
              <a>Contact</a>
            </li>

            <div className="divider my-1"></div>

            <li>
              <a>Sign In</a>
            </li>

            <li>
              <a className="bg-pink-600 text-white rounded-full justify-center mt-1">
                Sign Up
              </a>
            </li>
          </ul>
        </div>

        {/* Your Existing Logo */}
        <a href="/" className="ml-1">
          <img
            src={logo-text}
            alt="DevStack"
            className="w-32 md:w-36 lg:w-40"
          />
        </a>
      </div>


      {/* DESKTOP MENU */}
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal gap-2">
          <li>
            <a className="text-pink-600 font-semibold">Home</a>
          </li>

          <li>
            <a>Technologies</a>
          </li>

          <li>
            <a>Projects</a>
          </li>

          <li>
            <a>About</a>
          </li>

          <li>
            <a>Contact</a>
          </li>
        </ul>
      </div>


      {/* DESKTOP RIGHT */}
      <div className="navbar-end hidden lg:flex gap-5">
        <a className="cursor-pointer">Sign In</a>

        <button className="btn brand-button rounded-full border-none px-6 hover:opacity-90">
          Sign Up
        </button>
      </div>

    </div>
  );
};

export default Nav;