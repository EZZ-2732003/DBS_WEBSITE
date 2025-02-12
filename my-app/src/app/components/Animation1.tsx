import React from "react";

const Animation1 = () => {
  return (
    <video
      autoPlay
      loop
      muted
      playsInline
      className="w-full h-full object-cover"
    >
      <source src="/Animation - 1.webm" type="video/webm" />
      متصفحك لا يدعم تشغيل الفيديو.
    </video>
  );
};

export default Animation1;
