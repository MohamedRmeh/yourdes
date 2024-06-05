import React from "react";
import Image from "next/image";

export default function AboutCompany() {
  return (
    <section className="md:p-20 p-3 mb-20">
      <div className="flex flex-col lg:flex-row  items-center">
        <div className="lg:w-2/4 w-[320px] flex flex-col gap-10 lg:gap-[65px]">
          <p
            data-aos="fade-left"
            className="lg:text-5xl text-3xl font-semibold text-center lg:text-start"
          >
            نساعدك في اختيار وجهتك المناسبة
          </p>
          <p
            data-aos="fade-left"
            className="text-gray-700 lg:text-[18px] lg:w-[520px] text-center lg:text-start"
          >
            مرحبا بك في YOURDES <br />
            نحن نقدم تجارب سفر مميزة وتنظيم رحلات سياحية لا تنسى الى وجهات مذهلة
            حول العالم. اكتشف معنا افضل الوجهات واستمتع بتجارب سفر فريدة تلبي
            جميع احتياجاتك <br />
            اتصل بنا اليوم لبدأ تخطيط رحلتك القادمة
          </p>
          <div data-aos="fade-up" className="flex items-center lg:gap-14 gap-7">
            <div className="flex flex-col items-center gap-1">
              <p className="font-semibold lg:text-3xl text-2xl">10K+</p>
              <p className="font-semibold lg:text-xl text-lg text-slate-500">مستخدم</p>
            </div>
            <div className="h-[100px] w-[3px] bg-[#2aa69d]"></div>
            <div className="flex flex-col items-center gap-1">
              <p className="font-semibold lg:text-3xl text-2xl">150+</p>
              <p className="font-semibold lg:text-xl text-lg text-slate-500">
                رحلة سياحية
              </p>
            </div>
            <div className="h-[100px] w-[3px] bg-[#2aa69d]"></div>
            <div className="flex flex-col items-center gap-1">
              <p className="font-semibold lg:text-3xl text-2xl">100+</p>
              <p className="font-semibold lg:text-xl text-lg text-slate-500">
                وجهة سياحية
              </p>
            </div>
          </div>
        </div>
        <div className="w-2/4 relative lg:flex justify-center hidden">
          <div className="relative w-[350px] h-[500px]">
            <div
              data-aos="fade-right"
              className="absolute top-0 left-0 w-[280px] h-[450px] overflow-hidden"
            >
              <Image
                src="/Images/about.jpg"
                width={400}
                height={400}
                alt="about"
                className="object-cover w-full h-full"
              />
            </div>
            <div
              data-aos="fade-right"
              className="absolute bottom-[200px] right-[200px] border-4 rounded-t-full border-white w-[280px] h-[450px] overflow-hidden"
            >
              <Image
                className="object-cover w-full h-full rounded-t-full"
                src="/Images/aboutTwo.jpg"
                width={400}
                height={400}
                alt="about"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
