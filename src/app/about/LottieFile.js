"use client";
import dynamic from "next/dynamic";
import animationData from "../../../public/a2.json";

const Lottie = dynamic(() => import("lottie-react"), { ssr: false });

export default function LottieFile() {
  return (
    <>
      {Lottie && (
        <Lottie
          animationData={animationData}
          className="flex justify-center items-center"
          loop={true}
        />
      )}
    </>
  );
}
