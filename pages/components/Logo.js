import React from "react";
import Link from "next/link";
import Image from "next/image";
import LogoImg from "../../public/images/logo.png";
import { motion } from "framer-motion";

const MotionLink = motion(Link);

const Logo = () => {
  return (
    <div className="flex items-center justify-center mt-2">
      <MotionLink
        href="/"
        className="w-16 h-16 items-center justify-center rounded-full"
        whileHover={{
          backgroundColor: [
            "#121212",
            "rgba(131,58,180,1)",
            "rgba(253,29,29,1)",
            "rgba(252,176,69,1)",
            "rgba(131,58,180,1)",
            "#121212",
          ],
          transition: { duration: 1, repeat: Infinity },
        }}
      >
        <Image src={LogoImg} alt="Logo" width={900} height={900} />
      </MotionLink>
    </div>
  );
};

export default Logo;
