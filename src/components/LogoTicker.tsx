"use client";
import acmeLogo from "../assets/images/acme.png";
import quantumLogo from "../assets/images/quantum.png";
import echoLogo from "../assets/images/echo.png";
import celestialLogo from "../assets/images/celestial.png";
import pulseLogo from "../assets/images/pulse.png";
import apexLogo from "../assets/images/apex.png";
import Image from "next/image";
import { motion } from "framer-motion";

export const LogoTicker = () => {
  return (
    <div className="bg-black text-white py-[72px] sm:py-24">
      <div className="container">
        <h2 className="text-xl text-center text-white/70">
          Trusted by the world&apos;s most innovative teams
        </h2>
        <div className="overflow-hidden mt-9 before:content-[''] after:content-[''] before:absolute before:z-10 after:absolute before:h-full after:h-full before:w-5 after:w-5 relative before:left-0 after:right-0 before:top-0 after:top-0 before:bg-[linear-gradient(to_right,#000,rgb(0,0,0,0))] after:bg-[linear-gradient(to_left,#000,rgb(0,0,0,0))]">
          <motion.div
            className="flex gap-14 flex-none pr-14"
            animate={{
              translateX: "-50%",
            }}
            transition={{
              duration: 20,
              repeat: Infinity,
              ease: "linear",
              repeatType: "loop",
            }}
          >
            <Image
              src={acmeLogo}
              alt="Acme Logo"
              className="logo-ticker-image"
            />
            <Image
              src={quantumLogo}
              alt="QuantumLogo Logo"
              className="logo-ticker-image"
            />
            <Image
              src={echoLogo}
              alt="EchoLogo Logo"
              className="logo-ticker-image"
            />
            <Image
              src={celestialLogo}
              alt="CelestialLogo Logo"
              className="logo-ticker-image"
            />
            <Image
              src={pulseLogo}
              alt="PulseLogo Logo"
              className="logo-ticker-image"
            />
            <Image
              src={apexLogo}
              alt="ApexLogo Logo"
              className="logo-ticker-image"
            />

            {/* Second set of logos */}
            <Image
              src={acmeLogo}
              alt="Acme Logo"
              className="logo-ticker-image"
            />
            <Image
              src={quantumLogo}
              alt="QuantumLogo Logo"
              className="logo-ticker-image"
            />
            <Image
              src={echoLogo}
              alt="EchoLogo Logo"
              className="logo-ticker-image"
            />
            <Image
              src={celestialLogo}
              alt="CelestialLogo Logo"
              className="logo-ticker-image"
            />
            <Image
              src={pulseLogo}
              alt="PulseLogo Logo"
              className="logo-ticker-image"
            />
            <Image
              src={apexLogo}
              alt="ApexLogo Logo"
              className="logo-ticker-image"
            />
          </motion.div>
        </div>
      </div>
    </div>
  );
};
