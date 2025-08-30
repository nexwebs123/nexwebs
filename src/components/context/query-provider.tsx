"use client";
import { QueryClientProvider, QueryClient } from "@tanstack/react-query";
import { useMemo } from "react";

interface Props {
  children: Readonly<React.ReactNode>;
}

export function QueryProvider({ children }: Props) {
  const queryClient = useMemo(() => new QueryClient(), []);
  return (
    <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
  );
}
