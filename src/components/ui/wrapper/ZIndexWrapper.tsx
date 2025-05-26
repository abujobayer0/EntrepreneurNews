import React from "react";

interface ZIndexWrapperProps extends React.HTMLAttributes<HTMLDivElement> {
  zIndex?: number;
  children: React.ReactNode;
}

/**
 * A utility component that wraps children in a div with a specified z-index.
 * Useful for ensuring that dropdowns and other floating UI elements
 * appear above other content.
 */
const ZIndexWrapper: React.FC<ZIndexWrapperProps> = ({
  zIndex = 1000,
  children,
  style,
  ...props
}) => {
  return (
    <div
      style={{
        zIndex,
        position: "relative",
        ...style,
      }}
      {...props}
    >
      {children}
    </div>
  );
};

export default ZIndexWrapper;
