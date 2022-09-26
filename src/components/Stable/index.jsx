import React from 'react'
import "../Stable/Stable.css";
import Marquee from "react-fast-marquee";

const Stable = () => {


    const StableData = [
        {
            id: 1,
            quantity: "1-1000",
            price: "2.00"
        },
        {
            id: 2,
            quantity: "1001-1500",
            price: "2.25"
        },
        {
            id: 3,
            quantity: "1501-2000",
            price: "2.50"
        },
        {
            id: 4,
            quantity: "2001-2500",
            price: "2.75"
        },
        {
            id: 5,
            quantity: "2501-3000",
            price: "3.00"
        },
        {
            id: 6,
            quantity: "3001-3500",
            price: "3.25"
        },
        {
            id: 7,
            quantity: "3501-4000",
            price: "3.50"
        },
        {
            id: 8,
            quantity: "4001-4500",
            price: "3.75"
        },
        {
            id: 9,
            quantity: "4501-5000",
            price: "4.00"
        },
        {
            id: 10,
            quantity: "5001-5500",
            price: "4.25"
        },
        {
            id: 11,
            quantity: "5501-6000",
            price: "4.50"
        },
        {
            id: 12,
            quantity: "6001-6500",
            price: "4.75"
        },
        {
            id: 13,
            quantity: "6501-7000",
            price: "5.00"
        },
        {
            id: 14,
            quantity: "7001-7500",
            price: "5.25"
        },
        {
            id: 15,
            quantity: "7501-8000",
            price: "5.50"
        },
        {
            id: 16,
            quantity: "8001-8500",
            price: "5.75"
        },
        {
            id: 17,
            quantity: "8501-9000",
            price: "6.00"
        },
        {
            id: 18,
            quantity: "9001-9500",
            price: "6.25"
        },
        {
            id: 19,
            quantity: "9501-10k",
            price: "minted for team use"
        }

    ]

    return (
        <>
            <section className="mt-36" id="stake">
                <div className="containers xpt-center"  data-aos="fade-up" data-aos-duration="2000">
                    <h1
                        className="font-bold xl:text-6xl md:text-5xl text-4xl  text-center"
                        data-aos="fade-up"
                        data-aos-duration="2000"
                    >
                        Mint Price
                    </h1>
                    
                    <div className="mx-auto w-10/12">
                        <Marquee speed="50">
                            {
                                StableData.map((element) => {
                                    return (
                                        <div className="grid grid-cols-1 gap-2 my-6 boxs">
                                            <div className="cardBg" key={element.id}>
                                                <p>{element.quantity}</p>
                                                <h4 className='fourthHeading'><span className='price'>{element.price}</span><span className='sol'> sol</span></h4>
                                            </div>
                                        </div>
                                    )
                                })
                            }
                        </Marquee>
                    </div>
                </div>                
            </section>
        </>
    )
}

export default Stable;