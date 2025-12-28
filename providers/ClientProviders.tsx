"use client";

import { ReactNode } from "react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

interface ClientProvidersProps {
  children: ReactNode;
}

// Create the QueryClient instance once
const queryClient = new QueryClient();

export const ClientProviders: React.FC<ClientProvidersProps> = ({ children }) => {
  return (
    <QueryClientProvider client={queryClient}>
      {children}
    </QueryClientProvider>
  );
};
