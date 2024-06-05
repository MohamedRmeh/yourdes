"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { useAuth } from "@/context/AuthContext";
import { useRouter } from "next/navigation";

export default function LoginPage() {
  const router = useRouter();
  const {
    handleLogin,
    formDataLogin,
    handleChangeLogin,
    isAuthenticated,
    error,
  } = useAuth();
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
      <div className="flex bg-white min-h-[400px] justify-between shadow-xl rounded-2xl">
        <div className="flex flex-col gap-9 items-center m-auto">
          <h1 className="text-3xl border-b-[2.5px] py-4 border-[#2aa69d] font-semibold">
            Login
          </h1>
          <form onSubmit={handleLogin} action="POST">
            <div className="flex flex-col gap-4 lg:max-w-[350px] sm:w-[350px]">
              <input
                className="border-b-2 border-slate-400 p-2 outline-none "
                placeholder="اسم المستخدم"
                type="text"
                name="identifier"
                value={formDataLogin.identifier}
                onChange={handleChangeLogin}
                required
              />
              <input
                className="border-b-2 border-slate-400 p-2 outline-none"
                placeholder="كلمة السر"
                type="password" // يُفضل استخدام نوع password لكلمة المرور
                name="password"
                value={formDataLogin.password}
                onChange={handleChangeLogin}
                required
              />
              {displayError && <p className="text-red-500">{error}</p>}
              <p className="text-sm">
                ليس لديك حساب ؟{" "}
                <Link className="text-blue-700" href="/api/register">
                  تسجيل الاشتراك
                </Link>{" "}
              </p>
              <button className="bg-[#2aa69d] py-2 rounded-full text-white font-bold mt-3">
                تسجيل الدخول
              </button>
            </div>
          </form>
        </div>
        <div className="shadow-2xl hidden lg:flex">
          <Image
            className="rounded-l-2xl shadow-2xl h-[400px] object-cover "
            src="/Images/tourismTwo.jpg"
            width={550}
            height={500}
            alt="login"
          />
        </div>
      </div>
    </section>
  );
}
