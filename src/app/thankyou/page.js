"use client";
import Lottie from "lottie-react";
import animationData from "../../../public/tk.json";
export default function Thankyou() {
  return (
    <div>
      <div className="min-h-screen">
        <Lottie
          animationData={animationData}
          className="h-[70vh]"
          loop={true}
        />
        <h1 className="text-center">
          Thank you for reaching out. We &apos;ll get back to you soon{" "}
        </h1>
      </div>
    </div>
  );
}
