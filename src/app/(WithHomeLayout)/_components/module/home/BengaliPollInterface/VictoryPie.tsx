/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useState, useEffect } from "react";
import { VictoryPie as VP } from "victory";

const VictoryPie = ({
  data,
  ...props
}: {
  data: { x: string; y: number; fill: string }[];
  [key: string]: any;
}) => {
  // Animation state
  const [activeData, setActiveData] = useState(
    data.map((item) => ({ ...item, y: 0 }))
  );

  // Animation effect - runs on component mount and when data changes
  useEffect(() => {
    // Small delay to ensure the animation is noticeable
    const timer = setTimeout(() => {
      setActiveData(data);
    }, 300);

    return () => clearTimeout(timer);
  }, [data]);

  const size = 140;

  return (
    <div
      className="relative"
      style={{
        width: size,
        height: size,
        boxShadow:
          "0px 1px 1px rgba(0, 0, 0, 0.2), 0px 1px 165px rgba(0, 0, 0, 0.1)",
        borderRadius: size / 2,
      }}
    >
      <VP
        width={size}
        height={size}
        data={activeData}
        colorScale={data.map((item) => item.fill)}
        innerRadius={size * 0.38}
        labelRadius={0}
        cornerRadius={8}
        labels={() => null}
        animate={{
          duration: 1000,
          onLoad: { duration: 1000 },
          easing: "bounce",
        }}
        style={{
          data: {
            stroke: "white",
            strokeWidth: 3,
          },
        }}
        {...props}
      />
    </div>
  );
};

export default VictoryPie;
