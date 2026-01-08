"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Luffy from "../../../public/loader/luffy.gif";

export default function LoaderOverlay() {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setVisible(false), 1500);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (visible) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }

    return () => {
      document.body.style.overflow = "unset";
    };
  }, [visible]);

  if (!visible) return null;

  // background: `radial-gradient(
  //         circle at top center,
  //         rgb(184, 190, 239),
  //         rgb(194, 194, 233),
  //         rgb(200, 196, 230)
  //       )`,
  return (
    <div className="fixed inset-0 z-[9999] flex items-center justify-center loader-bg">
      <Image
        src={Luffy}
        alt="Loading"
        className="scale-x-[-1] h-56 w-56"
        height={224}
        width={224}
        priority
        quality={75}
      />
    </div>
  );
}
