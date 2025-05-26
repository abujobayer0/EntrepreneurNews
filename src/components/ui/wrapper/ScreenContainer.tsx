import React, { ReactNode } from 'react';

interface ScreenContainerProps {
  children: ReactNode;
  scrollable?: boolean;
  className?: string;
}

const ScreenContainer: React.FC<ScreenContainerProps> = ({
  children,
  className = '',
}) => {
  return (
    <div className={`w-full mx-auto md:max-w-7xl px-3 ${className}`}>
      {children}
    </div>
  );
};

export default ScreenContainer;
