"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useAuth } from "@/context/AuthContext";

export default function Page() {
  const router = useRouter();

  const { handleChange, handleSubmit, formData, error, isAuthenticated } =
    useAuth();
  const [displayError, setDisplayError] = useState(false);

  useEffect(() => {
    if (isAuthenticated) {
      router.push("/");
    }
  });

  useEffect(() => {
    if (error) {
      // عرض الخطأ مباشرة
      setDisplayError(true);

      // إخفاء الخطأ بعد 3 ثواني
      const timeout = setTimeout(() => {
        setDisplayError(false);
      }, 5000);

      return () => clearTimeout(timeout);
    }
  }, [error]);
  return (
    <section className="sm:w-2/3 mx-auto mb-20 py-20 w-[85%]">
      <div className="flex bg-white min-h-[450px] justify-between shadow-xl rounded-2xl">
        <div className="flex flex-col gap-9 items-center m-auto">
          <h1 className="text-3xl border-b-[2.5px] py-4 border-[#2aa69d] font-semibold">
            Register
          </h1>
          <form onSubmit={handleSubmit} action="POST">
            <div className="flex flex-col gap-4 lg:max-w-[350px] sm:w-[350px]">
              <input
                className="border-b-2 border-slate-400 p-2 outline-none"
                placeholder="اسم المستخدم"
                type="text"
                name="username"
                value={formData.username}
                onChange={handleChange}
                required
              />
              <input
                className="border-b-2 border-slate-400 p-2 outline-none"
                placeholder="البريد الالكتروني"
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
              />
              <input
                className="border-b-2 border-slate-400 p-2 outline-none"
                placeholder="كلمة السر"
                type="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                required
              />
              {displayError && <p className="text-red-500">{error}</p>}
              <p className="text-sm">
                هل لديك حساب ؟{" "}
                <Link className="text-blue-700" href="/api/login">
                  تسجيل الدخول
                </Link>
              </p>
              <button className="bg-[#2aa69d] py-2 rounded-full text-white font-bold mt-3">
                تسجيل الاشتراك
              </button>
            </div>
          </form>
        </div>
        <div className="shadow-2xl hidden lg:flex">
          <Image
            className="rounded-l-2xl shadow-2xl h-[450px] object-cover"
            src="/Images/travelTwo.jpg"
            width={550}
            height={500}
            alt="login"
          />
        </div>
      </div>
    </section>
  );
}
