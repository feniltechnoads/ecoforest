import React from "react";
import "../Home/index.css";
import { Link } from "react-router-dom";
import About from "../About/About";
import Roadmap from "../Roadmap/Roadmap";
import Team from "../Team/Team";
import SignUp from "../Sign-up/Sign-Up";
import Sliders from "../Slider";

const Home = () => {
  return (
    <>
      <div className=" bg-home flex flrx-col justify-center items-center">
        <div className="relative top-0 flex flex-col justify-center items-center text-center gap-10">
          <div className="flex flex-col gap-5">
            <p className="font-bold xl:text-6xl md:text-5xl text-4xl ">
              <span className="">Welcome to</span>
              <span className="pt-6 block">Echo Forest</span>
            </p>

            <p className="font-medium">
              A utility based NFT project powered by <br />
              the Solana blockchain.
            </p>
          </div>
          <div className="flex justify-center flex-col items-center">
            <Link
              to="/mint"
              className="rounded-lg bg-black text-white p-5 cursor-pointer transition ease-in-out delay-150 hover:bg-white hover:text-black  hover:-translate-y-1 hover:scale-110 duration-700"
            >
              Upcoming Mint Information
            </Link>
            {/* <Typewriter
                options={{
                strings: ['Coming Soon...'],
                autoStart: true,
                loop: true,
                }}
            /> */}
          </div>
        </div>
      </div>
      <About />
      <Sliders />
      <Roadmap />
      <Team />
      <SignUp />
    </>
  );
};

export default Home;
