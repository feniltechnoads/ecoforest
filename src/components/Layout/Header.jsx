import React from "react";
import { useState } from "react";
import "../Layout/Header.css";
import { Link } from "react-router-dom";

function Header() {
  const [active, setactive] = useState(1);
  const [toggle, settoggle] = useState(false);

  return (
    <>
      <nav>
        {/* ===============Desktop size============== */}
        <header className="fixed left-0 right-0 z-50 md:flex md:p-5 md:justify-around justify-center items-center container mx-auto">
          <div className=" gap-10 cursor-pointer  justify-end md:flex hidden">
            <div
              className={`transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110 duration-800  ${
                active === 1 ? "border-b-2 border-black  " : "deActive"
              }`}
              onClick={() => {
                setactive(1);
              }}
            >
              <Link to="/">Home</Link>
            </div>
            <div
              className={`transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110 duration-700 ${
                active === 2 ? "border-b-2 border-black" : "deActive"
              }`}
              onClick={() => {
                setactive(2);
              }}
            >
              <Link to="/about">About</Link>
            </div>
            <div
              className={`transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110 duration-700 ${
                active === 4 ? "border-b-2 border-black" : "deActive"
              }`}
              onClick={() => {
                setactive(4);
              }}
            >
              <Link to="/roadmap">Roadmap</Link>
            </div>
            <div
              className={`transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110 duration-700 ${
                active === 5 ? "border-b-2 border-black" : "deActive"
              }`}
              onClick={() => {
                setactive(5);
              }}
            >
              <Link to="/ourteam">Our Team</Link>
            </div>
          </div>
          <div className="lg:absolute  lg:right-40 md:flex hidden">
            <h1 className=" rounded-lg py-2 px-4 bg-black text-white whitespace-nowrap  transition ease-in-out delay-150  hover:-translate-y-1 duration-1000 hover:shadow-lg shadow-lg hover:bg-white hover:text-black">
              <Link to="/signup">Connect Wallet</Link>
            </h1>
          </div>
        </header>
        {/* ===============Mobile size============== */}

        <div className="fixed md:hidden p-5 ">
          <i
            className={`${
              toggle ? "hidden" : "block fa-solid fa-bars text-3xl"
            }`}
            onClick={() => settoggle(!toggle)}
          ></i>
          {toggle && (
            <i
              className="fa-solid fa-xmark text-3xl fixed top-0 z-50 mt-5"
              onClick={() => settoggle(!toggle)}
            ></i>
          )}
        </div>

        {toggle && (
          <>
            <div className="flex flex-col items-center justify-center md:hidden gap-5 bg-white z-10 h-[100vh] top-0">
              {" "}
              <div
                className={`transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110 duration-700  ${
                  active === 1 ? "border-b-2 border-black  " : "deActive"
                }`}
                onClick={() => {
                  setactive(1);
                  settoggle(false);
                }}
              >
                <Link to="/">Home</Link>
              </div>
              <div
                className={`transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110 duration-700 ${
                  active === 2 ? "border-b-2 border-black" : "deActive"
                }`}
                onClick={() => {
                  setactive(2);
                  settoggle(false);
                }}
              >
                <Link to="/about">About</Link>
              </div>
              <div
                className={`transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110 duration-700 ${
                  active === 4 ? "border-b-2 border-black" : "deActive"
                }`}
                onClick={() => {
                  setactive(4);
                  settoggle(false);
                }}
              >
                <Link to="/roadmap">Roadmap</Link>
              </div>
              <div
                className={`transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-700 ${
                  active === 5 ? "border-b-2 border-black" : "deActive"
                }`}
                onClick={() => {
                  setactive(5);
                  settoggle(false);
                }}
              >
                <Link to="/ourteam">Our Team</Link>
              </div>
              <h1 className=" rounded-lg py-2 px-4 bg-black text-white whitespace-nowrap transition ease-in-out delay-150 hover:-translate-y-1 duration-1000 hover:shadow-lg shadow-lg hover:bg-white hover:text-black">
                <Link to="/signup">Connect Wallet</Link>
              </h1>
            </div>
          </>
        )}
      </nav>
    </>
  );
}

export default Header;
