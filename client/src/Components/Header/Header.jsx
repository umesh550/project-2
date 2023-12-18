import React from "react";
import { Link, NavLink } from "react-router-dom";
import logo from "../../static/logo.png";
import LoginForm from "../LoginForm/LoginForm";

export default function Header() {
  return (
    <header className="shadow sticky z-50 top-0">
      <nav className="bg-white border-gray-200 px-4 lg:px-6 py-2.5">
        <Link to="/" className="flex items-center">
          <img src={logo} className="h-40 mx-auto" alt="Logo" />
        </Link>

        <div className="flex flex-wrap mx-auto w-full">
          <div className="flex justify-between items-center w-full">
            <ul className="flex mt-4 font-medium flex-row lg:space-x-8 lg:mt-0">
              <li>
                <NavLink
                  to="/"
                  className={({ isActive }) =>
                    `block py-2 pr-4 pl-3 duration-200 ${
                      isActive ? "text-orange-700" : "text-gray-700"
                    } border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0`
                  }
                >
                  Home
                </NavLink>
              </li>

              <li>
                <NavLink
                  to="/contact"
                  className={({ isActive }) =>
                    `block py-2 pr-4 pl-3 duration-200 ${
                      isActive ? "text-orange-700" : "text-gray-700"
                    } border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0`
                  }
                >
                  Contact
                </NavLink>
              </li>

              <li className="my-auto">
                {" "}
                <a
                  target="_blank"
                  href="https://maps.app.goo.gl/1kiyZvMoPynv2GFV8"
                  rel="noreferrer"
                >
                  Map
                </a>
              </li>
            </ul>
            <div className="flex items-center lg:order-2">
              {/* <Link
                to="#"
                className="text-white bg-orange-700 hover:bg-orange-800 focus:ring-4 focus:ring-orange-300 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2 focus:outline-none mt-4"
              >
                Log in
              </Link> */}
              <LoginForm />
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
}
