import React, { useEffect } from "react";
import Thankyou from "../../image/thankyou.png";
import "../GreetMessage/index.css";

const GreetMessage = ({ setThankyou }) => {
useEffect(() => {
  window.scrollTo(0,0)
}, [])

  return (
    <>
          {/* <div className="greet-message relative -mt-[500px]"> */}
          
      <div className="flex justify-center items-center">
        {/* <div className="container w-screen"> */}
          <div className="greet-message top-40 relative z-50">

            <div className="px-12 py-11 w-8/12 rounded-2xl bg-white">
              <div className="msg">
                <p className="text-end pb-2">
                  <i
                    className="fa-solid fa-xmark text-3xl cursor-pointer text-[#aaaaaa] hover:text-[#000000] transition ease-in-out delay-150 duration-1000"
                    onClick={() => {
                        setThankyou(false);
                    }}
                  ></i>
                </p>
                <div className="img flex justify-center">
                  <img src={Thankyou} alt="" />
                </div>
              </div>
              <div className="text-center thanksContent space-y-5">
                <h3 className="text-5xl font-bold thanks">Thank you</h3>
                <p className="text-2xl">
                  We received your message and we will try to contact you as soon as
                  possible.
                </p>
                <button
                  className="bg-[#000000] hover:bg-white border-2 border-black text-white hover:text-black font-bold py-3 px-8 text-xl rounded transition ease-in-out delay-150 duration-1000"
                  onClick={() => {
                    setThankyou(false);
                  }}
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        {/* </div>
         */}
        
      </div>
    </>
  );
};

export default GreetMessage;