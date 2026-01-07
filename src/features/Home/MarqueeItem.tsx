import React from "react";
import { motion } from "framer-motion";

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
          return <img className="h-12 w-auto pr-20" src={image} key={index} />;
        })}
      </motion.div>

      <motion.div
        initial={{ x: `${from}` }}
        animate={{ x: `${to}` }}
        transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
        className="flex flex-shrink-0"
      >
        {images.map((image, index) => {
          return <img className="h-12 w-auto pr-20" src={image} key={index} />;
        })}
      </motion.div>
    </div>
  );
};

export default MarqueeItem;
