import React from "react";
import Image from "next/image";
import Link from "next/link";
import Contact from "@/components/contact/Contact";
export default function page() {
  return (
    <section>
      <div>
        <div>
          <Image
            className="w-screen h-[350px] object-cover"
            src="/Images/about.png"
            width={2000}
            height={800}
            alt="main"
          />
        </div>


        <div className="lg:p-20 p-14 flex flex-col gap-10">
          <h1 className="md:text-5xl text-2xl font-semibold text-center md:text-start" data-aos="fade-left">
            أكتر من 250 وجهة سفر مختلفة حول العالم
          </h1>
          <div>
            <p
              className="md:text-lg text-center md:text-start text-slate-600 lg:w-[1100px]"
              data-aos="fade-left"
            >
              تُعد Yourdes شركة رائدة في مجال السياحة والسفر، حيث تقدم خدماتها
              لأكثر من 250 وجهة سياحية عالمية. تلتزم الشركة بتوفير تجارب سفر
              مميزة تلبي احتياجات المسافرين، من مغامرات مثيرة إلى رحلات استجمام
              فاخرة. تشمل خدماتها حجز تذاكر الطيران، الإقامات الفاخرة، الجولات
              السياحية المحلية، والتنقلات المريحة. توفر Yourdes باقات سياحية
              متنوعة تناسب جميع الأذواق والميزانيات، بالإضافة إلى برامج مخصصة
              للمجموعات، رحلات شهر العسل، ورحلات الأعمال. بفضل شراكاتها مع كبرى
              شركات الطيران والفنادق، تضمن الشركة لعملائها تجربة سفر متميزة
              وآمنة، مما يجعلها الخيار المثالي لكل من يبحث عن مغامرة سفر لا
              تُنسى.
            </p>
            <div data-aos="fade-top" className="flex justify-center md:justify-start">
              <Link
                href="/api/allDestinations/ChooseDestination"
                className="mt-10 text-center border-[3px] border-[#2aa69d] px-10 py-2.5 rounded-full hover:text-white hover:bg-[#2aa69d] transition-all delay-50"
              >
                اكتشف الوجهات السياحية
              </Link>
            </div>
          </div>
        </div>
        <div className="flex flex-col lg:flex-row gap-10 p-5 md:p-20">
          <Image
            data-aos="fade-left"
            src="/Images/aboutOne.png"
            width={500}
            height={500}
            alt="about"
          />
          <Image
            data-aos="fade-right"
            src="/Images/aboutTwo.png"
            width={500}
            height={500}
            alt="about"
          />
        </div>


        <div className="lg:p-20 p-14 flex flex-col gap-10">
          <h1 className="md:text-5xl text-2xl font-semibold text-center md:text-start" data-aos="fade-left">
            تجارب عطلة مصممة خصيصًا لكل نمط وميزانية
          </h1>
          <div>
            <p
              className="md:text-lg text-center md:text-start text-slate-600 lg:w-[1100px]"
              data-aos="fade-left"
            >
              يقدم مستشارو السفر الخبراء في YourDes تغطية شاملة لكافة أنماط
              العطلات والميزانيات والخبرات. يستمتع عملاؤنا بتجارب سفر مصممة
              خصيصًا توفر قيمة استثنائية، مستفيدين من قوتنا الشرائية العالمية
              وفرقنا المحترفة ذات الخبرة الواسعة. يجمع مستشارونا بين تجربة السفر
              المباشرة ومعرفة الصناعة المتقدمة، مما يضمن تخطيط وتنفيذ عطلاتك
              بسهولة وكفاءة ودقة فائقة.
            </p>
            <div data-aos="fade-top" className="flex justify-center md:justify-start">
              <Link
                href="/api/services"
                className="mt-10 text-center border-[3px] border-[#2aa69d] px-10 py-2.5 rounded-full hover:text-white hover:bg-[#2aa69d] transition-all delay-50"
              >
                اكتشف خدماتنا
              </Link>
            </div>
          </div>
        </div>
        <Contact />
      </div>
    </section>
  );
}
