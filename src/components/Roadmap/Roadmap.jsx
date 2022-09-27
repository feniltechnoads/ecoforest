import React, { useEffect } from "react";
import lamp from "../../image/1.svg";
import lamp_snall from "../../image/Group 102.svg";
import rocket_small from "../../image/rocket_small.svg";
import chart_small from "../../image/chart_small.svg";
import watch_small from "../../image/watch_small.svg";
import dollar_small from "../../image/dollar_small.svg";
import plane from "../../image/2.svg";
import market from "../../image/3.svg";
import watch from "../../image/4.svg";
import dollar from "../../image/5.svg";
import card1 from "../../image/card1.svg";
import card2 from "../../image/card2.svg";
import card3 from "../../image/card3.svg";
import card4 from "../../image/card4.svg";
import card5 from "../../image/card5.svg";
import card_small1 from "../../image/card_small1.svg";
import card_small2 from "../../image/card_small2.svg";
import card_small3 from "../../image/card_small3.svg";
import card_small4 from "../../image/card_small4.svg";
import card_small5 from "../../image/card_small5.svg";
import AOS from "aos";
function Roadmap() {
  AOS.init();
  useEffect(() => {
    window.scrollTo(0,0)
  }, [])
  const roadmap = [
    { id: 0, imgcard: card1, img: lamp, discribe: "2022", top: true },
    { id: 1, imgcard: card2, img: plane, discribe: "2023", top: false },
    { id: 2, imgcard: card3, img: market, discribe: "2028", top: true },
    { id: 3, imgcard: card4, img: watch, discribe: "2038", top: false },
    { id: 4, imgcard: card5, img: dollar, discribe: "3000", top: true },
  ];
  const roadmapsmall = [
    { id: 0, imgcard: card_small1, discribe: "2022", img: lamp_snall },
    { id: 1, imgcard: card_small2, discribe: "2023", img: rocket_small },
    { id: 2, imgcard: card_small3, discribe: "2028", img: chart_small },
    { id: 3, imgcard: card_small4, discribe: "2038", img: watch_small },
    { id: 4, imgcard: card_small5, discribe: "3000", img: dollar_small },
  ]
  return (
    <div className=" pt-36 mx-auto container " id="roadmap">
      <h3
        className="font-bold xl:text-6xl md:text-5xl text-4xl  text-center"
        data-aos="fade-up" 
        data-aos-duration="2000"
      >
        Roadmap
      </h3>

      <div
        className="mt-20 lg:grid grid-cols-5 relative hidden place-content-center place-items-center p-5 z-60"
        data-aos="fade-up"
        data-aos-duration="2000"
      >
        <div className="absolute  border-8 border-[#E6E6E6] w-2/3 z-[-1]" />
        {roadmap.map((items, key) =>
          items.top ? (
            <>
              <div
                className="flex flex-col justify-center items-center"
                key={key}
              >
                <div className="">
                  <img src={items.imgcard} alt="" />
                </div>
                <div className="rounded-2xl border-2 border-[#B3E1A7] text-center py-2 2xl:px-28 xl:px-16 lg:px-10 bg-white ">
                  {items.discribe}
                </div>
                <div className="items-center ">
                  <img src={items.img} alt="" />
                </div>
              </div>
            </>
          ) : (
            <>
              <div
                className="flex flex-col justify-center items-center "
                key={key}
              >
                <div className="">
                  <img src={items.img} alt="" />
                </div>
                <div className="rounded-2xl border-2 border-[#B3E1A7] text-center py-2 2xl:px-28 xl:px-16 lg:px-10 bg-white">
                  {items.discribe}
                </div>
                <div className="items-center ">
                  <img src={items.imgcard} alt="" />
                </div>
              </div>
            </>
          )
        )}
      </div>
      <div
        className="lg:hidden  flex flex-col justify-center items-center pt-20  gap-10"
        data-aos="fade-up"
        data-aos-duration="2000"
      >
        {roadmapsmall.map((items, key) => (
          <div
            className="flex relative gap-4 justify-center items-end"
            key={key}
          >
            <div className="absolute border-8 border-[#E6E6E6] w-full z-[-1] rotate-90 bottom-16" style={{right: "136px"}} />
            <img src={items.img} alt="" className="mb-12" />
            <div>
              <div className="rounded-2xl border-2 border-[#B3E1A7] text-center py-2 px-10 bg-white mb-3">
                {items.discribe}
              </div>
              <img src={items.imgcard} alt="" />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Roadmap;
