"use client";
import Lottie from "lottie-react";
import animationData from "../../public/404.json";
export default function NotFound() {
  return (
    <div>
      <div className="min-h-screen">
        <Lottie
          animationData={animationData}
          className="h-[70vh]"
          loop={true}
        />
      </div>
    </div>
  );
}
