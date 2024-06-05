import React from "react";
import Link from "next/link";
import UseDestinations from "@/hooks/UseDestinations";

export default function TouristicPlaces() {
  return (
    <section className="p-9 md:p-16 mb-24">
      <div className="flex flex-col gap-20">
        <div className="flex flex-col gap-5">
          <h1
            data-aos="fade-left"
            className="md:text-5xl text-3xl text-center lg:text-start"
          >
            أهم واشهر الاماكن السياحية في وجهتك
          </h1>
          <div className="flex justify-between items-center">
            <p
              data-aos="fade-left"
              className="md:text-lg w-full md:w-[650px] text-center lg:text-start"
            >
              برنامج سياحي يعتمد على الاماكن السياحية التي ترغب في زيارتها
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

        <UseDestinations categ="TouristicPlaces" />

        <div data-aos="fade-top" className="flex justify-center ">
          <Link
            href="/api/allDestinations/TouristicPlaces"
            className="border-[3px] border-[#2aa69d] px-10 py-2.5 rounded-full hover:text-white hover:bg-[#2aa69d] transition-all delay-50"
          >
            اقرأ المزيد
          </Link>
        </div>
      </div>
    </section>
  );
}
