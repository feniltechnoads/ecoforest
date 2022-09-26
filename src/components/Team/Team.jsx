import React from "react";
import Brooks from "../../image/Brooks.png";
import Matt from "../../image/Matt.png";
import Kamila from "../../image/Kamila.png";
import Mohttaj from "../../image/Mohttaj.png";
import Anandi from "../../image/Anandi.png";
import Drewselstinian from "../../image/Drewselstinian.png";
import AOS from "aos";

function Team() {
  AOS.init();

  const team = [  
    {
      id: 0,
      img: Brooks,
      name: "Brooks Clifford",
      description: "Founder & CEO",
      icon1: "fa-brands fa-linkedin-in",
      link1: "https://www.linkedin.com/in/brooks-clifford-672879b/",
      icon2: "fa-brands fa-twitter",
      link2: "https://twitter.com/BrooksClifford",
      icon3: "fa-brands fa-instagram",
      link3: "https://www.instagram.com/pawskeeee/?igshid=YmMyMTA2M2Y",
    },
    {
      id: 1,
      img: Matt,
      name: "Matt Benesch",
      description: "Co-Founder, Creative Director",
      icon1: "fa-brands fa-linkedin-in",
      link1: "https://www.linkedin.com/in/matthew-benesch/",
      icon2: "fa-brands fa-twitter",
      link2: "",
      icon3: "fa-brands fa-instagram",
      link3: "",
    },
    {
      id: 2,
      img: Kamila,
      name: "Kamilla",
      description: "Artist",
      icon1: "fa-solid fa-globe",
      link1: "https://www.milirien.com/",
      icon2: "fa-brands fa-instagram",
      link2: "https://www.instagram.com/milirien/",
      icon3: "fa-brands fa-tiktok",
      link3: "https://www.tiktok.com/@milirien",
    },
    {
      id: 3,
      img: Mohttaj,
      name: "Mohtajj",
      description: "Web 3",
      icon1: "fa-brands fa-linkedin-in",
      link1: "https://www.linkedin.com/in/moh-tajj-0110b7232/",
      icon2: "fa-brands fa-twitter",
      link2: "https://twitter.com/Mohtajj95",
    },
    {
      id: 4,
      img: Anandi,
      name: "Anandi",
      description: "Web 3",
      icon1: "fa-brands fa-linkedin-in",
      link1: "https://www.linkedin.com/in/anandi-sheladiya-200893101/",
      icon2: "fa-brands fa-twitter",
      link2: "https://twitter.com/Anandi_007",
    },
    {
      id: 5,
      img: Drewselstinian,
      name: "Drewselstinian",
      description: "Back End Developer",
      icon1: "fa-solid fa-globe",
      icon2: "fa-brands fa-instagram",
      icon3: "fa-brands fa-tiktok",
    },
  ];

  return (
    <>
      <div className="pt-32 mx-auto container" id="team">
        <p
          className="font-bold xl:text-6xl md:text-5xl text-4xl  text-center"
          data-aos="fade-up"
          data-aos-duration="2000"
        >
          The <span className="text-[#9DC693]">Guardians</span> of <br /> the
          Forest
        </p>
        <div className=" gap-10  md:p-5 p-0 flex flex-wrap justify-center ">
          {team.map((items, key) => (
            <div
              className="w-full max-w-sm bg-[#E1F2DD] hover:bg-[#E1F2DD] hover:bg-opacity-50 rounded-lg  shadow-l  mt-16   hover:-translate-y-1 hover:scale-110   duration-700 hover:shadow-2xl"
              key={key}
            >
              <div
                className="flex flex-col items-center pb-10 py-7 transition ease-in-out delay-150  "
                data-aos="fade-up"
                data-aos-duration="3000"
              >
                <img
                  className="mb-3 w-48 h-48 rounded-full shadow-lg"
                  src={items.img}
                  alt="Bonnie image"
                />
                <h5 className="mb-1 text-xl font-bold ">{items.name}</h5>
                <span className="text-sm ">{items.description}</span>
                <div className="flex mt-4 space-x-3 md:mt-6 ">
                  {items.icon1 && <div className="rounded-full">
                    <a href={items.link1} target="_blank" rel="noreferrer">
                      {items.icon1 && <i className={`${items.icon1} rounded-full border-[1px] p-2 border-black hover:text-white text-black transition ease-in delay-150  hover:-translate-y-1 hover:scale-110 hover:bg-black duration-300  hover:shadow-lg`}></i>}
                    </a>
                  </div>}

                  {items.icon2 && <div className=" rounded-full">
                    <a href={items.link2} target="_blank" rel="noreferrer">
                      {items.icon2 && <i className={`${items.icon2} rounded-full border-[1px] p-2 border-black hover:text-white text-black transition ease-in delay-150  hover:-translate-y-1 hover:scale-110 hover:bg-black duration-300  hover:shadow-lg`}></i>}
                    </a>
                  </div>}
                  {items.icon3 && <div className=" rounded-full">
                    <a href={items.link3} target="_blank" rel="noreferrer">
                      {items.icon3 && <i className={`${items.icon3} rounded-full border-[1px] p-2 border-black hover:text-white text-black transition ease-in delay-150  hover:-translate-y-1 hover:scale-110 hover:bg-black duration-300  hover:shadow-lg`}></i>}
                    </a>
                  </div>}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default Team;

