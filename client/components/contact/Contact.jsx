'use client'
import React, { useState, useEffect } from "react";
import axios from "axios";
import Swal from "sweetalert2";

export default function Contact() {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    message: "",
    readyToBook: false,
    subscribe: false,
    agreeToSms: false,
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Load last submit time from localStorage
  useEffect(() => {
    const lastSubmitTime = localStorage.getItem('lastSubmitTime');
    if (lastSubmitTime) {
      setLastSubmitTime(Number(lastSubmitTime));
    }
  }, []);

  const [lastSubmitTime, setLastSubmitTime] = useState(0);
  const WAIT_TIME_MS = 300000; // 5 minutes

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const currentTime = new Date().getTime();
    const timeSinceLastSubmit = currentTime - lastSubmitTime;
    if (timeSinceLastSubmit < WAIT_TIME_MS) {
      const timeLeft = Math.ceil((WAIT_TIME_MS - timeSinceLastSubmit) / 1000);
      Swal.fire({
        title: 'تنبيه!',
        text: `يرجى الانتظار ${timeLeft} ثانية قبل إعادة المحاولة.`,
        icon: 'warning',
        confirmButtonText: 'موافق'
      });
      return;
    }

    setIsSubmitting(true);
    try {
      const response = await axios.post(`${process.env.NEXT_PUBLIC_API_BASE_URL}/api/contacts`, {
        data: formData,
      });
      Swal.fire({
        title: 'تم الإرسال !',
        text: 'شكرًا لتواصلك معنا. سنتواصل معك قريبًا لمناقشة التفاصيل وترتيب خطط سفرك.',
        icon: 'success',
        confirmButtonText: 'موافق'
      });
      setFormData({
        username: "",
        email: "",
        message: "",
        readyToBook: false,
        subscribe: false,
        agreeToSms: false,
      });
      setLastSubmitTime(currentTime);
      // Save last submit time to localStorage
      localStorage.setItem('lastSubmitTime', currentTime);
    } catch (error) {
      Swal.fire({
        title: 'خطأ!',
        text: 'حدث خطأ، يرجى المحاولة مرة أخرى.',
        icon: 'error',
        confirmButtonText: 'موافق'
      });
      console.error(error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="w-[100%] h-[950px] bg-[#2aa69d] flex justify-center items-center mb-28 relative">
      <div className="max-w-[626px] h-[750px] bg-white rounded-2xl p-[30px] m-6 shadow-2xl absolute">
        <div className="mb-7 flex flex-col gap-2">
          <p className="sm:text-xl text-lg font-semibold ">
            تواصل معنا واخبرنا بخطط سفرك لترتيب رحلة حسب طلبك !
          </p>
          <p className="text-slate-500 text-sm">تواصل معنا الان.</p>
        </div>
        <form className="grid grid-cols-1 gap-5" onSubmit={handleSubmit}>
          <div className="flex gap-5 justify-between">
            <input
              className="border border-slate-400 w-2/4 px-3 py-3 outline-none"
              placeholder="اسم المستخدم"
              type="text"
              name="username"
              value={formData.username}
              onChange={handleChange}
              required
            />
            <input
              className="border border-slate-400 w-2/4 px-3 py-3 outline-none"
              placeholder="البريد الالكتروني"
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>
          <textarea
            placeholder="اريد تنظيم رحلة لباريس ..."
            className="outline-none py-3 px-2 border border-slate-400 lg:w-[100%]"
            name="message"
            value={formData.message}
            onChange={handleChange}
            required
          />
          <div className="flex flex-col items-start sm:gap-16 gap-8 mt-12">
            <div className="flex gap-5 items-center">
              <input
                type="checkbox"
                name="readyToBook"
                checked={formData.readyToBook}
                onChange={handleChange}
              />
              <label className="text-slate-800 text-sm sm:text-lg">
                انا جاهز للحجز الان.
              </label>
            </div>
            <div className="flex gap-5 items-center">
              <input
                type="checkbox"
                name="subscribe"
                checked={formData.subscribe}
                onChange={handleChange}
              />
              <label className="text-slate-800 text-sm sm:text-lg">
                نعم من فضلك اضفني الى القائمة البريدية الخاصة بك.
              </label>
            </div>
            <div className="flex gap-5 items-center">
              <input
                type="checkbox"
                name="agreeToSms"
                checked={formData.agreeToSms}
                onChange={handleChange}
              />
              <label className="text-slate-800 text-sm sm:text-lg">
                اوافق على تلقي الرسائل النصية التسويقية القصيرة. من خلال ترك هذا
                المربع بدون تحديد, فأني لا اوافق على تلقي الرسائل النصية
                التسويقية القصيرة.
              </label>
            </div>
          </div>
          <div>
            <button
              type="submit"
              className="sm:mt-14 mt-10 text-center border-[3px] border-[#2aa69d] px-10 py-2.5 rounded-full hover:text-white hover:bg-[#2aa69d] transition-all delay-50"
              disabled={isSubmitting}
            >
              ارسال
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
