"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import Rating from "@/components/Sections/Rating";

export default function Page() {
  const [destinations, setDestinations] = useState([]);

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const queryParam = params.get("query");
    if (queryParam) {
      const destinationsData = JSON.parse(
        localStorage.getItem("destinationsData")
      );
      if (destinationsData) {
        const foundDestinations = destinationsData.filter((destination) =>
          destination.attributes.destinationName
            .toLowerCase()
            .includes(queryParam.toLowerCase())
        );
        if (foundDestinations.length > 0) {
          setDestinations(foundDestinations);
        } else {
          console.log("No destinations found");
        }
      } else {
        console.log("No data in local storage");
      }
    } else {
      console.log("Query param is missing");
    }
  }, []);

  return destinations.length > 0 ? (
    <div className="flex flex-col gap-14 mb-12">
      <p className="text-5xl flex justify-center font-semibold">نتائج البحث</p>
      <div className="flex flex-wrap gap-10 lg:gap-8 justify-center">
        {destinations.map((destination) => (
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
            <h1 className="absolute left-0 mt-8 text-xl font-semibold">
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
    </div>
  ) : (
    <div className="flex justify-center text-4xl font-semibold items-center">
      No destination found
    </div>
  );
}
