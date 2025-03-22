"use client";

import Image from 'next/image';
import React, { useEffect, useState } from 'react';
import { HiBars3BottomRight } from 'react-icons/hi2';

// Define props type
type Props = {
  openNav: () => void;
};

const Nav = ({ openNav }: Props) => {
  const [navBg, setNavBg] = useState(false);

  useEffect(() => {
    const handler = () => {
      setNavBg(window.scrollY >= 90);
    };

    window.addEventListener('scroll', handler);
    return () => window.removeEventListener('scroll', handler);
  }, []);

  // Function to smoothly scroll to a section
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const navbarHeight = 100; // Adjust this value based on your navbar height
      const elementPosition = element.getBoundingClientRect().top + window.scrollY;
      
      window.scrollTo({
        top: elementPosition - navbarHeight, // Stops scrolling before the title gets cut
        behavior: "smooth",
      });
    }
  };
  

  return (
    <div className={`fixed ${navBg ? 'bg-[#240b39]' : 'fixed'} h-[12vh] z-[10] w-full transition-all duration-200`}>
      <div className="flex items-center h-full justify-between w-[95%] sm:w-[90%] xl:w-[80%] mx-auto">
        
        {/* Logo */}
        <Image 
          src="/images/logo.png"
          alt="LOGO"
          width={170}
          height={170}
          className="ml-[-1.5rem] sm:ml-0"
        />

        {/* Nav Links */}
        <div className="flex items-center space-x-10">
          <div className="hidden lg:flex items-center space-x-8">
            <button onClick={() => scrollToSection("home")} className="nav_link">Home</button>
            <button onClick={() => scrollToSection("about")} className="nav_link">About</button>
            <button onClick={() => scrollToSection("services")} className="nav_link">Services</button>
            <button onClick={() => scrollToSection("projects")} className="nav_link">Projects</button>
            <button onClick={() => scrollToSection("skills")} className="nav_link">Skills</button>
            <button onClick={() => scrollToSection("reviews")} className="nav_link">Reviews</button>
            <button onClick={() => scrollToSection("blog")} className="nav_link">Blog</button> 
            <button onClick={() => scrollToSection("contact")} className="nav_link">Contact</button>
          </div>

          {/* Button */}
          <div className="flex items-center space-x-2">
            <button className="md:px-10 md:py-3 px-8 py-3 text-blue-800 font-semibold sm:text-base text-sm bg-white hover:bg-gray-200 transition-all duration-200 rounded-lg">
              Hire Me
            </button>

            {/* Burger Icon for Mobile Menu */}
            <HiBars3BottomRight onClick={openNav} className="w-8 h-8 cursor-pointer text-white lg:hidden"/>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Nav;
