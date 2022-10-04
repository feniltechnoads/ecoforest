import React, { useState } from "react";
import "../Popup/index.css";
import GreetMessage from "../GreetMessage";

const Popup = ({ setOpenModal }) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [thankyou, setThankyou] = useState(false);

  const handleOnSubmit = (e) => {
    e.preventDefault();

    // fetch("http://192.168.29.51:5000/create", {
    //   method: "POST",
    //   body: {
    //     name: name,
    //     email: email,
    //     message: message,
    //   },
    // })
    //   .then((res) => res.json(name, message, email))
    //   .then((req) => console.log(req));
  };


  return (
    <>
      {thankyou && <GreetMessage setThankyou={setThankyou} />}
      <div className="modalBackground fixed top-7 z-0 ">

        <div className="container mx-auto contents my-20">
          {/* <div className="popup"> */}
          <div className="popup w-1/2 rounded-3xl example">
            <div className="grid grid-cols-1 xl:grid-cols-2  ">
              {/* <div className="flex flex-wrap flex-col"> */}
              <div className="leftBox flex flex-col bg-[#e7f5e4] justify-between py-7 px-7 md:px-15 ">
                <div className="intro">
                  <h2 className="text-3xl md:text-4xl font-bold tracking-wide pb-4">
                    We’d love to hear from you
                  </h2>
                  <p className="text-base tracking-wide font-medium pb-3">
                    Please feel free to email us if you have specific
                    requirements, or even if you just want a chat! You can also
                    contact us through any od the social media below.
                  </p>
                </div>
                <div className="social block">
                  <h5 className="text-2xl pb-5">Social Media</h5>
                  <div className="flex flex-wrap space-x-3">
                    <a
                      href="https://discord.com/"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <span>
                        <i className="fa-brands fa-discord social-discord flex items-center justify-center rounded-full border-[2px] w-10 h-10 border-black hover:text-white text-black transition ease-in delay-150  hover:-translate-y-1 hover:scale-110 hover:bg-black duration-300 hover:shadow-lg"></i>
                      </span>
                    </a>
                    <a
                      href="https://twitter.com/"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <i className="fa-brands fa-twitter social-twitter flex items-center justify-center rounded-full border-[2px] w-10 h-10 border-black hover:text-white text-black transition ease-in delay-150  hover:-translate-y-1 hover:scale-110 hover:bg-black duration-300 hover:shadow-lg"></i>
                    </a>
                    <a
                      href="https://www.instagram.com/"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <i className="fa-brands fa-instagram social-insta flex items-center justify-center rounded-full border-[2px] w-10 h-10 border-black hover:text-white text-black transition ease-in delay-150 hover:-translate-y-1 hover:scale-110 hover:bg-black duration-300 hover:shadow-lg"></i>
                    </a>
                  </div>
                </div>
              </div>
              <div className="py-7 px-7 md:px-15 bg-white">
                <p className="text-end pb-2">
                  <i
                    className="fa-solid fa-xmark text-3xl cursor-pointer text-[#aaaaaa] hover:text-[#000000] transition ease-in-out delay-150 duration-1000"
                    onClick={() => {
                      setOpenModal(false);
                    }}
                  ></i>
                </p>
                <h2 className="text-3xl md:text-4xl font-bold tracking-wide pb-4">
                  Get in touch
                </h2>
                <p className="text-xl pb-3">
                  We are here for you. How can we help?
                </p>
                <form onClick={handleOnSubmit}>
                  <label className="block">
                    <input
                      type="text"
                      onChange={(e) => setName(e.target.value)}
                      value={name}
                      name="name"
                      autoComplete="off"
                      className="p-3 bg-white border shadow-sm border-slate-800 placeholder-slate-700 focus:outline-none focus:border-slate-800 focus:ring-slate-700 block w-full rounded-md sm:text-md focus:ring-1"
                      placeholder="Enter your name"
                    />
                  </label>
                  <label className="block">
                    <input
                      type="email"
                      name="email"
                      onChange={(e) => setEmail(e.target.value)}
                      value={email}
                      autoComplete="off"
                      className="p-3 mt-4 bg-white border shadow-sm border-slate-800 placeholder-slate-700 focus:outline-none focus:border-slate-800 focus:ring-slate-700 block w-full rounded-md sm:text-md focus:ring-1"
                      placeholder="Enter your email address"
                    />
                  </label>
                  <label className="block">
                    <textarea
                      name="message"
                      id="message"
                      cols="30"
                      rows="8"
                      onChange={(e) => setMessage(e.target.value)}
                      value={message}
                      className="p-3 mt-4 bg-white border shadow-sm border-slate-800 placeholder-slate-700 focus:outline-none focus:border-slate-800 focus:ring-slate-700 block w-full rounded-md sm:text-md focus:ring-1"
                      placeholder="Enter your message"
                    />
                  </label>
                  <label className="block text-center mt-5">
                    <button
                      className="bg-[#000000] hover:bg-white border-2 border-black text-white hover:text-black font-bold py-3 px-8 text-xl rounded transition ease-in-out delay-150 duration-1000"
                      onClick={() => {
                        setThankyou(true)
                      }}
                      // onClick={() => { handleOnSubmitForm, setThankyou(true) }}
                    >
                      Submit
                    </button>
                  </label>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Popup;
