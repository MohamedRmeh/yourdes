"use client";
import React, { useEffect, useState } from "react";
import axios from "axios";
import Image from "next/image";
import { marked } from "marked";
import Contact from "@/components/contact/Contact";

export default function Page({ params }) {
  const [data, setData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `${process.env.NEXT_PUBLIC_API_BASE_URL}/api/destinations/${params.id}?populate=*`
        );
        setData(response.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, [params.id]);

  if (!data) {
    return <div>Loading...</div>;
  }

  const createMarkup = () => {
    // Assuming the description is in Markdown format
    return { __html: marked(data.data.attributes.destinationDescription) };
  };

  return (
    <section className="flex justify-center items-center p-5 w-full mt-10">
      <div className="">
        <div className="max-w-[850px] mx-auto">
          <div className="flex justify-center p-10 bg-[#2aa69d] text-white font-semibold text-4xl rounded-t-full shadow-[#2aa69d] shadow-2xl">
            <h1>{data.data.attributes.destinationName}</h1>
          </div>
          <Image
            src={`${process.env.NEXT_PUBLIC_API_BASE_URL}${data.data.attributes.destinationImage.data.attributes.url}`}
            alt="Your Image Description"
            width={1000}
            height={1000}
            className="w-[850px] max-h-[720px] object-cover shadow-[#2aa69d] shadow-2xl mx-auto"
            loading="lazy"
          />
        </div>
        <div
          data-aos="fade-up"
          className="max-w-[850px] mx-auto bg-white p-5 whitespace-pre-wrap shadow-2xl mb-20"
        >
          <div dangerouslySetInnerHTML={createMarkup()} />
        </div>
        <div className="lg:w-[1536px] w-[400px] md:w-[650px] sm:w-[650px] mx-auto">
          <Contact />
        </div>
      </div>
    </section>
  );
}
