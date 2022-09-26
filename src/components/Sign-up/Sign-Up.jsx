import React from "react";
import AOS from "aos";

function SignUp() {
  AOS.init();

  return (
    <>
      <div className="container mx-auto pt-32 md:px-32 px-5 " id="sign-up">
        <div
          className=" rounded-2xl drop-shadow-2xl md:py-32 py-20 items-center bg-white"
          data-aos="fade-up"
          data-aos-duration="2000"
        >
          <div className="text-center space-y-5">
            <p className="font-bold xl:text-6xl md:text-5xl text-3xl ">
              Join Our Newsletter
            </p>
            <p>
              Sign Up today for free and be the first to <br />
              get notified on new updates.
            </p>
          </div>
          <div className="flex justify-center mt-10 space-x-3 md:flex-row flex-col items-center md:gap-0 gap-3">
            <div>
              <input
                type="text"
                className="border-2 rounded-lg border-black p-3 md:w-full w-48 outline-none "
                placeholder="Enter your email address"
              />
            </div>
            <a href="">
              <div className="bg-black py-3 px-5  text-white rounded-lg md:whitespace-normal  whitespace-nowrap cursor-pointer transition ease-in-out duration-1000 hover:-translate-y-1 hover:shadow-lg shadow-lg hover:bg-white hover:text-black ">
                Sign Up
              </div>
            </a>
          </div>
        </div>
      </div>
    </>
  );
}

export default SignUp;
