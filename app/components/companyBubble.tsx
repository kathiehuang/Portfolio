'use client'

import React, { useState, useRef, useEffect } from "react";
import Transitions from "./transitions";

export default function CompanyBubble({
  companyName,
  duration,
  description,
  imageSrc,
  isMain = false,
}) {
  const [isHovered, setIsHovered] = useState(false);
  const [isClicked, setIsClicked] = useState(false);
  const [isBelowViewport, setIsBelowViewport] = useState(false);
  const [isClickedOpacity, setIsClickedOpacity] = useState(1);

  const bubbleRef = useRef(null);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  const handleClick = () => {
    setIsClicked(!isClicked);
    setIsHovered(false);
  };

  const bubbleSize = isMain
    ? "w-40 h-40 md:w-80 md:h-80"
    : "w-24 h-24 md:w-40 md:h-40"; // Adjusted size for mobile screens
  const bubbleMargin = isMain ? "m-0" : "m-2"; // Adjusted margin for mobile screens
  const hoverSize = isMain
    ? "hover:w-52 hover:h-52 md:hover:w-96 md:hover:h-96"
    : "hover:w-32 hover:h-32 md:hover:w-52 md:hover:h-52"; // Adjusted hover size for mobile screens

  useEffect(() => {
    const handleScroll = () => {
      const experienceSection = document.getElementById('experience-section');
      const experienceBottom = experienceSection.getBoundingClientRect().bottom;

      if (isClicked && experienceBottom < window.innerHeight) {
        const opacity = Math.max(0, 1 - (window.innerHeight - experienceBottom) / 100);
        setIsClickedOpacity(opacity);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [isClicked]);


  const expandedBubbleStyle = isBelowViewport ? { bottom: 0 } : {};

  return (
    <div
      className={`flex items-center justify-center ${bubbleMargin}`}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div
        ref={bubbleRef}
        className={`relative rounded-full cursor-pointer bg-black text-white transition-all duration-300 ${bubbleSize} ${hoverSize} overflow-hidden`}
        onClick={handleClick}
      >
        <img
          className={`absolute inset-0 w-full h-full object-cover rounded-full overflow-hidden ${hoverSize}  ${isHovered || isClicked ? "opacity-50 transition-all" : "opacity-100"
            }`}
          src={imageSrc}
          alt={companyName}
        />
        {isHovered && (
          <div className="absolute inset-0 flex flex-col items-center justify-center transition-opacity duration-300">
            <p className="text-base font-bold text-center">{companyName}</p>
            <p className="text-xs text-center">{duration}</p>
          </div>
        )}
        {isClicked && (
          <div
            className="fixed inset-0 flex items-center justify-center z-10"
            style={{ ...expandedBubbleStyle, opacity: isClickedOpacity }}
          >
            <Transitions>
              <div className="max-w-lg p-4 bg-white rounded shadow-lg relative">
                <button
                  className="text-gray-500 text-xl hover:text-gray-700 focus:outline-none absolute top-0 right-0 m-2"
                  onClick={handleClick}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    className="w-4 h-4"
                  >
                    <path
                      fillRule="evenodd"
                      d="M15.707 4.293a1 1 0 010 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707A1 1 0 015.707 4.293L10 8.586l4.293-4.293a1 1 0 011.414 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                </button>
                <p className="text-xs text-center text-black font-bold lg:hidden">{duration}</p>
                <div className="text-sm text-black">{description}</div>
              </div>
            </Transitions>
          </div>
        )}
      </div>
    </div>
  );
}
