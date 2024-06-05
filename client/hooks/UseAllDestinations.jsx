"use client";
import React, { useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import useFetch from "./useFetch";
import AOS from "aos";
import "aos/dist/aos.css";
import Rating from "@/components/Sections/Rating";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

export default function UseAllDestinations({ categ }) {
  const { data, loading, error } = useFetch(
    `${process.env.NEXT_PUBLIC_API_BASE_URL}/api/destinations?populate=*`
  );

  // فلترة الوجهات التي تحتوي على ال categ = ChooseDestination فقط
  const filteredDestinations = data?.filter(
    (destination) =>
      destination.attributes?.categ.data?.attributes.name === `${categ}`
  );


  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <div className="flex flex-wrap gap-10 lg:gap-8 justify-center">
      {loading || error
        ? Array.from({ length: 4 }).map((_, index) => (
            <div key={index} className="relative">
              <div className="w-[300px] h-[420px]">
                <Skeleton
                  className="rounded-3xl w-[300px] h-[420px]"
                  style={{ borderRadius: "1.5rem" }}
                  baseColor="#5bada8"
                  highlightColor="#2aa69d" // لون الإبراز أغمق
                />
              </div>
              <div className="flex flex-col px-4">
                <Skeleton
                  className="absolute bottom-[50px] text-white font-semibold text-2xl"
                  width={200}
                  height={30}
                />
                <Skeleton
                  className="absolute left-0 mt-6 text-xl"
                  width={200}
                  height={25}
                  baseColor="#5bada8"
                  highlightColor="#2aa69d"
                />
              </div>
            </div>
          ))
        : filteredDestinations &&
        filteredDestinations.map((destination) => (
            <div data-aos="fade-up" key={destination.id} className="relative mb">
              <Link href={`/api/destinations/${destination.id}`}>
                <Image
                  className="rounded-3xl w-[300px] h-[420px] object-cover"
                  src={`${process.env.NEXT_PUBLIC_API_BASE_URL}${destination.attributes.destinationImage.data.attributes.url}`}
                  alt={destination.attributes.destinationName}
                  width={300}
                  height={300}
                  priority
                />
              </Link>
              <h1 className="absolute bottom-[50px] left-[40px] text-white font-semibold text-2xl">
                {destination.attributes.destinationName}
              </h1>
              <h1 className="absolute left-0 mt-8 text-xl font-semibold ">
                {destination.attributes.destinationName}
              </h1>
              <Rating />
              <Link href={`/api/destinations/${destination.id}`}>
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
    </div>
  );
}
