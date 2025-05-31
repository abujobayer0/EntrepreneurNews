"use client";

import React, { ReactNode } from "react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "sonner";

interface TQProviderProps {
  children: ReactNode;
}

const queryClient = new QueryClient();

const TQProvider: React.FC<TQProviderProps> = ({ children }) => {
  return (
    <QueryClientProvider client={queryClient}>
      <Toaster position="top-right" richColors />
      {children}
    </QueryClientProvider>
  );
};

export default TQProvider;
