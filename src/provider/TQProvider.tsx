"use client";

import React, { ReactNode } from "react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

interface TQProviderProps {
  children: ReactNode;
}

const queryClient = new QueryClient();

const TQProvider: React.FC<TQProviderProps> = ({ children }) => {
  return (
    <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
  );
};

export default TQProvider;
