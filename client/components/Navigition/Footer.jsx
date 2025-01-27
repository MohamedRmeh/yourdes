"use client"
import React, {useEffect} from "react";
import Link from "next/link";
import AOS from "aos";

export default function Footer() {
  useEffect(() => {
    AOS.init();
  });
  return (
    <footer className="text-center bg-[#e1e1e3]">
      <div className="flex items-center justify-center border-2 border-b-[#2aa69d] border-t-slate-300 p-6 lg:justify-between">
        <div
          data-aos="fade-left"
          className=" hidden lg:block font-semibold text-slate-900 text-lg"
        >
          <span> تواصل معنا على مواقع التواصل الاجتماعي :</span>
        </div>
        <div className="flex justify-center gap-5 ">
          <Link data-aos="fade-left" href="/" className="">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z" />
            </svg>
          </Link>
          <Link data-aos="fade-left" href="/" className="  ">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z" />
            </svg>
          </Link>
          <Link data-aos="fade-left" href="/" className="  ">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                d="M7 11v2.4h3.97c-.16 1.029-1.2 3.02-3.97 3.02-2.39 0-4.34-1.979-4.34-4.42 0-2.44 1.95-4.42 4.34-4.42 1.36 0 2.27.58 2.79 1.08l1.9-1.83c-1.22-1.14-2.8-1.83-4.69-1.83-3.87 0-7 3.13-7 7s3.13 7 7 7c4.04 0 6.721-2.84 6.721-6.84 0-.46-.051-.81-.111-1.16h-6.61zm0 0 17 2h-3v3h-2v-3h-3v-2h3v-3h2v3h3v2z"
                fillRule="evenodd"
                clipRule="evenodd"
              />
            </svg>
          </Link>
          <Link data-aos="fade-left" href="/" className="  ">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
            </svg>
          </Link>
        </div>
        {/* <!-- Social network icons container --> */}
      </div>

      {/* <!-- Main container div: holds the entire content of the footer, including four sections (TW Elements, Products, Useful links, and Contact), with responsive styling and appropriate padding/margins. --> */}
      <div className="mx-6 py-10 text-center md:text-left">
        <div
          data-aos="fade-up"
          className="grid-1 grid gap-8 md:grid-cols-3 lg:grid-cols-3"
        >
          {/* <!-- TW Elements section --> */}
          <div className="flex flex-col items-center justify-center">
            <h4 className="mb-4 flex items-center justify-center font-semibold uppercase md:justify-start">
              Yourdes
            </h4>
            <p className="text-center text-slate-700">
              فريقنا ذو خبرة واسعة في مجال السياحة والثقافات المحلية. نحن
              ملتزمون بتوفير أعلى مستويات الخدمة والراحة للمسافرين. ننظم جولات
              سياحية ونوجِّه الزوار لزيارة أماكن الجذب السياحي، مقدمين المعلومات
              الضرورية بشكل مفصل وشامل. مهارات التواصل الفعّال والقدرة على
              التعامل مع مجموعات متنوعة من الناس تساهم في توفير تجربة سياحية
              ممتعة . 🌟
            </p>
          </div>
          {/* <!-- Products section --> */}
          <div className="flex flex-col items-center">
            <h4 className="mb-4 flex justify-center font-semibold uppercase md:justify-start">
              اكتشف خدماتنا
            </h4>
            <p className="mb-4">
              <Link href="/api/about" className="text-slate-700 ">
                من نحن
              </Link>
            </p>
            <p className="mb-4">
              <Link href="/api/services" className=" text-slate-700">
                خدماتنا
              </Link>
            </p>
            <p className="mb-4">
              <Link href="/api/allDestinations/ChooseDestination" className="text-slate-700 ">
                وجهات سياحية
              </Link>
            </p>
            <p>
              <Link href="/api/allDestinations/ChooseRestaurant" className=" text-slate-700">
                مطاعم
              </Link>
            </p>
          </div>
          {/* <!-- Useful links section --> */}

          {/* <!-- Contact section --> */}
          <div className="flex flex-col items-center">
            <h4 className="mb-4 flex justify-center font-semibold uppercase md:justify-start">
              اتصل بنا
            </h4>

            <p className="mb-4 flex items-center justify-center gap-2 md:justify-start text-slate-700">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className=" h-5 w-5"
              >
                <path d="M11.47 3.84a.75.75 0 011.06 0l8.69 8.69a.75.75 0 101.06-1.06l-8.689-8.69a2.25 2.25 0 00-3.182 0l-8.69 8.69a.75.75 0 001.061 1.06l8.69-8.69z" />
                <path d="M12 5.432l8.159 8.159c.03.03.06.058.091.086v6.198c0 1.035-.84 1.875-1.875 1.875H15a.75.75 0 01-.75-.75v-4.5a.75.75 0 00-.75-.75h-3a.75.75 0 00-.75.75V21a.75.75 0 01-.75.75H5.625a1.875 1.875 0 01-1.875-1.875v-6.198a2.29 2.29 0 00.091-.086L12 5.43z" />
              </svg>
              New York, NY 10012, US
            </p>

            <p className="mb-4 flex items-center justify-center gap-2 md:justify-start text-slate-700">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className=" h-5 w-5"
              >
                <path d="M1.5 8.67v8.58a3 3 0 003 3h15a3 3 0 003-3V8.67l-8.928 5.493a3 3 0 01-3.144 0L1.5 8.67z" />
                <path d="M22.5 6.908V6.75a3 3 0 00-3-3h-15a3 3 0 00-3 3v.158l9.714 5.978a1.5 1.5 0 001.572 0L22.5 6.908z" />
              </svg>
              email@company.com
            </p>
            <p className="mb-4 flex items-center justify-center gap-2 md:justify-start text-slate-700">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className=" h-5 w-5"
              >
                <path
                  fillRule="evenodd"
                  d="M1.5 4.5a3 3 0 013-3h1.372c.86 0 1.61.586 1.819 1.42l1.105 4.423a1.875 1.875 0 01-.694 1.955l-1.293.97c-.135.101-.164.249-.126.352a11.285 11.285 0 006.697 6.697c.103.038.25.009.352-.126l.97-1.293a1.875 1.875 0 011.955-.694l4.423 1.105c.834.209 1.42.959 1.42 1.82V19.5a3 3 0 01-3 3h-2.25C8.552 22.5 1.5 15.448 1.5 6.75V4.5z"
                  clipRule="evenodd"
                />
              </svg>
              +20 010 504030
            </p>
            <p className="flex items-center justify-center gap-2 md:justify-start text-slate-700">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className=" h-5 w-5"
              >
                <path
                  fillRule="evenodd"
                  d="M7.875 1.5C6.839 1.5 6 2.34 6 3.375v2.99c-.426.053-.851.11-1.274.174-1.454.218-2.476 1.483-2.476 2.917v6.294a3 3 0 003 3h.27l-.155 1.705A1.875 1.875 0 007.232 22.5h9.536a1.875 1.875 0 001.867-2.045l-.155-1.705h.27a3 3 0 003-3V9.456c0-1.434-1.022-2.7-2.476-2.917A48.716 48.716 0 0018 6.366V3.375c0-1.036-.84-1.875-1.875-1.875h-8.25zM16.5 6.205v-2.83A.375.375 0 0016.125 3h-8.25a.375.375 0 00-.375.375v2.83a49.353 49.353 0 019 0zm-.217 8.265c.178.018.317.16.333.337l.526 5.784a.375.375 0 01-.374.409H7.232a.375.375 0 01-.374-.409l.526-5.784a.373.373 0 01.333-.337 41.741 41.741 0 018.566 0zm.967-3.97a.75.75 0 01.75-.75h.008a.75.75 0 01.75.75v.008a.75.75 0 01-.75.75H18a.75.75 0 01-.75-.75V10.5zM15 9.75a.75.75 0 00-.75.75v.008c0 .414.336.75.75.75h.008a.75.75 0 00.75-.75V10.5a.75.75 0 00-.75-.75H15z"
                  clipRule="evenodd"
                />
              </svg>
              +20 010 504030
            </p>
          </div>
        </div>
      </div>

      {/* <!--Copyright section--> */}
      <div className="bg-[#2aa69d] p-6 text-center text-white font-semibold text-lg">
        <span className="">© 2023 Copyright:</span>
        <Link href="/" className="font-bold ">
          {" "}
          Yourdes
        </Link>
      </div>
    </footer>
  );
}
