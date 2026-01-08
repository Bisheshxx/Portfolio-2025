import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";

interface IProps {
  images: string[];
  from: string | number;
  to: string | number;
}

const MarqueeItem = ({ images, from, to }: IProps) => {
  return (
    <div className="flex w-full overflow-hidden my-20">
      <motion.div
        initial={{ x: `${from}` }}
        animate={{ x: `${to}` }}
        transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
        className="flex flex-shrink-0"
      >
        {images.map((image, index) => {
          return (
            <div
              key={index}
              className="h-12 w-auto pr-20 relative flex-shrink-0"
            >
              <Image
                src={image}
                alt={`marquee-${index}`}
                height={48}
                width={48}
                loading="lazy"
                quality={75}
              />
            </div>
          );
        })}
      </motion.div>

      <motion.div
        initial={{ x: `${from}` }}
        animate={{ x: `${to}` }}
        transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
        className="flex flex-shrink-0"
      >
        {images.map((image, index) => {
          return (
            <div
              key={`dup-${index}`}
              className="h-12 w-auto pr-20 relative flex-shrink-0"
            >
              <Image
                src={image}
                alt={`marquee-dup-${index}`}
                height={48}
                width={48}
                loading="lazy"
                quality={75}
              />
            </div>
          );
        })}
      </motion.div>
    </div>
  );
};

export default MarqueeItem;
