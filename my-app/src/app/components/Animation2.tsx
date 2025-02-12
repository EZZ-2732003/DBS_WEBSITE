import React from "react";

const Animation2 = () => {
  return (
    <video
      autoPlay
      loop
      muted
      playsInline
      className="w-full h-full object-cover"
    >
      <source src="/Animation - 2.webm" type="video/webm" />
      متصفحك لا يدعم تشغيل الفيديو.
    </video>
  );
};

export default Animation2;
