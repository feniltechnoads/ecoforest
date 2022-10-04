import React, { useEffect } from "react";
import "../Home/index.css";
import { Link } from "react-router-dom";
import About from "../About/About";
import Roadmap from "../Roadmap/Roadmap";
import Team from "../Team/Team";
import SignUp from "../Sign-up/Sign-Up";
import Sliders from "../Slider";
// import GreetMessage from "../GreetMessage";

const Home = () => {

  useEffect(() => {
    window.scrollTo(0,0)
  }, [])

  return (
    <>
      <div className=" bg-home flex flrx-col justify-center items-center">
        <div className="relative top-0 flex flex-col justify-center items-center text-center gap-10">
          <div className="flex flex-col gap-5">
            <h4 className="font-bold xl:text-6xl md:text-5xl text-4xl ">
              <span className="welcome">Welcome to</span>
              <span className="pt-6 block ecoforest">Echo Forest</span>
            </h4>

            <p className="font-medium">
              A utility based NFT project powered by <br />
              the Solana Blockchain.
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
      {/* <GreetMessage /> */}
    </>
  );
};

export default Home;
