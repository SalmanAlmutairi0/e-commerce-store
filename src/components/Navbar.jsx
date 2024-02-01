import React from "react";
import Logo from "../assets/icons/Logo.png";
import Home from "../assets/icons/Home-icon.png";
import cartIcon from "../assets/icons/cart-icon.png";
import logout from "../assets/icons/logout-icon.png";
import { Link } from "react-router-dom";
export default function Navbar({ cart }) {

  return (
    <div className="fixed top-4 left-3 h-screen ">
      <nav className=" flex h-[95%] w-fit flex-col items-center justify-between rounded-xl bg-white p-2 shadow-xl">
        <div className="flex flex-col items-center gap-10 rounded-md">
          <Link to="/">
            <div className="logo">
              <img src={Logo} alt="Logo" />
            </div>
          </Link>

          <ul className="flex flex-col items-center justify-center gap-10">
            <Link to="/">
              <li className="rounded-lg p-2 hover:bg-slate-300">
                <img className="w-7" src={Home} alt="Home" />
              </li>
            </Link>

            <Link to="/cart">
              <li className="rounded-lg p-2 hover:bg-slate-300">
                <div className="relative">
                  <img className="w-7" src={cartIcon} alt="Cart" />

                  {cart.length !== 0 && (
                    <p className="absolute -right-1 -top-2 flex h-4 w-4 items-center justify-center rounded-full bg-red-600 text-xs text-white">
                      {cart.length}
                    </p>
                  )}

                </div>
              </li>
              
            </Link>

          </ul>
        </div>

        <button className="rounded-lg bg-red-600 p-2 hover:bg-red-800">
          <img src={logout} alt=" Logout " />
        </button>
      </nav>
    </div>
  );
}
