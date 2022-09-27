import React, { useEffect } from "react";
import udti_titali from "../../image/udti-titali.svg";
import AOS from "aos";

function About() {
  AOS.init();
  useEffect(() => {
    window.scrollTo(0,0)
  }, [])

  return (
    <>
        <div
          className="container mx-auto grid lg:grid-cols-2 grid-cols-1 gap-20 pt-52"
          data-aos="fade-up"
          data-aos-duration="2000"
          id="about"
        >
          <div className="flex lg:justify-end justify-center transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110  duration-1000">
            <img
              src={udti_titali}
              alt=""
              className="xl:w-3/4 lg:w-5/6 w-2/4  "
            />
          </div>

          <div className="flex flex-col md:text-justify lg:text-start  items-center lg:items-start md:p-0 p-5">
            <p className="font-bold xl:text-6xl md:text-5xl text-4xl ">
              What is Echo <br />
              Forest NFTs?
            </p>
            <p className="mt-7 max-w-md ">
              We’ve created 10,000 unique NFTs, each representing a character in the fantasy world called the Echoverse. Every NFT in our collection is a combination of 1 of 10 different forest animals, with an assigned class or profession and is equipped with anywhere from 2-4 items that vary in rarity from common to unique.
            </p>
            <p className="mt-7 max-w-md text-justify">
              The utility of the Echo Forest NFT comes in two forms; earning EXP tokens and voting in the Echo Forest DAO.
            </p>
          </div>
        </div>
    </>
  );
}

export default About;
