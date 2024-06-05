import React from "react";
import Image from "next/image";
import Link from "next/link";
// import Rating from "./Rating";
// import { touristicPlaces } from "./data";
import UseDestinations from "@/hooks/UseDestinations";

export default function TouristicPlaces() {
  return (
    <section className="p-9 md:p-16">
      <div className="flex flex-col gap-20">
        <div className="flex flex-col gap-5">
          <h1
            data-aos="fade-left"
            className="md:text-5xl text-3xl text-center lg:text-start"
          >
            اختر وجهتك السياحية
          </h1>
          <div className="flex justify-between items-center">
            <p
              data-aos="fade-left"
              className="md:text-lg w-full md:w-[650px] text-center lg:text-start"
            >
              عندما يكون اختيار وجهتك مناسب لاحتياجاتك السياحية تستطيع ان تستمتع
              في سفرك
            </p>
            <div className="hidden lg:flex gap-2 sm:gap-5">
              {[...Array(2)].map((_, index) => (
                <div
                  data-aos="flip-right"
                  key={index}
                  className="sm:w-[55px] sm:h-[55px] w-[30px] h-[30px] bg-[#2aa69d] rounded-full"
                ></div>
              ))}
            </div>
          </div>
        </div>

        <UseDestinations categ="ChooseDestination" />

        {/* <div className="flex flex-wrap gap-28 lg:gap-8 justify-center">
          {touristicPlaces.map((restaurant, index) => (
            <div data-aos="fade-up" key={index} className="relative">
              <Link href="/">
                <Image
                  className="rounded-3xl w-[300px] h-[420px] object-cover"
                  src={restaurant.image}
                  alt={restaurant.name}
                  width={300}
                  height={420}
                />
              </Link>
              <Rating />
              <h1 className="absolute bottom-[50px] left-[40px] text-white font-semibold text-2xl">
                {restaurant.name}
              </h1>
              <h1 className="absolute left-0 mt-8 text-xl font-semibold">
                {restaurant.name}
              </h1>
              <Link href="/">
                <Image
                  className="absolute mt-8 bg-[#2aa69d] w-8 p-1.5 rounded-full right-8"
                  src="/Images/arrow.png"
                  width={50}
                  height={50}
                  alt="arrow"
                />
              </Link>
            </div>
          ))}
        </div> */}

        <div data-aos="fade-top" className="flex justify-center ">
          <Link
            href="/api/allDestinations/ChooseDestination"
            className="border-[3px] border-[#2aa69d] px-10 py-2.5 rounded-full hover:text-white hover:bg-[#2aa69d] transition-all delay-50"
          >
            اقرأ المزيد
          </Link>
        </div>
      </div>
    </section>
  );
}
