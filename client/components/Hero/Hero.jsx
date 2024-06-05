import Image from "next/image";
import SearchFun from "../Search/SearchFun";

export default function Hero() {


  return (
    <section className="mb-28">
      <div>
        <div className="flex justify-center w-full lg:h-[600px] h-[500px] p-3 relative">
          <Image
            className="object-cover rounded-t-2xl"
            src="/Images/Hero.jpg"
            alt="Hero"
            width={1350}
            height={600}
          />
          <h1
            data-aos="fade-right"
            className="absolute text-white text-3xl sm:text-5xl lg:text-6xl top-[160px]"
          >
            اكتشف وجهتك السياحية
          </h1>

          <h1
            data-aos="fade-left"
            className="absolute text-white sm:text-4xl text-2xl sm:top-[230px] top-[210px] lg:top-auto lg:bottom-[150px] lg:right-[300px]"
          >
            سافر وانت في بيتك ...
          </h1>
          <h1
            data-aos="fade-right"
            className="absolute text-white sm:text-4xl text-2xl sm:top-[290px] top-[260px] lg:top-auto lg:bottom-[100px] lg:right-[300px]"
          >
            ابحث عن وجهتك قبل السفر
          </h1>
          <div className="absolute -bottom-[45px] w-3/4 h-[120px] bg-[#2aa69d] rounded-[30px]">
            <h1 className="absolute text-white right-[13%] top-[19px] text-xl sm:text-2xl font-bold">
              وجهتك السياحية
            </h1>
              <SearchFun/>
          </div>
        </div>
      </div>
    </section>
  );
}
