import React from "react";
import Image from "next/image";
import Link from "next/link";
// import Rating from "./Rating";
// import { touristicPlaces } from "./data";
import UseAllDestinations from "@/hooks/UseAllDestinations";

export default function ChooseRestaurant() {
  return (
    <section className="p-9 md:p-16 mb-20">
      <div className="flex flex-col gap-20">
        <UseAllDestinations categ="ChooseRestaurant" />

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
      </div>
    </section>
  );
}
