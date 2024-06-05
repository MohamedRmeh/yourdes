"use client";
import React, { createContext, useContext, useState, useEffect } from "react";
import Cookies from "js-cookie";
import { useRouter } from "next/navigation";
import axios from "axios";

// إنشاء سياق
const AuthContext = createContext();

// موفر السياق
export const AuthProvider = ({ children }) => {
  const router = useRouter();
  const [error, setError] = useState("");
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
  });
  const [formDataLogin, setFormDataLogin] = useState({
    identifier: "",
    password: "",
  });

  // لتتبع حالة تسجيل الدخول في حالة عمل رفرش حيضل المستخدم مسجل للدخول
  useEffect(() => {
    const token = Cookies.get("token");
    if (token) {
      setIsAuthenticated(true);
    }
  }, [setIsAuthenticated]);

  //  عملية تسجيل الحروج
  const logout = () => {
    Cookies.remove("token");
    setIsAuthenticated(false);
  };

  //   تصدير عملية تعبئة البيانات بالفورم
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };
  const handleChangeLogin = (e) => {
    setFormDataLogin({
      ...formDataLogin,
      [e.target.name]: e.target.value,
    });
  };

  //   ارسال البيانات الى ال endpoint وتغيير حالة المستخدم انه مسجل الدخول
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        `${process.env.NEXT_PUBLIC_API_BASE_URL}/api/auth/local/register`,
        formData
      );
      setIsAuthenticated(true);
      console.log("User registered successfully:", response.data);

      // تخزين الـ token داخل الـ cookie
      Cookies.set("token", response.data.jwt, { expires: 5 });

      router.push("/");
    } catch (error) {
      console.error(
        "Error registering user:",
        error.response?.data || error.message
      );
      setError(error.response?.data.error.message);
    }
  };

  // دالة تسجيل الدخول
  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        `${process.env.NEXT_PUBLIC_API_BASE_URL}/api/auth/local`,
        formDataLogin
      );
      setIsAuthenticated(true);
      // تخزين الـ token داخل الـ cookie
      Cookies.set("token", response.data.jwt, { expires: 5 });

      router.push("/");
    } catch (error) {
      console.error(
        "Error logging in user:",
        error.response?.data || error.message
      );
      setError(error.response?.data.error.message);
    }
  };


  return (
    <AuthContext.Provider
      value={{
        isAuthenticated,
        logout,
        handleSubmit,
        handleChange,
        formData,
        error,
        handleLogin,
        handleChangeLogin,
        formDataLogin,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

// استخدام السياق
export const useAuth = () => useContext(AuthContext);
