'use client';

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUserGraduate, faChalkboardTeacher, faUserShield } from "@fortawesome/free-solid-svg-icons";

const Homepage = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-indigo-100 via-purple-100 to-pink-100 relative overflow-hidden font-sans">
      {/* Background Image */}
      <Image
        src="/school-bg.png"
        alt="Cartoon school background"
        layout="fill"
        objectFit="full"
        quality={100}
        className="absolute inset-0 z-0 opacity-80"
      />

      {/* Main Content Card */}
      <div className="relative z-10 bg-white/90 backdrop-blur-md shadow-2xl rounded-3xl p-8 sm:p-12 w-11/12 max-w-2xl mx-auto my-12 md:my-20 border border-purple-200">
        
        {/* Animated Heading */}
        <motion.h1
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-4xl sm:text-3xl font-extrabold text-center text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600"
        >
          SchoolManager Login
        </motion.h1>

        <p className="text-center text-gray-600 mt-3 italic text-base sm:text-lg">
          "Empowering Education with Digital Innovation"
        </p>

        <p className="p-3 text-center text-sm sm:text-base text-gray-700 mt-2">
          📚 Easy Access to Results, Attendance, Timetable, and More...
        </p>
        <p className="p-3 text-center text-sm sm:text-base text-gray-700">
          ✅ For Students, Teachers, and Admins
        </p>

        <motion.h2
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
          className="text-center font-semibold text-lg sm:text-xl text-gray-700 mt-6"
        >
          Login as
        </motion.h2>

        {/* Login Buttons */}
        <div className="mt-6 flex flex-col sm:flex-row justify-center items-center gap-4 sm:gap-6">
          <Link href="/student" passHref>
            <button className="w-full sm:w-auto flex items-center justify-center gap-2 bg-indigo-500 hover:bg-indigo-600 text-white px-6 py-3 rounded-full text-sm sm:text-base transition-all duration-300 transform hover:scale-105 shadow-md">
              <FontAwesomeIcon icon={faUserGraduate} />
              Student Login
            </button>
          </Link>

          <Link href="/parent" passHref>
            <button className="w-full sm:w-auto flex items-center justify-center gap-2 bg-pink-500 hover:bg-pink-600 text-white px-6 py-3 rounded-full text-sm sm:text-base transition-all duration-300 transform hover:scale-105 shadow-md">
              <FontAwesomeIcon icon={faUserShield} />
              Parent Login
            </button>
          </Link>

          <Link href="/teacher" passHref>
            <button className="w-full sm:w-auto flex items-center justify-center gap-2 bg-purple-500 hover:bg-purple-600 text-white px-6 py-3 rounded-full text-sm sm:text-base transition-all duration-300 transform hover:scale-105 shadow-md">
              <FontAwesomeIcon icon={faChalkboardTeacher} />
              Teacher Login
            </button>
          </Link>
        </div>

        <p className="text-center text-xs sm:text-sm text-gray-500 mt-6">
          New here?{" "}
          <Link href="/sign-in" className="text-purple-600 hover:underline font-semibold">
            Create an account
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Homepage;
