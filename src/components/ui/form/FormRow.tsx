/* eslint-disable react-hooks/exhaustive-deps */
"use client";

import React, { useState, useEffect, useRef } from "react";

interface FormRowProps {
  children: React.ReactNode;
}

const FormRow: React.FC<FormRowProps> = ({ children }) => {
  const [isDesktop, setIsDesktop] = useState(false);
  const checkSize = useRef(() => {
    setIsDesktop(window.innerWidth >= 768);
  });

  useEffect(() => {
    checkSize.current();
    window.addEventListener("resize", checkSize.current);
    return () => window.removeEventListener("resize", checkSize.current);
  }, []);

  return (
    <div
      className={`flex ${
        isDesktop ? "flex-row mb-4" : "flex-col mb-0"
      } flex-wrap`}
    >
      {React.Children.map(children, (child) => (
        <div className={`px-2 ${isDesktop ? "w-1/2" : "w-full"}`}>{child}</div>
      ))}
    </div>
  );
};

export default FormRow;
