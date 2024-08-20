"use client";
import { Adsense } from "@ctrl/react-adsense";
import React from "react";

function HomeAd() {
  return (
    <div>
      <Adsense
        client="ca-pub-3581583340976914"
        slot="3735583844"
        style={{ display: "block" }}
        layout="in-article"
        format="fluid"
      />
    </div>
  );
}

export default HomeAd;
