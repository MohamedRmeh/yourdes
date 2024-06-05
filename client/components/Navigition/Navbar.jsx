"use client";
import React, { useState } from "react";
import Link from "next/link";
import { useAuth } from "@/context/AuthContext";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion"; // استيراد framer-motion و AnimatePresence

export default function Navbar() {
  const { isAuthenticated, logout } = useAuth();
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const menuVariants = {
    hidden: { opacity: 0, y: -50 },
    visible: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: -50 },
  };

  return (
    <nav className="py-12 w-full lg:mb-5">
      <div className="flex md:justify-around justify-between items-center px-10">
        <div className="flex items-center gap-4">
          <Link href='/' className="text-2xl">YOURDES</Link>
        </div>
        <ul className={`hidden lg:flex gap-10 bg-[#2aa69d] text-white px-12 py-2 rounded-full`}>
          <Link href='/' prefetch>الرئيسية</Link>
          <Link href='/api/allDestinations/ChooseDestination'>وجهات سياحية</Link>
          <Link href='/api/allDestinations/ChooseRestaurant'>مطاعم</Link>
          <Link href='/api/allDestinations/ChooseFight'>رحلات سياحية</Link>
          <Link href='/api/services'>خدماتنا</Link>
          <Link href='/api/about'>من نحن</Link>
        </ul>
        <div className="bg-[#2aa69d] text-white px-4 py-2 rounded-full hidden lg:flex">
          {isAuthenticated ? (
            <button onClick={logout}>تسجيل الخروج</button>
          ) : (
            <Link href='/api/login'>تسجيل الدخول</Link>
          )}
        </div>
        <div className="lg:hidden">
          <Image
            src='/Images/icons8-menu-50.png'
            width={40}
            height={40}
            alt="menu"
            onClick={toggleMenu}
            className="cursor-pointer"
          />
        </div>
      </div>
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial="hidden"
            animate="visible"
            exit="exit"
            variants={menuVariants}
            className="lg:hidden flex flex-col items-center bg-[#2aa69d] text-white p-5 rounded-md mt-4 gap-4"
          >
            <Link href='/'>الرئيسية</Link>
            <Link href='/api/allDestinations/ChooseDestination'>وجهات سياحية</Link>
            <Link href='/api/allDestinations/ChooseRestaurant'>مطاعم</Link>
            <Link href='/api/allDestinations/ChooseFight'>رحلات سياحية</Link>
            <Link href='/api/services'>خدماتنا</Link>
            <Link href='/api/about'>من نحن</Link>
            <div className="">
              {isAuthenticated ? (
                <button onClick={logout}>تسجيل الخروج</button>
              ) : (
                <Link href='/api/login'>تسجيل الدخول</Link>
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
