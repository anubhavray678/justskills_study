"use client";
import React from "react";
import { Adsense } from "@ctrl/react-adsense";

function Article() {
  return (
    <div>
      <Adsense
        client="ca-pub-3581583340976914"
        slot="8601243193"
        style={{ display: "block", textAlign: "center" }}
        layout="in-article"
        format="fluid"
      />
    </div>
  );
}

export default Article;
