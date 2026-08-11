import { Snackbar } from "@mui/material";
import { createContext, useContext, useState } from "react";
import type { PropsWithChildren } from "react";

type NotificationContextValue = {
  notify: (message: string) => void;
};

const NotificationContext = createContext<NotificationContextValue | null>(null);

export const NotificationProvider = ({ children }: PropsWithChildren) => {
  const [message, setMessage] = useState("");

  return (
    <NotificationContext value={{ notify: setMessage }}>
      {children}
      <Snackbar
        autoHideDuration={3000}
        message={message}
        onClose={() => setMessage("")}
        open={Boolean(message)}
      />
    </NotificationContext>
  );
};

export const useNotification = () => {
  const notification = useContext(NotificationContext);

  if (!notification) {
    throw new Error("useNotification must be used within NotificationProvider");
  }

  return notification;
};
