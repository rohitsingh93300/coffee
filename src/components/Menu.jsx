import React from "react";
import Img1 from '../assets/coffee-white.png'
import Img2 from '../assets/coffee2.png';
import { Button } from "./ui/button";
import { motion } from "framer-motion";
const ServicesData = [
  {
    id: 1,
    img: Img2,
    name: "Espresso",
    description:
      "Lorem ipsum dolor sit amet ipsum dolor sit ametipsum dolor sit amet ipsum dolor sit amet.",
    // aosDelay: "100",
  },
  {
    id: 2,
    img: Img1,
    name: "Americano",
    description:
      "Lorem ipsum dolor sit amet ipsum dolor sit ametipsum dolor sit amet ipsum dolor sit amet",
    // aosDelay: "300",
  },
  {
    id: 3,
    img: Img2,
    name: "Cappuccino",
    description:
      "Lorem ipsum dolor sit amet ipsum dolor sit ametipsum dolor sit amet ipsum dolor sit amet",
    // aosDelay: "500",
  },
];
const Menu = () => {
  return (
    <>
      <span id="menu"></span>
      <div className="py-20">
        <div className="max-w-7xl mx-auto">
          {/* Heading section  */}
          <div className="text-center mb-20">
            <motion.h1 
             initial={{opacity:0, y:100}}
             whileInView={{opacity:1, y:0}}
             transition={{duration:1.5, delay:0.5}}
            className="text-4xl font-bold font-cursive text-amber-900">
              Best Coffee For You
            </motion.h1>
          </div>

          {/* Services Card section  */}
          <motion.div 
           initial={{opacity:0, y:100}}
           whileInView={{opacity:1, y:0}}
           transition={{duration:1.5, delay:0.5}}
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-14 md:gap-5 place-items-center">
            {ServicesData.map((service) => (
              <div
                className="rounded-2xl bg-white hover:bg-amber-900 transition-all hover:text-white relative shadow-xl duration-high group max-w-[300px]"
              >
                <div className="h-[122px]">
                  <img
                    src={service.img}
                    alt=""
                    className="max-w-[200px] block mx-auto transform -translate-y-14
                  group-hover:scale-105 group-hover:rotate-6 duration-300"
                  />
                </div>
                <div className="p-4 text-center">
                  <div className="w-full "></div>
                  <h1 className="text-xl font-bold">{service.name}</h1>
                  <p className="text-gray-500 group-hover:text-white duration-high text-sm line-clamp-2">
                    {service.description}
                  </p>
                  <div className="flex justify-between mt-5 px-6 items-center">
                    <p className="text-lg font-semibold">$3.75</p>
                    <Button className="bg-amber-900 text-white group-hover:bg-white group-hover:text-amber-900">Order Now</Button>
                  </div>
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </>
  );
};

export default Menu;