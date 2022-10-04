import React from "react";
import AOS from "aos";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function SignUp() {
  AOS.init();

  const handleOnSignUp = (e) => {
    e.preventDefault();

    let emailcheck = document.getElementById("emailcheck").value;
    let pattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (pattern.test(emailcheck)) {
      document.getElementById("errormMessage").innerHTML =
        "";
      toast.success("Thank you, You are join Our Newsletter", {
        position: "top-right",
        autoClose: 4000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    } else {
      let errormMessage = document.getElementById("errormMessage");
      errormMessage.innerHTML = "Invalid Email ID";
      errormMessage.style.color = "red";
    }
  };

  return (
    <>
      <div className="container mx-auto pt-32 md:px-32 px-5 " id="sign-up">
        <div
          className=" rounded-2xl drop-shadow-2xl md:py-32 py-20 items-center bg-white"
          data-aos="fade-up"
          data-aos-duration="2000"
        >
          <div className="text-center space-y-5">
            <h5 className="font-bold xl:text-5xl md:text-4xl text-2xl ">
              Join Our Newsletter
            </h5>
            <p>
              Sign Up today for free and be the first to <br />
              get notified on new updates.
            </p>
          </div>
          <form action="" onSubmit={handleOnSignUp}>
            <div className="flex justify-center mt-10 space-x-3 md:flex-row flex-col items-top md:gap-0 gap-3">
              <div>
                <input
                  type="email"
                  className="border-2 rounded-lg border-black p-3 md:w-full w-48 outline-none "
                  placeholder="abc@gmail.com"
                  id="emailcheck"
                />
                <span className="block" id="errormMessage"></span>
              </div>
              <div>
                <button className="bg-black py-3 px-5  text-white rounded-lg md:whitespace-normal border-2 whitespace-nowrap cursor-pointer transition ease-in-out duration-1000 hover:-translate-y-1 hover:shadow-lg shadow-lg hover:bg-white hover:text-black">
                  Sign Up
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
      <ToastContainer />
    </>
  );
}

export default SignUp;
