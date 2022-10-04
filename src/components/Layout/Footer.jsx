import React, { useState } from "react";
import { Link } from "react-router-dom";
import Popup from "../Popup";
function Footer() {
  const [openModal, setOpenModal] = useState(false);

  return (
    <>
      {openModal && <Popup setOpenModal={setOpenModal} />}

      <div className="container mx-auto mt-32 items-center">
        <div className="border-[1px] border-black mb-14 container mx-auto" />
        <div className="flex flex-col md:flex-row justify-around md:items-baseline items-center gap-7">
          <div className="flex gap-20">
            <div className="flex flex-col gap-5">
              <Link
                to="/"
                rel="noopener noreferrer"
                className="transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110 duration-500 hover:border-black  hover:border-b-2 w-fit"
              >
                Home
              </Link>
              <Link
                to="/mint"
                rel="noopener noreferrer"
                className="transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110 duration-500 hover:border-black  hover:border-b-2 w-fit"
              >
                Upcoming Mint Information
              </Link>
              <Link
                to="/about"
                rel="noopener noreferrer"
                className="transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110 duration-500 hover:border-black  hover:border-b-2 w-fit"
              >
                About Us
              </Link>
              <Link
                to="/roadmap"
                rel="noopener noreferrer"
                className="transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110 duration-500 hover:border-black  hover:border-b-2 w-fit"
              >
                Roadmap
              </Link>
            </div>
            <div className="flex flex-col gap-5">
              <a
                href="https://blockchain.line.me/whitepaper/"
                target="_blank"
                rel="noopener noreferrer"
                className="transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110 duration-500 hover:border-black  hover:border-b-2 w-fit"
              >
                Whitepaper
              </a>
              <Link
                to="/ourteam"
                rel="noopener noreferrer"
                className="transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110 duration-500 hover:border-black  hover:border-b-2 w-fit"
              >
                Team
              </Link>
              <Link
                onClick={() => {
                  setOpenModal(true);
                }}
                rel="noopener noreferrer"
                data-bs-toggle="modal" data-bs-target="#exampleModal"
                className="transition ease-in delay-150  hover:-translate-y-1 hover:scale-110 duration-500 hover:border-black  hover:border-b-2 w-fit"
              >
                Contact Us
              </Link>
            </div>
          </div>
          <div className="space-y-4">
            <p className="text-lg font-bold ">Social Media</p>
            <div className="flex items-center space-x-4 text-xl">
              <a
                href="https://discord.com/"
                target="_blank"
                rel="noreferrer"
              >
                <i className="fa-brands fa-discord flex items-center justify-center rounded-full w-12 h-12  border-[2px] border-black hover:text-white text-black transition ease-in delay-150  hover:-translate-y-1 hover:scale-110 hover:bg-black duration-300 hover:shadow-lg"></i>
              </a>

              <a href="https://twitter.com/" target="_blank" rel="noreferrer">
                <i className="fa-brands fa-twitter flex items-center justify-center rounded-full border-[2px] w-12 h-12 border-black hover:text-white text-black transition ease-in delay-150 hover:-translate-y-1 hover:scale-110 hover:bg-black duration-300 hover:shadow-lg"></i>
              </a>

              <a
                href="https://www.instagram.com/"
                target="_blank"
                rel="noreferrer"
              >
                <i className="fa-brands fa-instagram flex items-center justify-center rounded-full border-[2px] w-12 h-12 border-black hover:text-white text-black transition ease-in delay-150 hover:-translate-y-1 hover:scale-110 hover:bg-black duration-300 hover:shadow-lg"></i>
              </a>
            </div>
          </div>
        </div>
        <p className="flex justify-center text-center p-12">
          &#169; {new Date().getFullYear()} Echo Forest. All rights reserved
        </p>
      </div>
    </>
  );
}

export default Footer;
