import React, { ReactElement, ReactNode } from "react";

interface DynamicSvgIconProps {
  isActive: boolean;
  children: ReactNode;
}

/**
 * A component that renders SVG icons with dynamic colors based on active state.
 * This sets all <path> fill attributes to white when active.
 */
const DynamicSvgIcon: React.FC<DynamicSvgIconProps> = ({
  isActive,
  children,
}) => {
  if (!isActive || !React.isValidElement(children)) {
    return <>{children}</>;
  }

  const svgElement = children as ReactElement;

  // Type guard for SVGElement with children
  type SVGElementWithChildren = React.ReactElement<{
    children?: React.ReactNode;
  }>;

  const svgElementTyped = svgElement as SVGElementWithChildren;

  const modifiedChildren = React.Children.map(
    svgElementTyped.props.children,
    (child) => {
      if (
        React.isValidElement(child) &&
        typeof child.type === "string" &&
        child.type === "path"
      ) {
        // Ensure child.props is an object before spreading
        const props =
          typeof child.props === "object"
            ? { ...child.props, fill: "white" }
            : { fill: "white" };
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        return React.cloneElement(child as React.ReactElement<any>, props);
      }
      return child;
    }
  );

  return React.cloneElement(svgElement, {}, modifiedChildren);
};

export default DynamicSvgIcon;
