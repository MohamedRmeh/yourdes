import React from "react";
import Image from "next/image";
import Link from "next/link";

const servicesData = [
  {
    imageSrc: "/Images/servicesOne.png",
    title: "نحن نحب العائلة",
    description:
      "أثناء اللعب على الشاطئ في منطقة البحر الكاريبي أو الإبحار حول اليونان، يعمل مستشارو السفر الفاخر لدينا مع العائلات من جميع الأحجام والأعمار لخلق تجارب ممتعة للجميع...",
  },
  {
    imageSrc: "/Images/servicesTwo.png",
    title: "نحن نحب الرحلات البحرية",
    description:
      "إن الإبحار على متن سفينة صغيرة الحجم أو يخت خاص يتيح لك الوصول الحصري إلى الأراضي النائية، دون المساس بالفخامة...",
  },
  {
    imageSrc: "/Images/servicesThree.png",
    title: "نحن نحب استئجار الفلل",
    description:
      "هل تحلم بامتلاك فيلا خاصة بك؟ المزودة بموظفين لتلبية كافة طلباتك؟ من الشاطئ إلى الريف وإلى المنحدرات (وكل شيء بينهما)، نعلم مدى أهمية استئجار الفيلا المثالية بالنسبة لك...",
  },
];

export default function Page() {
  return (
    <section className="mb-28">
      <div>
        <div className="relative mb-28">
          <Image
            className="w-screen h-[500px] object-cover"
            src="/Images/servOne.png"
            width={2800}
            height={600}
            alt="image"
          />
          <h1 className="absolute text-white font-semibold text-5xl top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
            ? Why us
          </h1>
        </div>
        <div className="flex flex-col justify-center items-center text-center gap-10 lg:mb-20 mb-44 p-6">
          <h1
            className="md:text-3xl text-xl max-w-[850px] font-semibold"
            data-aos="fade-left"
          >
            نحن نهتم بالتفاصيل، لتستمتع أنت بوقتك. بفضل خبرائنا، استثمر وقتك
            بأفضل طريقة واترك لنا كل شيء.
          </h1>
          <p
            className="max-w-[700px] text-start text-slate-600 md:text-lg"
            data-aos="fade-right"
          >
            نتعرف على عملائنا على مر السنين ونحن نصنع الأحلام معًا. سواء كنت
            تخطط لشهر العسل في بولينيزيا الفرنسية، أو رحلتك العائلية الأولى إلى
            أوروبا، أو ذكرى زواجك الخمسين في أفريقيا، يقوم مستشارو Yourdes للسفر
            الفاخر بتنسيق برامج رحلات إبداعية ومخصصة تغني حياتك. وصولنا العالمي
            إلى تجارب استثنائية وعلاقات داخلية وإقامات فاخرة، يخلق ذكريات تدوم
            مدى الحياة. <br /> دعنا نكون مستشارك الشخصي للسفر!
          </p>
          <div
            data-aos="fade-bottom"
            className="flex justify-center md:justify-start "
          >
            <Link
              href="/api/about"
              className="mt-2 text-center border-[3px] border-[#2aa69d] px-10 py-2.5 rounded-full hover:text-white hover:bg-[#2aa69d] transition-all delay-50"
            >
              اكتشف من نحن
            </Link>
          </div>
        </div>
        {/* Content */}
        <div>
          {servicesData.map((service, index) => (
            <div
              key={index}
              className={`p-4 sm:p-10 relative mb-14 lg:mb-28 ${
                index % 2 === 0 ? "" : "flex flex-row-reverse"
              }`}
            >
              <Image
                data-aos="fade-left"
                src={service.imageSrc}
                width={900}
                height={900}
                alt="services"
                className="shadow-2xl" // تأكد من أن الصورة تملأ العرض وتحافظ على نسبة الأبعاد
              />
              <div
                className={`absolute top-1/2 left-1/2 lg:left-0 ${
                  index % 2 === 0 ? "lg:right-[340px]" : "lg:-right-[0px]"
                } transform -translate-x-1/2 -translate-y-1/2  bg-[#2aa69d] rounded-lg text-[#132f2e] p-4 sm:p-10 flex flex-col gap-5 justify-center shadow-2xl max-w-xs sm:max-w-xl h-auto sm:h-[300px]`}
              >
                <h2 className="text-2xl sm:text-4xl font-semibold mb-2">
                  {service.title}
                </h2>
                <p className="text-sm sm:text-base">{service.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
