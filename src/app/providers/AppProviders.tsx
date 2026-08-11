import { CssBaseline } from "@mui/material";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import type { PropsWithChildren } from "react";

import { NotificationProvider } from "@/shared/ui/notifications";

const queryClient = new QueryClient();

export const AppProviders = ({ children }: PropsWithChildren) => {
  return (
    <QueryClientProvider client={queryClient}>
      <NotificationProvider>
        <CssBaseline />
        {children}
      </NotificationProvider>
    </QueryClientProvider>
  );
};
